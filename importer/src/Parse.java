/* Copyright 2013 The Tor Project
 * See LICENSE for licensing information */

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.SortedMap;
import java.util.SortedSet;
import java.util.TimeZone;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.regex.Pattern;

import org.torproject.descriptor.BandwidthHistory;
import org.torproject.descriptor.BridgeNetworkStatus;
import org.torproject.descriptor.BridgePoolAssignment;
import org.torproject.descriptor.Descriptor;
import org.torproject.descriptor.DescriptorFile;
import org.torproject.descriptor.DescriptorReader;
import org.torproject.descriptor.DescriptorSourceFactory;
import org.torproject.descriptor.ExtraInfoDescriptor;
import org.torproject.descriptor.NetworkStatusEntry;
import org.torproject.descriptor.RelayNetworkStatusConsensus;
import org.torproject.descriptor.ServerDescriptor;

public class Parse {

  public static void main(String[] args) throws Exception {
    openOutputFiles();
    parseRelayDescriptors();
    parseBridgeDescriptors();
    parseBridgePoolAssignments();
    closeOutputFiles();
  }

  private static final long ONE_HOUR_MILLIS = 60L * 60L * 1000L,
      ONE_DAY_MILLIS = 24L * ONE_HOUR_MILLIS,
      ONE_WEEK_MILLIS = 7L * ONE_DAY_MILLIS;

  private static SimpleDateFormat dateTimeFormat = null;
  private static String formatDateTimeMillis(long millis) {
    if (dateTimeFormat == null) {
      dateTimeFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
      dateTimeFormat.setLenient(false);
      dateTimeFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
    }
    return dateTimeFormat.format(millis);
  }

  private static void parseRelayDescriptors() throws Exception {
    DescriptorReader descriptorReader =
        DescriptorSourceFactory.createDescriptorReader();
    descriptorReader.addDirectory(new File("in/relay-descriptors/"));
    Iterator<DescriptorFile> descriptorFiles =
        descriptorReader.readDescriptors();
    while (descriptorFiles.hasNext()) {
      DescriptorFile descriptorFile = descriptorFiles.next();
      for (Descriptor descriptor : descriptorFile.getDescriptors()) {
        if (descriptor instanceof RelayNetworkStatusConsensus) {
          parseRelayNetworkStatusConsensus(
              (RelayNetworkStatusConsensus) descriptor);
        } else if (descriptor instanceof ServerDescriptor) {
          parseServerDescriptor((ServerDescriptor) descriptor);
        } else if (descriptor instanceof ExtraInfoDescriptor) {
          parseExtraInfoDescriptor((ExtraInfoDescriptor) descriptor);
        }
      }
    }
  }

  private static void parseBridgeDescriptors() throws Exception {
    DescriptorReader descriptorReader =
        DescriptorSourceFactory.createDescriptorReader();
    descriptorReader.addDirectory(new File("in/bridge-descriptors/"));
    Iterator<DescriptorFile> descriptorFiles =
        descriptorReader.readDescriptors();
    while (descriptorFiles.hasNext()) {
      DescriptorFile descriptorFile = descriptorFiles.next();
      for (Descriptor descriptor : descriptorFile.getDescriptors()) {
        if (descriptor instanceof BridgeNetworkStatus) {
          parseBridgeNetworkStatus((BridgeNetworkStatus) descriptor);
        } else if (descriptor instanceof ServerDescriptor) {
          parseServerDescriptor((ServerDescriptor) descriptor);
        } else if (descriptor instanceof ExtraInfoDescriptor) {
          parseExtraInfoDescriptor((ExtraInfoDescriptor) descriptor);
        }
      }
    }
  }

  private static void parseBridgePoolAssignments() throws Exception {
    DescriptorReader descriptorReader =
        DescriptorSourceFactory.createDescriptorReader();
    descriptorReader.addDirectory(new File(
        "in/bridge-pool-assignments/"));
    Iterator<DescriptorFile> descriptorFiles =
        descriptorReader.readDescriptors();
    while (descriptorFiles.hasNext()) {
      DescriptorFile descriptorFile = descriptorFiles.next();
      for (Descriptor descriptor : descriptorFile.getDescriptors()) {
        if (descriptor instanceof BridgePoolAssignment) {
          parseBridgePoolAssignment((BridgePoolAssignment) descriptor);
        }
      }
    }
  }

  private static void parseRelayNetworkStatusConsensus(
      RelayNetworkStatusConsensus consensus) throws IOException {
    long publishedMillis = consensus.getValidAfterMillis();
    if (publishedMillis % ONE_HOUR_MILLIS > ONE_HOUR_MILLIS / 2) {
      return;
    }
    Map<String, Double>
        consensusWeightFractions = new HashMap<String, Double>(),
        guardProbabilities = new HashMap<String, Double>(),
        middleProbabilities = new HashMap<String, Double>(),
        exitProbabilities = new HashMap<String, Double>();
    calculatePathSelectionProbabilities(consensus,
        consensusWeightFractions, guardProbabilities, middleProbabilities,
        exitProbabilities);
    Map<String, String> countryCodes = new HashMap<String, String>();
    Map<String, Long> aSes = new HashMap<String, Long>();
    lookUpCountriesAndASes(consensus, countryCodes, aSes);
    for (NetworkStatusEntry statusEntry :
        consensus.getStatusEntries().values()) {
      if (!statusEntry.getFlags().contains("Running")) {
        continue;
      }
      String fingerprint = statusEntry.getFingerprint().
          toUpperCase();
      String descriptor = statusEntry.getDescriptor().toUpperCase();
      String nickname = statusEntry.getNickname();
      String nodetype = formatNodeType(statusEntry.getFlags(),
          statusEntry.getDirPort());
      String flags = formatFlags(statusEntry.getFlags());
      String ports = formatPorts(statusEntry.getDefaultPolicy(),
          statusEntry.getPortList());
      Double cwf = consensusWeightFractions.get(fingerprint);
      Double pg = guardProbabilities.get(fingerprint);
      Double pm = middleProbabilities.get(fingerprint);
      Double pe = exitProbabilities.get(fingerprint);
      Long asn = aSes.get(fingerprint);
      String country = countryCodes.get(fingerprint);
      writeStatusesLine(fingerprint, descriptor, nickname,
          publishedMillis, nodetype, flags, cwf, pg, pm, pe, asn, ports,
          country, null);
    }
  }

  private static void calculatePathSelectionProbabilities(
      RelayNetworkStatusConsensus consensus,
      Map<String, Double> consensusWeightFractions,
      Map<String, Double> guardProbabilities,
      Map<String, Double> middleProbabilities,
      Map<String, Double> exitProbabilities) {
    SortedMap<String, Integer> bandwidthWeights =
        consensus.getBandwidthWeights();
    boolean consensusContainsBandwidthWeights = false;
    double wgg = 0.0, wgd = 0.0, wmg = 0.0, wmm = 0.0, wme = 0.0,
        wmd = 0.0, wee = 0.0, wed = 0.0;
    if (bandwidthWeights != null) {
      SortedSet<String> weightKeys = new TreeSet<String>(Arrays.asList(
          "Wgg,Wgd,Wmg,Wmm,Wme,Wmd,Wee,Wed".split(",")));
      weightKeys.removeAll(bandwidthWeights.keySet());
      if (weightKeys.isEmpty()) {
        consensusContainsBandwidthWeights = true;
        wgg = ((double) bandwidthWeights.get("Wgg")) / 10000.0;
        wgd = ((double) bandwidthWeights.get("Wgd")) / 10000.0;
        wmg = ((double) bandwidthWeights.get("Wmg")) / 10000.0;
        wmm = ((double) bandwidthWeights.get("Wmm")) / 10000.0;
        wme = ((double) bandwidthWeights.get("Wme")) / 10000.0;
        wmd = ((double) bandwidthWeights.get("Wmd")) / 10000.0;
        wee = ((double) bandwidthWeights.get("Wee")) / 10000.0;
        wed = ((double) bandwidthWeights.get("Wed")) / 10000.0;
      }
    }
    SortedMap<String, Double>
        consensusWeights = new TreeMap<String, Double>(),
        guardWeights = new TreeMap<String, Double>(),
        middleWeights = new TreeMap<String, Double>(),
        exitWeights = new TreeMap<String, Double>();
    double totalConsensusWeight = 0.0;
    double totalGuardWeight = 0.0;
    double totalMiddleWeight = 0.0;
    double totalExitWeight = 0.0;
    for (NetworkStatusEntry statusEntry :
        consensus.getStatusEntries().values()) {
      if (!statusEntry.getFlags().contains("Running")) {
        continue;
      }
      String fingerprint = statusEntry.getFingerprint();
      boolean isExit = statusEntry.getFlags().contains("Exit") &&
          !statusEntry.getFlags().contains("BadExit");
      boolean isGuard = statusEntry.getFlags().contains("Guard");
      double consensusWeight = (double) statusEntry.getBandwidth();
      consensusWeights.put(fingerprint, consensusWeight);
      totalConsensusWeight += consensusWeight;
      if (consensusContainsBandwidthWeights) {
        double guardWeight = consensusWeight,
            middleWeight = consensusWeight,
            exitWeight = consensusWeight;
        if (isGuard && isExit) {
          guardWeight *= wgd;
          middleWeight *= wmd;
          exitWeight *= wed;
        } else if (isGuard) {
          guardWeight *= wgg;
          middleWeight *= wmg;
          exitWeight = 0.0;
        } else if (isExit) {
          guardWeight = 0.0;
          middleWeight *= wme;
          exitWeight *= wee;
        } else {
          guardWeight = 0.0;
          middleWeight *= wmm;
          exitWeight = 0.0;
        }
        guardWeights.put(fingerprint, guardWeight);
        middleWeights.put(fingerprint, middleWeight);
        exitWeights.put(fingerprint, exitWeight);
        totalGuardWeight += guardWeight;
        totalMiddleWeight += middleWeight;
        totalExitWeight += exitWeight;
      }
    }
    
    for (String fingerprint : consensusWeights.keySet()) {
      consensusWeightFractions.put(fingerprint,
          consensusWeights.get(fingerprint) / totalConsensusWeight);
      if (guardProbabilities.containsKey(fingerprint)) {
        guardProbabilities.put(fingerprint,
            guardWeights.get(fingerprint) / totalGuardWeight);
      }
      if (middleProbabilities.containsKey(fingerprint)) {
        middleProbabilities.put(fingerprint,
            middleWeights.get(fingerprint) / totalMiddleWeight);
      }
      if (exitProbabilities.containsKey(fingerprint)) {
        exitProbabilities.put(fingerprint,
            exitWeights.get(fingerprint) / totalExitWeight);
      }
    }
  }

  private static void lookUpCountriesAndASes(
      RelayNetworkStatusConsensus consensus,
      Map<String, String> countryCodes, Map<String, Long> aSes) {

    /* Make sure we have all required .csv files. */
    File[] geoIPCountryWhoisCsvFiles = new File[] {
        new File("geoip/ManualGeoIPCountryWhois.csv"),
        new File("geoip/AutomaticGeoIPCountryWhois.csv"),
        new File("geoip/GeoIPCountryWhois.csv")
    };
    File geoIPCountryWhoisCsvFile = null;
    for (File file : geoIPCountryWhoisCsvFiles) {
      if (file.exists()) {
        geoIPCountryWhoisCsvFile = file;
        break;
      }
    }
    if (geoIPCountryWhoisCsvFile == null) {
      System.err.println("No *GeoIPCountryWhois.csv file in geoip/.");
      return;
    }
    File geoIPASNum2CsvFile = new File("geoip/GeoIPASNum2.csv");
    if (!geoIPASNum2CsvFile.exists()) {
      System.err.println("No GeoIPASNum2.csv file in geoip/.");
      return;
    }

    /* Obtain a map from relay IP address strings to numbers. */
    Map<String, Long> addressStringNumbers = new HashMap<String, Long>();
    Pattern ipv4Pattern = Pattern.compile("^[0-9\\.]{7,15}$");
    for (NetworkStatusEntry statusEntry :
        consensus.getStatusEntries().values()) {
      String addressString = statusEntry.getAddress();
      long addressNumber = -1L;
      if (ipv4Pattern.matcher(addressString).matches()) {
        String[] parts = addressString.split("\\.", 4);
        if (parts.length == 4) {
          addressNumber = 0L;
          for (int i = 0; i < 4; i++) {
            addressNumber *= 256L;
            int octetValue = -1;
            try {
              octetValue = Integer.parseInt(parts[i]);
            } catch (NumberFormatException e) {
            }
            if (octetValue < 0 || octetValue > 255) {
              addressNumber = -1L;
              break;
            }
            addressNumber += octetValue;
          }
        }
      }
      if (addressNumber >= 0L) {
        addressStringNumbers.put(addressString, addressNumber);
      }
    }
    if (addressStringNumbers.isEmpty()) {
      System.err.println("No relay IP addresses to resolve to cities or "
          + "ASN.");
      return;
    }

    /* Obtain a map from IP address numbers to country codes. */
    Map<Long, String> addressNumberCountryCodes =
        new HashMap<Long, String>();
    try {
      SortedSet<Long> sortedAddressNumbers = new TreeSet<Long>(
          addressStringNumbers.values());
      long firstAddressNumber = sortedAddressNumbers.first();
      BufferedReader br = new BufferedReader(new FileReader(
          geoIPCountryWhoisCsvFile));
      String line;
      long previousStartIpNum = -1L;
      while ((line = br.readLine()) != null) {
        if (!line.startsWith("\"")) {
          continue;
        }
        String[] parts = line.replaceAll("\"", "").split(",", 6);
        if (parts.length != 6) {
          System.err.println("Illegal line '" + line + "' in "
              + geoIPCountryWhoisCsvFile.getAbsolutePath() + ".");
          br.close();
          return;
        }
        try {
          long startIpNum = Long.parseLong(parts[2]);
          if (startIpNum <= previousStartIpNum) {
            System.err.println("Line '" + line + "' not sorted in "
                + geoIPCountryWhoisCsvFile.getAbsolutePath() + ".");
            br.close();
            return;
          }
          previousStartIpNum = startIpNum;
          while (firstAddressNumber < startIpNum &&
              firstAddressNumber != -1L) {
            sortedAddressNumbers.remove(firstAddressNumber);
            if (sortedAddressNumbers.isEmpty()) {
              firstAddressNumber = -1L;
            } else {
              firstAddressNumber = sortedAddressNumbers.first();
            }
          }
          long endIpNum = Long.parseLong(parts[3]);
          while (firstAddressNumber <= endIpNum &&
              firstAddressNumber != -1L) {
            String countryCode = parts[4];
            addressNumberCountryCodes.put(firstAddressNumber,
                countryCode);
            sortedAddressNumbers.remove(firstAddressNumber);
            if (sortedAddressNumbers.isEmpty()) {
              firstAddressNumber = -1L;
            } else {
              firstAddressNumber = sortedAddressNumbers.first();
            }
          }
          if (firstAddressNumber == -1L) {
            break;
          }
        }
        catch (NumberFormatException e) {
          System.err.println("Number format exception while parsing line "
              + "'" + line + "' in "
              + geoIPCountryWhoisCsvFile.getAbsolutePath() + ".");
          br.close();
          return;
        }
      }
      br.close();
    } catch (IOException e) {
      System.err.println("I/O exception while reading "
          + geoIPCountryWhoisCsvFile.getAbsolutePath() + ".");
      return;
    }

    /* Obtain a map from IP address numbers to ASN. */
    Map<Long, String> addressNumberASN = new HashMap<Long, String>();
    try {
      SortedSet<Long> sortedAddressNumbers = new TreeSet<Long>(
          addressStringNumbers.values());
      long firstAddressNumber = sortedAddressNumbers.first();
      BufferedReader br = new BufferedReader(new FileReader(
          geoIPASNum2CsvFile));
      String line;
      long previousStartIpNum = -1L;
      while ((line = br.readLine()) != null) {
        String[] parts = line.replaceAll("\"", "").split(",", 3);
        if (parts.length != 3) {
          System.err.println("Illegal line '" + line + "' in "
              + geoIPASNum2CsvFile.getAbsolutePath() + ".");
          br.close();
          return;
        }
        try {
          long startIpNum = Long.parseLong(parts[0]);
          if (startIpNum <= previousStartIpNum) {
            System.err.println("Line '" + line + "' not sorted in "
                + geoIPASNum2CsvFile.getAbsolutePath() + ".");
            br.close();
            return;
          }
          previousStartIpNum = startIpNum;
          while (firstAddressNumber < startIpNum &&
              firstAddressNumber != -1L) {
            sortedAddressNumbers.remove(firstAddressNumber);
            if (sortedAddressNumbers.isEmpty()) {
              firstAddressNumber = -1L;
            } else {
              firstAddressNumber = sortedAddressNumbers.first();
            }
          }
          long endIpNum = Long.parseLong(parts[1]);
          while (firstAddressNumber <= endIpNum &&
              firstAddressNumber != -1L) {
            if (parts[2].startsWith("AS") &&
                parts[2].split(" ", 2).length == 2) {
              addressNumberASN.put(firstAddressNumber, parts[2]);
            }
            sortedAddressNumbers.remove(firstAddressNumber);
            if (sortedAddressNumbers.isEmpty()) {
              firstAddressNumber = -1L;
            } else {
              firstAddressNumber = sortedAddressNumbers.first();
            }
          }
          if (firstAddressNumber == -1L) {
            break;
          }
        }
        catch (NumberFormatException e) {
          System.err.println("Number format exception while parsing line "
              + "'" + line + "' in "
              + geoIPASNum2CsvFile.getAbsolutePath() + ".");
          br.close();
          return;
        }
      }
      br.close();
    } catch (IOException e) {
      System.err.println("I/O exception while reading "
          + geoIPASNum2CsvFile.getAbsolutePath() + ".");
      return;
    }

    /* Finally, set relays' country and ASN information. */
    for (NetworkStatusEntry statusEntry :
        consensus.getStatusEntries().values()) {
      String fingerprint = statusEntry.getFingerprint();
      String addressString = statusEntry.getAddress();
      if (addressStringNumbers.containsKey(addressString)) {
        long addressNumber = addressStringNumbers.get(addressString);
        if (addressNumberCountryCodes.containsKey(addressNumber)) {
          String countryCode = addressNumberCountryCodes.get(
              addressNumber);
          countryCodes.put(fingerprint, countryCode);
        }
        if (addressNumberASN.containsKey(addressNumber)) {
          String[] parts = addressNumberASN.get(addressNumber).split(" ",
              2);
          long asn = Integer.parseInt(parts[0].substring(2));
          aSes.put(fingerprint, asn);
        }
      }
    }
  }

  private static String formatNodeType(SortedSet<String> flags,
      int dirPort) {
    int written = 0;
    StringBuilder sb = new StringBuilder("[");
    if (flags.contains("Guard")) {
      sb.append((written++ > 0 ? "," : "") + "\"Guard\"");
    }
    sb.append((written++ > 0 ? "," : "") + "\"Middle\"");
    if (flags.contains("Exit") && !flags.contains("BadExit")) {
      sb.append((written++ > 0 ? "," : "") + "\"Exit\"");
    }
    if (dirPort > 0) {
      sb.append((written++ > 0 ? "," : "") + "\"Dir\"");
    }
    sb.append("]");
    return sb.toString();
  }

  private static String formatFlags(SortedSet<String> flags) {
    int written = 0;
    StringBuilder sb = new StringBuilder("[");
    for (String flag : flags) {
      sb.append((written++ > 0 ? "," : "") + "\"" + flag + "\"");
    }
    sb.append("]");
    return sb.toString();
  }

  private static String formatPorts(String defaultPolicy,
      String portList) {
    if (defaultPolicy == null || portList == null) {
      return null;
    }
    boolean accept = defaultPolicy.equals("accept");
    SortedSet<Integer> relevantPorts = new TreeSet<Integer>();
    relevantPorts.add(80);
    relevantPorts.add(443);
    relevantPorts.add(6667);
    SortedSet<Integer> foundPorts = new TreeSet<Integer>();
    for (String ports : portList.split(",", -1)) {
      int fromPort, toPort;
      if (ports.contains("-")) {
        String[] parts = ports.split("-");
        fromPort = Integer.parseInt(parts[0]);
        toPort = Integer.parseInt(parts[1]);
      } else {
        fromPort = toPort = Integer.parseInt(ports);
      }
      if (toPort < relevantPorts.first()) {
        continue;
      } else if (fromPort > relevantPorts.last()) {
        break;
      }
      for (int port : relevantPorts) {
        if (fromPort <= port && port <= toPort) {
          foundPorts.add(port);
        }
      }
    }
    StringBuilder sb = new StringBuilder("[");
    int written = 0;
    for (int port : relevantPorts) {
      if (!accept ^ foundPorts.contains(port)) {
        sb.append((written++ > 0 ? "," : "") + port);
      }
    }
    sb.append("]");
    return sb.toString();
  }

  private static void parseServerDescriptor(ServerDescriptor descriptor)
      throws IOException {
    String descriptorId = descriptor.getServerDescriptorDigest().
        toUpperCase();
    String extrainfo = descriptor.getExtraInfoDigest();
    long advertised = Math.min(descriptor.getBandwidthRate(),
        descriptor.getBandwidthBurst());
    if (descriptor.getBandwidthObserved() >= 0) {
      advertised = Math.min(descriptor.getBandwidthObserved(),
          advertised);
    }
    String osnorm = null, software = null;
    if (descriptor.getPlatform() != null) {
      if (descriptor.getPlatform().startsWith("Tor ")) {
        software = descriptor.getPlatform().replaceAll("\\.", "").
            substring(4, 7);
      }
      if (descriptor.getPlatform().contains(" on ")) {
        String osfullLower = descriptor.getPlatform().substring(
            descriptor.getPlatform().indexOf(" on ") + 4).toLowerCase();
        if (osfullLower.contains("linux")) {
          osnorm = "linux";
        } else if (osfullLower.contains("darwin")) {
          osnorm = "darwin";
        } else if (osfullLower.contains("freebsd")) {
          osnorm = "freebsd";
        } else if (osfullLower.contains("windows")) {
          osnorm = "windows";
        }
      }
    }
    writeDescriptorsLine(descriptorId, extrainfo, advertised, software,
        osnorm);
  }

  private static void parseExtraInfoDescriptor(
      ExtraInfoDescriptor descriptor) throws IOException {
    long publishedMillis = descriptor.getPublishedMillis();
    String fingerprint = descriptor.getFingerprint().
        toUpperCase();
    BandwidthHistory writeHistory = descriptor.getWriteHistory(),
        readHistory = descriptor.getReadHistory();
    parseBandwidthHistory(fingerprint, publishedMillis, writeHistory,
        readHistory);
    if (!descriptor.getTransports().isEmpty()) {
      String extrainfo = descriptor.getExtraInfoDigest().toUpperCase();
      StringBuilder sb = new StringBuilder();
      sb.append("[");
      int written = 0;
      for (String transport : descriptor.getTransports()) {
        sb.append((written++ > 0 ? "," : "") + "\"" + transport + "\"");
      }
      sb.append("]");
      String transports = sb.toString();
      writeExtrainfosLine(extrainfo, transports);
    }
  }

  private static void parseBandwidthHistory(String fingerprint,
      long publishedMillis, BandwidthHistory writeHistory,
      BandwidthHistory readHistory) throws IOException {
    if (writeHistory == null || readHistory == null ||
        writeHistory.getIntervalLength() !=
        readHistory.getIntervalLength() ||
        publishedMillis - writeHistory.getHistoryEndMillis()
        > ONE_WEEK_MILLIS ||
        publishedMillis - writeHistory.getHistoryEndMillis()
        > ONE_WEEK_MILLIS) {
      return;
    }
    Map<Long, Long>readHistoryValues = readHistory.getBandwidthValues(),
        writeHistoryValues = writeHistory.getBandwidthValues();
    long intervalLengthMillis = writeHistory.getIntervalLength() * 1000L;
    SortedSet<Long> intervalEnds = new TreeSet<Long>();
    intervalEnds.addAll(writeHistory.getBandwidthValues().keySet());
    intervalEnds.addAll(readHistory.getBandwidthValues().keySet());
    for (long intervalEndMillis : intervalEnds) {
      long intervalStartMillis =
          intervalEndMillis - intervalLengthMillis;
      for (int i = 0; i < 2; i++) {
        long fromMillis = intervalStartMillis;
        long toMillis = intervalEndMillis;
        long bytes = 0, seconds = intervalLengthMillis / 1000L;
        if (writeHistoryValues.containsKey(intervalEndMillis)) {
          bytes += writeHistoryValues.get(intervalEndMillis);
        }
        if (readHistoryValues.containsKey(intervalEndMillis)) {
          bytes += readHistoryValues.get(intervalEndMillis);
        }
        bytes /= 2L;
        if (intervalStartMillis / ONE_HOUR_MILLIS <
            intervalEndMillis / ONE_HOUR_MILLIS) {
          long hourBreakMillis = (intervalEndMillis / ONE_HOUR_MILLIS)
              * ONE_HOUR_MILLIS;
          if (i == 0) {
            toMillis = hourBreakMillis;
          } else if (i == 1) {
            fromMillis = hourBreakMillis;
          }
          seconds = (toMillis - fromMillis) / 1000L;
          if (seconds < 1) {
            continue;
          }
          bytes = (bytes * seconds * 1000L) / intervalLengthMillis;
        } else if (i == 1) {
          break;
        }
        long publishedHourMillis = (fromMillis / ONE_HOUR_MILLIS)
            * ONE_HOUR_MILLIS;
        writeBandwidthLine(fingerprint, publishedHourMillis, toMillis,
            bytes, seconds);
      }
    }
  }


  private static void parseBridgeNetworkStatus(BridgeNetworkStatus status)
      throws IOException {
    long publishedMillis = status.getPublishedMillis();
    if (publishedMillis % ONE_HOUR_MILLIS > ONE_HOUR_MILLIS / 2) {
      return;
    }
    long publishedHourMillis = (publishedMillis / ONE_HOUR_MILLIS)
        * ONE_HOUR_MILLIS;
    for (NetworkStatusEntry statusEntry :
        status.getStatusEntries().values()) {
      if (!statusEntry.getFlags().contains("Running")) {
        continue;
      }
      String fingerprint = statusEntry.getFingerprint().toUpperCase();
      String descriptor = statusEntry.getDescriptor().toUpperCase();
      String nickname = statusEntry.getNickname();
      boolean ec2bridge = nickname.startsWith("ec2bridge");
      writeStatusesLine(fingerprint, descriptor, nickname,
          publishedHourMillis, "[\"Bridge\"]", null, null, null, null,
          null, null, null, null, ec2bridge);
    }
  }

  private static void parseBridgePoolAssignment(
      BridgePoolAssignment assignment) throws IOException {
    long publishedMillis = assignment.getPublishedMillis();
    if (publishedMillis % ONE_HOUR_MILLIS > ONE_HOUR_MILLIS / 2) {
      return;
    }
    long publishedHourMillis = (publishedMillis / ONE_HOUR_MILLIS)
        * ONE_HOUR_MILLIS;
    for (Map.Entry<String, String> e :
        assignment.getEntries().entrySet()) {
      String fingerprint = e.getKey();
      String pool = e.getValue().toLowerCase();
      String poolnorm = "other";
      if (pool.startsWith("https")) {
        poolnorm = "https";
      } else if (pool.startsWith("email")) {
        poolnorm = "email";
      }
      writeAssignmentsLine(fingerprint, publishedHourMillis, poolnorm);
    }
  }

  private static Map<String, BufferedWriter> openOutputFiles =
      new HashMap<String, BufferedWriter>();

  private static void openOutputFiles() throws IOException {
    openOutputFile("statuses", "_id, fingerprint, descriptor, nickname, "
        + "published, publishedhour, nodetype, flags, cwf, pg, pm, pe, "
        + "asn, ports, country, ec2bridge");
    openOutputFile("descriptors", "descriptor, extrainfo, advertised, "
        + "software, osnorm");
    openOutputFile("extrainfos", "extrainfo, transports");
    openOutputFile("assignments", "fingerprint, published, poolnorm");
    openOutputFile("bandwidth", "fingerprint, published, intervalend, "
        + "bytes, seconds");
  }

  private static void openOutputFile(String tableName, String columnNames)
      throws IOException {
    BufferedWriter bw = new BufferedWriter(new FileWriter(
        "out/" + tableName + ".sql"));
    bw.write("COPY " + tableName + " (" + columnNames
        + ") FROM stdin;\n");
    openOutputFiles.put(tableName, bw);
  }

  private static void writeStatusesLine(String fingerprint,
      String descriptor, String nickname, long publishedMillis,
      String nodetype, String flags, Double cwf, Double pg, Double pm,
      Double pe, Long asn, String ports, String country,
      Boolean ec2bridge) throws IOException {
    String published = formatDateTimeMillis(publishedMillis);
    String publishedhour = published.substring(0,
        "yyyy-MM-dd HH".length());
    String _id = fingerprint + "-1-" + publishedhour.replaceAll("-", "").
        replaceAll(" ", "");
    StringBuilder sb = new StringBuilder();
    sb.append(_id);
    sb.append("\t" + fingerprint);
    sb.append("\t" + descriptor);
    sb.append("\t" + nickname);
    sb.append("\t" + published);
    sb.append("\t" + publishedhour);
    sb.append("\t" + nodetype);
    sb.append("\t" + (flags == null ? "\\N" : flags));
    sb.append("\t" + (cwf == null ? "\\N" : String.format("%.6f", cwf)));
    sb.append("\t" + (pg == null ? "\\N" : String.format("%.6f", pg)));
    sb.append("\t" + (pm == null ? "\\N" : String.format("%.6f", pm)));
    sb.append("\t" + (pe == null ? "\\N" : String.format("%.6f", pe)));
    sb.append("\t" + (asn == null ? "\\N" : String.valueOf(asn)));
    sb.append("\t" + (ports == null ? "\\N" : ports));
    sb.append("\t" + (country == null ? "\\N" : country));
    sb.append("\t" + (ec2bridge == null ? "\\N" : (ec2bridge ? "t" : "f"))
        + "\n");
    openOutputFiles.get("statuses").write(sb.toString());
  }

  private static void writeDescriptorsLine(String descriptor,
      String extrainfo, long advertised, String software, String osnorm)
      throws IOException {
    openOutputFiles.get("descriptors").write(String.format("%s\t%s\t%d\t"
        + "%s\t%s\n", descriptor, extrainfo, advertised,
        software == null ? "\\N" : software,
        osnorm == null ? "\\N" : osnorm));
  }

  private static void writeExtrainfosLine(String extrainfo,
      String transports) throws IOException {
    openOutputFiles.get("extrainfos").write(String.format("%s\t%s\n",
        extrainfo, transports));
  }

  private static void writeAssignmentsLine(String fingerprint,
      long publishedMillis, String poolnorm) throws IOException {
    String published = formatDateTimeMillis(publishedMillis);
    openOutputFiles.get("assignments").write(String.format("%s\t%s\t%s\n",
        fingerprint, published, poolnorm));
  }

  private static void writeBandwidthLine(String fingerprint,
      long publishedMillis, long intervalendMillis, long bytes,
      long seconds) throws IOException {
    String published = formatDateTimeMillis(publishedMillis);
    String intervalend = formatDateTimeMillis(intervalendMillis);
    openOutputFiles.get("bandwidth").write(String.format(
        "%s\t%s\t%s\t%d\t%d\n", fingerprint, published, intervalend,
        bytes, seconds));
  }

  private static void closeOutputFiles() throws IOException {
    for (BufferedWriter bw : openOutputFiles.values()) {
      bw.write("\\.\n");
      bw.close();
    }
  }
}

