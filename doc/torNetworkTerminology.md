## Tor network terminology

The Tor network is comprised of a lot of different nodes.
All these nodes operate - despite their different functions - from the same software, just with different configuration flags set.
A single node can be in _most_ categories at the same time and in _every_ category over time.

**Nodes** are all the actors that form the network.
Nodes encompass clients and servers. Servers again encompass bridges and relays. Nodes can be either client or server, servers can be either bridge or relay. Relays can play different roles: Guard, Middle, Exit and Directory.
**Clients** are end user nodes, connecting to the Tor network to anonymously use the internet.
**Servers** are all nodes except clients.
Servers encompass relays and bridges.
**Bridges** are the nodes that clients connect to to circumvent attempts to block access to Tor.
**Relays** are the nodes that form the actual Tor network which provides anonymity.
Relays can take the roles of guard nodes, middle nodes, exit nodes and directory nodes.
**Guard** relays function as entry points to an anonymized route through the Tor network.
They are reached by the client either directly or, if a censor blocks them, through a bridge.
**Middle** relays function as intermediary steps on that route.
**Exit** relays function as exit points, leaving the Tor network and continuing to the destination on the internet.
**Directory** relays provide some auxiliary services to the Tor network.

	node							everything in the tor network
		client					the users
		server					everything serving the user
			bridge				special entry points to circumvent blocking
			relay					the actual anonymization network, with different roles:
				guard				entry points into the network
				middle			intermediary nodes on anonymizing route
				exit				now anonymized, continue route to actual destination
				directory		some auxiliary services

Some of these node types are mutually exclusive, some are not:

- a node may have been configured as bridge before or after being configured as a relay and that same node can switch to being a client at any time. But:
- a node can't be a client and a server at the same time.
- a server node can't be a bridge and a relay at the same time.
- a relay node quite commonly fulfills various roles simultaneously: a relay can be configured as guard node, middle node, exit node and directory mirror at the same time.

All this might be a bit confusing at first. What is most important to realize is that adding up the different kinds of relay nodes - guard, middle, exit and directory - will result in a number much bigger than the relay nodes actually available in the network.
Following is an attempt for a more detailed and extensive description.


	TODO	the following still needs a lot of work

*clients*   
Tor doesn't log any data at individual clients themselves, but it logs abstract data about clients at bridges and directory mirrors. 
Bridges are obvious, but directory mirrors maybe not so much. 
The idea is to count network status requests per day and per country, aggregate that data for all directory mirrors, and derive the number of clients from that number.   
The "time to download files over Tor" and "timeouts and failures of downloading files over Tor" parts are learned from clients run by the Tor project itself.   
See https://metrics.torproject.org/formats.html for details: "Second, we describe the numerous aggregate statistics that relays publish about their usage (PDF), including byte histories, directory request statistics, connecting client statistics, bridge user statistics, cell-queue statistics, exit-port statistics, and bidirectional connection use."   

*servers*    
The following data is gathered per server (relays and bridges alike):   
- Network status entry: There's a network status entry for every relay or bridge with some summary information. 
It's a confirmation by either the directory authorities (for relays) or the bridge authority (for bridges) that the given relay/bridge information is valid.  
But this summary doesn't contain, e.g., OS information or number of bytes spent on answering directory requests.
- Server descriptor: Every relay or bridge publishes a descriptor containing its contact information and capabilities to the directory authorities or bridge authority every 12--18 hours. 
This server descriptor is then referenced by digest from one or typically multiple network status entries.   
- Extra-info descriptor: Statistical information about a relay or bridge is not contained in the server descriptor, but in an extra-info descriptor. 
These are referenced from server descriptors by digest, with a 1:1 relationship.   
See https://metrics.torproject.org/formats.html for details about "the numerous aggregate statistics that relays publish about their usage (PDF), including byte histories, directory request statistics, connecting client statistics, bridge user statistics, cell-queue statistics, exit-port statistics, and bidirectional connection use."  

*bridges*  
Bridges are simply nodes with a I-want-to-be-a-bridge bit set in their configuration. 
However, whether a node is a bridge or a relay determines to some extend what data we have about that node. 
For example, we don't have country information about bridges, but we have that for relays.

*relays*
* guard node   
* middle node  
* exit node  
* directory mirror  
  Directory mirrors are just relays with an open directory ports.  So, the set of directory mirrors is a subset of the set of relays, and there'd be flags and all that for directory mirrors, too.
* combinations of guard, middle, exit and directory
  Knowing if an exit may also be used in the guard position can be interesting. 
  In general comparisons between any two types of relays should be possible,
  
*flags*
* BadExit
  The BadExit flag is already taken into account in the importer: a relay that has the Exit flag _and_ the BadExit flag isn't put into the Exit category. 
  The BadExit flag doesn't have any impact on the other types.
* Authority
  Being an authority is mostly relevant for directories, if at all. It's not a very important flag.
* Fast

	TODO

* Stable

	TODO

  
*other dimensions*  

* bandwidth   
  Bandwidth is measured for relays and bridges in two values: bandwidth advertized and bandwidth consumed.   

* probabilities   
  You can assign a consensus weight fraction to each relay, for any given date and hour. 
  Then you can say that all clients used that relay for about x% of their paths, or that a particular client used that relay for a particular path with a probability of x%.   
  There are currently four such weights/probabilities defined for relays (this does not apply to bridges). 
   
  Quoting from Onionoo's protocol specification:    
  "consensus_weight_fraction": Fraction of this relay's consensus weight compared to the sum of all consensus weights in the network. This fraction is a very rough approximation of the probability of this relay to be selected by clients.   
  "guard_probability": Probability of this relay to be selected for the guard position. This probability is calculated based on consensus weights, relay flags, and bandwidth weights in the consensus. Path selection depends on more factors, so that this probability can only be an approximation.   
  "middle_probability": Probability of this relay to be selected for the middle position. This probability is calculated based on consensus weights, relay flags, and bandwidth weights in the consensus. Path selection depends on more factors, so that this probability can only be an approximation.   
  "exit_probability": Probability of this relay to be selected for the exit position. This probability is calculated based on consensus weights, relay flags, and bandwidth weights in the consensus. Path selection depends on more factors, so that this probability can only be an approximation.
  
  Probabilities for selecting a node in the guard/middle/exit position are calculated based on the node's consensus weight, whether it has the Guard and/or Exit flag, and the bandwidth weights in the consensus. 
  
* autonomous systems    
  For visualization, autonomous systems are very similar to countries. Think of an autonomous system as a group of IP address blocks belonging to the same organization. 
  You want to avoid that all relays in a path, or at least entry and exit, are located in the same autonomous system and thereby controlled by the same organization. 
  And you want to avoid that a single AS/organization sees a too high percentage of Tor traffic. For example, AS39138 rrbone UG (haftungsbeschraenkt) currently sees almost 20% of Tor's exit traffic. 
  That's about as interesting as the fact that over 30% of Tor's traffic exits from U.S. relays.

* pluggable transports   
  <OR> steht hier für Onion Routing, sprich das normale Tor-Protocol. 
  Eine Bridge, die Pluggable Transports anbietet kann auch normale Tor-Verbindungen zulassen, die unter <OR> zusammengefasst würden. 
  Das ist auch gleichzeitig der Default-Wert wenn eine Bridge keine Statistiken zu Pluggable Transports übermittelt, daher der große Anteil. 
  Außerdem gibt es noch <??> für den Fall, dass weder ein bekannter Pluggable Transport noch <OR> benutzt wurden. 
  Das wird aber wahrscheinlich nur sehr selten passieren.



**even more**
* for some rather detailed explenations see the [Tor directory protocol, version 3](https://gitweb.torproject.org/torspec.git/blob/HEAD:/dir-spec.txt)
	

**postponed**

* performance measures   
  The "time to download files over Tor" and "timeouts and failures of downloading files over Tor" are learned from clients we run ourselves, coming from Torperf output files. 
  The gathering of this data is currently worked on and work on it's visualization is postponed.

* measuring bandwidths for types of relays    

  Bandwidth figures (advertized and consumed) include all types of services offered by a node. Currently they can not be refined to the level of indidividual services like bandwidth consumed by guard nodes, middle nodes etc.   
  In theory, we have data about consumed directory bandwidth for newer relays or bridges, but not for traffic as bridge, guard, middle, or  exit node. 
  We only have that data for the directory role, and only for a subset of relays, and deriving this data is difficult. 
  There are privacy implications of gathering too detailed data, so we can't get more detailed data.    
  We can also not simply derive these values from the data we already have since relays can offer more than one service. 
  E.g. relays with the Guard flag are not exclusively used in the guard position, but could also be used in the middle position and possibly also as directory server. 
  And if relays also have the Exit flag, they'll be used less in the previously mentioned positions, but therefore also in the exit position.    
  We could derive advertised or consumed guard bandwidth for types of relays from relay bandwidth similar to how we derive guard probability from consensus weight using the Guard/Exit/BadExit flag and Wgd/Wgg bandwidth weights.   
  I'm uncertain whether this would produce good metrics or not. We'd mix path selection probabilities with actual usage data, and I'm not sure whether we can do that. This is a fine question for an analysis task and a later extension of Visionion, but currently we don't feel confident enough now to implement this in the current database importer. Results might be misleading.
  
  An additional note: We can count relays that are *suitable* for guard position, and we can sum up advertised and observed bandwidth of those relays.   
  We cannot sum up advertised and observed bandwidth of relays that have actually been used as guards.  In fact, we cannot even count those relays, because a relay may have been used 20% in guard position, 30% in middle position, 40% in exit position, and 10% as directory.  We don't know those fractions.

