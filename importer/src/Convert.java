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
import java.util.List;
import java.util.Map;
import java.util.SortedMap;
import java.util.SortedSet;
import java.util.TimeZone;
import java.util.TreeMap;
import java.util.TreeSet;

import com.google.gson.Gson;

public class Convert {
  public static void main(String[] args) throws IOException {
    initImportTimestamp();
    openOutputFiles();
    parseVisionionCsvFile();
    parseUserstatsCsvFile();
    closeOutputFiles();
  }

  private static String importTimestamp;
  private static void initImportTimestamp() {
    SimpleDateFormat dateTimeFormat = new SimpleDateFormat(
        "yyyy-MM-dd HH:mm:ss.SSS");
    dateTimeFormat.setLenient(false);
    dateTimeFormat.setTimeZone(TimeZone.getTimeZone("UTC"));
    long currentMillis = System.currentTimeMillis();
    importTimestamp = dateTimeFormat.format(currentMillis).
        replaceAll(" ", "T") + "Z";
  }

  private static void parseVisionionCsvFile() throws IOException {
    File visionionCsvFile = new File("visionion.csv");
    if (!visionionCsvFile.exists()) {
      System.err.println("Could not fine "
          + visionionCsvFile.getAbsolutePath() + ".  Skipping.");
      return;
    }
    BufferedReader br = new BufferedReader(new FileReader(
        visionionCsvFile));
    String line = br.readLine();
    while ((line = br.readLine()) != null) {
      Node node = parseVisionionLine(line);
      writeVisionionLine(node);
    }
    br.close();
  }

  private static void parseUserstatsCsvFile() throws IOException {
    File userstatsCsvFile = new File("userstats.csv");
    if (!userstatsCsvFile.exists()) {
      System.err.println("Could not fine "
          + userstatsCsvFile.getAbsolutePath() + ".  Skipping.");
      return;
    }
    BufferedReader br = new BufferedReader(new FileReader(
        userstatsCsvFile));
    String line = br.readLine();
    while ((line = br.readLine()) != null) {
      parseUserstatsLine(line);
    }
    br.close();
    writeUserstatsLines();
  }

  private static class Node {
    private String _id;
    private String addd;
    private String node;
    private String nick;
    private String date;
    private Integer span;
    private String[] role;
    private String[] flag;
    private Long bwa;
    private Long bwc;
    private String tsv;
    private String osv;
    private Double pbr;
    private Double pbg;
    private Double pbm;
    private Double pbe;
    private Long as;
    private int[] pex;
    private String cc;
    private String brp;
    private Boolean bre;
    private String[] brt;
  }

  private static class Client {
    private String _id;
    private String addd = "";
    private String date = "";
    private Integer span = 0;
    private Integer cb = 0;
    private SortedMap<String, Integer> cbcc =
        new TreeMap<String, Integer>();
    private Integer cr = 0;
    private SortedMap<String, Integer> crcc =
        new TreeMap<String, Integer>();
    private SortedMap<String, Integer> cpt =
        new TreeMap<String, Integer>();
    private SortedMap<String, Integer> cip =
        new TreeMap<String, Integer>();
  }

  private static Node parseVisionionLine(String line) {
    String[] parts = line.split(";", 22);
    if (parts.length != 22) {
      System.err.println("Illegal line '" + line + "'.  Skipping.");
      return null;
    }
    Node node = new Node();
    node._id = parts[0];
    node.addd = importTimestamp;
    node.node = parts[1];
    node.nick = parts[2];
    node.date = parts[3];
    node.span = Integer.parseInt(parts[4]);
    if (parts[6].length() <= 2) {
      System.err.println("Illegal line '" + line + "' indicating not a "
          + "single role of this node.  Skipping.");
      return null;
    }
    node.role = parts[6].replaceAll("\\[", "").replaceAll("\\]",  "").
        replaceAll("\"", "").split(",");
    List<String> roles = Arrays.asList(node.role);
    if (roles.contains("Bridge")) {
      node.bwa = 0L;
      node.bwc = 0L;
      node.tsv = "";
      node.osv = "";
      node.brp = "";
      node.bre = false;
      node.brt = new String[0];
    } else {
      node.flag = new String[0];
      node.bwa = 0L;
      node.bwc = 0L;
      node.tsv = "";
      node.osv = "";
      node.pbr = 0.0;
      node.pbg = 0.0;
      node.pbm = 0.0;
      node.pbe = 0.0;
      node.as = 0L;
      node.pex = new int[0];
      node.cc = "";
    }
    if (parts[7].length() > 2) {
      node.flag = parts[7].replaceAll("\\[", "").replaceAll("\\]",  "").
          replaceAll("\"", "").split(",");
    }
    if (parts[8].length() > 0) {
      node.bwa = Long.parseLong(parts[8]);
    }
    if (parts[9].length() > 0) {
      node.bwc = Long.parseLong(parts[9]);
    }
    if (parts[10].length() > 0) {
      node.tsv = parts[10];
    }
    if (parts[11].length() > 0) {
      node.osv = parts[11];
    }
    if (parts[12].length() > 0) {
      node.pbr = Double.parseDouble(parts[12]);
    }
    if (parts[13].length() > 0) {
      node.pbg = Double.parseDouble(parts[13]);
    }
    if (parts[14].length() > 0) {
      node.pbm = Double.parseDouble(parts[14]);
    }
    if (parts[15].length() > 0) {
      node.pbe = Double.parseDouble(parts[15]);
    }
    if (parts[16].length() > 0) {
      node.as = Long.parseLong(parts[16]);
    }
    if (parts[17].length() > 2) {
      String[] portStrings = parts[17].replaceAll("\\[", "").
          replaceAll("\\]",  "").split(",");
      int[] portInts = new int[portStrings.length];
      for (int i = 0; i < portStrings.length; i++) {
        portInts[i] = Integer.parseInt(portStrings[i]);
      }
      node.pex = portInts;
    }
    if (parts[18].length() > 0) {
      node.cc = parts[18];
    }
    if (parts[19].length() > 0) {
      node.brp = parts[19];
    }
    if (parts[20].length() > 0) {
      node.bre = parts[20].equals("t");
    }
    if (parts[21].length() > 0) {
      node.brt = parts[21].replaceAll("\\[", "").replaceAll("\\]",  "").
          replaceAll("\"", "").split(",");
    }
    return node;
  }

  private static SortedMap<String, Integer>
      cb = new TreeMap<String, Integer>(),
      cr = new TreeMap<String, Integer>();

  private static SortedMap<String, SortedMap<String, Integer>>
      cbcc = new TreeMap<String, SortedMap<String, Integer>>(),
      crcc = new TreeMap<String, SortedMap<String, Integer>>();
  private static SortedMap<String, SortedMap<String, Integer>>
      bptu = new TreeMap<String, SortedMap<String, Integer>>();
  private static SortedMap<String, SortedMap<String, Integer>>
      ipvu = new TreeMap<String, SortedMap<String, Integer>>();

  private static void parseUserstatsLine(String line) {
    String[] parts = line.split(",", 7);
    if (parts.length != 7) {
      System.err.println("Illegal line '" + line + "'.  Skipping.");
      return;
    }
    String date = parts[0];
    String node = parts[1];
    String country = parts[2].replaceAll("\"", "").toUpperCase();
    String transport = parts[3].replaceAll("\"", "");
    String version = parts[4].replaceAll("\"", "");
    int frac = Integer.parseInt(parts[5]);
    int users = Integer.parseInt(parts[6]);
    if (frac < 10 || users < 1) {
      return;
    }
    if (node.equals("relay")) {
      if (country.length() > 0) {
        if (!crcc.containsKey(date)) {
          crcc.put(date, new TreeMap<String, Integer>());
        }
        crcc.get(date).put(country, users);
      } else {
        cr.put(date, users);
      }
    } else {
      if (country.length() > 0) {
        if (!cbcc.containsKey(date)) {
          cbcc.put(date, new TreeMap<String, Integer>());
        }
        cbcc.get(date).put(country, users);
      } else if (transport.length() > 0) {
        if (!bptu.containsKey(date)) {
          bptu.put(date, new TreeMap<String, Integer>());
        }
        bptu.get(date).put(transport, users);
      } else if (version.length() > 0) {
        if (!ipvu.containsKey(date)) {
          ipvu.put(date, new TreeMap<String, Integer>());
        }
        ipvu.get(date).put(version, users);
      } else {
        cb.put(date, users);
      }
    }
  }

  private static Gson gson = new Gson();

  private static BufferedWriter relaysWriter, bridgesWriter,
      clientsWriter;

  private static void openOutputFiles() throws IOException {
    relaysWriter = new BufferedWriter(new FileWriter("relays.json"));
    bridgesWriter = new BufferedWriter(new FileWriter("bridges.json"));
    clientsWriter = new BufferedWriter(new FileWriter("clients.json"));
  }

  private static void writeVisionionLine(Node node) throws IOException {
    List<String> roles = Arrays.asList(node.role);
    if (roles.contains("Bridge")) {
      node.role = null;
      node.pex = null;
      String nodeString = gson.toJson(node);      
      bridgesWriter.write(nodeString + "\n");
    } else {
      String nodeString = gson.toJson(node);
      relaysWriter.write(nodeString + "\n");
    }
  }

  private static void writeUserstatsLines() throws IOException {
    SortedSet<String> allDates = new TreeSet<String>();
    allDates.addAll(cb.keySet());
    allDates.addAll(cr.keySet());
    allDates.addAll(cbcc.keySet());
    allDates.addAll(crcc.keySet());
    allDates.addAll(bptu.keySet());
    allDates.addAll(ipvu.keySet());
    for (String date : allDates) {
      for (int hour = 0; hour < 24; hour++) {
        Client client = new Client();
        client._id = "client-1-" + date.replaceAll("-", "")
            + String.format("%02d",  hour);
        client.addd = importTimestamp;
        client.date = date + " " + String.format("%02d", hour);
        client.span = 1;
        client.cb = distributeUserstatsToHours(cb.get(date), hour);
        client.cr = distributeUserstatsToHours(cr.get(date), hour);
        client.cbcc = distributeUserstatsToHours(cbcc.get(date), hour);
        client.crcc = distributeUserstatsToHours(crcc.get(date), hour);
        client.cpt = distributeUserstatsToHours(bptu.get(date), hour);
        client.cip = distributeUserstatsToHours(ipvu.get(date), hour);
        String clientString = gson.toJson(client).
            replaceAll("\\\\u003c", "<").replaceAll("\\\\u003e", ">");
        clientsWriter.write(clientString + "\n");
      }
    }
  }

  private static SortedMap<String, Integer> distributeUserstatsToHours(
      SortedMap<String, Integer> userstatsPerDay, int hour) {
    SortedMap<String, Integer> userstatsPerHour =
        new TreeMap<String, Integer>();
    for (Map.Entry<String, Integer> e : userstatsPerDay.entrySet()) {
      int usersPerHour = (e.getValue() / 24)
          + (e.getValue() % 24 > hour ? 1 : 0);
      if (usersPerHour > 0) {
        userstatsPerHour.put(e.getKey(), usersPerHour);
      }
    }
    return userstatsPerHour;
  }

  private static Integer distributeUserstatsToHours(
      Integer userstatsPerDay, int hour) {
    Integer usersPerHour = (userstatsPerDay / 24)
        + (userstatsPerDay % 24 > hour ? 1 : 0);
    if (usersPerHour < 1) {
      usersPerHour = null;
    }
    return userstatsPerDay;

  }

  private static void closeOutputFiles() throws IOException {
    relaysWriter.close();
    bridgesWriter.close();
    clientsWriter.close();
  }
}
