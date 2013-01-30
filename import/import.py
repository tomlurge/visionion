"""
The visionion data importer reads two local directories with relay
descriptors, namely server descriptors and network status
consensuses, joins the two descriptor types, and inserts a new
document per running relay at a given hour to mongodb.

In order to run the data importer, clone Stem using
  git clone https://git.torproject.org/stem.git ,
make extracted relay network status consensus files available in
  in/relay-descriptors/consensuses/
and extracted relay server descriptor files in
  in/relay-descriptors/server-descriptors/ ,
and make sure that mongod is running.  Then run this script.

Imported documents contain the following fields in no particular order:
 - "valid_after": time when the consensus became valid in ISO 8601 format
    "YYYY-MM-DD hh:mm:ss" (always present)
 - "fingerprint": upper-case hex encoded router identifier string (always
    present)
 - "flags": list of relay flag strings like "Running", "Guard", or "Exit"
    (always present, but possibly empty for non-running bridges)
 - "tor_version": version of tor formatted as "major.minor.micro" (missing
    if server descriptor is missing or if not provided by router)
 - "operating_system": operating system of this router (missing if server
    descriptor is missing or if not provided by router)
 - "advertised_bandwidth": advertised capacity that the router is willing
    and capable to relay in B/s (missing if server descriptor is missing)
"""

from binascii import b2a_hex, a2b_base64
#from pymongo import Connection  # TODO uncomment to actually import
from stem.descriptor.networkstatus import NetworkStatusDocumentV3
from stem.descriptor.reader import DescriptorReader
from stem.descriptor.router_status_entry import RouterStatusEntryV3
from stem.descriptor.server_descriptor import RelayDescriptor
from datetime import datetime

def parse_server_descriptors(dir):
    """ Parse relay server descriptors in dir and return a dict with
        keys being upper-case hex server descriptor identifiers and
        values being dicts with relevant descriptor parts to be
        imported into mongodb. """
    result = {}
    with DescriptorReader(dir) as reader:
        for descriptor in reader:
            if not isinstance(descriptor, RelayDescriptor):
                print "Skipping non relay server descriptor in %s." % \
                        (dir, )
                continue
            descriptor_parts = {}
            if descriptor.average_bandwidth and \
                    descriptor.burst_bandwidth and \
                    descriptor.observed_bandwidth:
                descriptor_parts['advertised_bandwidth'] = min(
                        descriptor.average_bandwidth,
                        descriptor.burst_bandwidth,
                        descriptor.observed_bandwidth)
            if descriptor.tor_version:
                descriptor_parts['tor_version'] = '%d.%d.%d' % (
                        descriptor.tor_version.major,
                        descriptor.tor_version.minor,
                        descriptor.tor_version.micro, )
            if descriptor.operating_system:
                descriptor_parts['operating_system'] = \
                        descriptor.operating_system
            result[descriptor.digest()] = descriptor_parts
    return result

def parse_and_join_consensuses(dir, server_descriptor_parts):
    #db = Connection().analytics  # TODO uncomment to actually import
    with DescriptorReader(dir) as reader:
        for entry in reader:
            if not isinstance(entry, RouterStatusEntryV3):
                print "Skipping non relay network status entry in %s." % \
                        (dir, )
                continue
            descriptor_digest = b2a_hex(a2b_base64("%s==" % (
                    entry.digest, ))).upper()
            entry_parts = {}
            if descriptor_digest in server_descriptor_parts:
                entry_parts = server_descriptor_parts.get(
                        descriptor_digest)
            entry_parts['valid_after'] = \
                    entry.document.valid_after.isoformat(' ')
            entry_parts['fingerprint'] = entry.fingerprint
            if entry.flags:
                entry_parts['flags'] = entry.flags
            else:
                entry_parts['flags'] = []
            print entry_parts  # TODO comment out when importing
            #db.test.insert(descriptor_parts)  # TODO uncomment to import

def main():
    print "Parsing server descriptors..."
    server_descriptor_parts = parse_server_descriptors(
            'in/relay-descriptors/server-descriptors/')
    print "Parsing consensuses, joining them with server " \
            "descriptors, and inserting everything into mongodb..."
    parse_and_join_consensuses('in/relay-descriptors/consensuses/',
            server_descriptor_parts)
    print "Terminating."

if __name__ == "__main__":
    main()

