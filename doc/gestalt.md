# visionion

## Import data gestalt

So, what is it that we are talking about? What do all these numbers actually represent? Are they exact, or guesstimates? Are the concepts that we stick numbers on accurate and precise?   
Sometimes it's surprsingly easy to get the numbers wrong. Better we take a deeper look...

### Short overview

The imported data represents the following dimensions:
	
 node types
 
	3 node types: relays, bridges, clients
	4 relay types: guard, middle, exit, directory (not mutually exclusive)

 flags

	2 flags for relays only: stable, fast - both boolean (the others are too unimportant to aggregate) 
	1 flag for exits: permitted exit ports (3 values, not mutually exclusive)
	3 flags for bridges only: pool (one of 3), ec2 (boolean), transport (2 values, n.m.e.)

 bandwidths	

	2 bandwidths for all servers: advertized and consumed

 probabilities

	4 probabilties: for relay in general and for guard, middle, exit

 software

	8 software versions for tor
	5 software versions for os

 areas

	up to about 250 countries
	more than 40.000 autonomous systems

 clients

	2 types: @relays, @bridges
	2 types per country: @relays, @bridges
	2 flags: transport used (4 values) and ip-version used (2 values)


The imported documents can be sensibly categorized in 3 mutually exclusive types, the node types: relays, bridges, clients.  
The fields in the 3 types of imported documents overlap only in one case: date. Date is the only clamp between all datasets. 


### Detailed overview
The table below tries to capture the multiple dimensions and qualities of the imported data.

"Mode" refers to the essential quality of the thing being counted. 
This may be the numbers of hardware instances, software characteristics, measures of quality of service, locality of a service.   
"Measure" documents if the numbers denote (one or multiple) absolute values, percentages, averages etc.   
Percentages don't easily compare to absolute values. Also not in all categories values add up to a meaningful sum because value spaces overlap (like a relay can open more than one exit port). 
Therefor it's important to carefully arrange meaningful and actually comparable configurations.   
"Unit" is not much different from Measure, mainly reflecting if the field is single value or multi valued.   
"Upper limit" denotes the upper limit of the value space. For percentages it's 100. 
For each relay role it's the total number of relays - the important implication being that each relay can even during the minimal timespan of 1 hour fulfill multiple roles: the roles alltogether don't add up to the number of relays, the are up to 4 times more. Bridges are distinct from relays.
	

	TYPE	FIELD		MODE			MEASURE			UNIT			UPPER LIMIT
	-------------------------------------------------------------------------------
	SERVER									
			server		hardware		sum				count			server
			osv			software		sum...s			count			server
			tsv			software		sum...s			count			server
			upt			quality			avg				percentage		100
			bwa			network			sum				count			-
			bwc			network			sum				count			bwa
												
	RELAY											
			relay		hardware		sum				count			Server minus Bridge
			g			hardware		sum				count			< relay
			m			hardware		sum				count			< relay
			e			hardware		sum				count			< relay
			d			hardware		sum				count			< relay
			pbr			quality			avg				percentage		100 (but should be much less)
			pbg			quality			avg				percentage		100 (but should be much less)
			pbm			quality			avg				percentage		100 (but should be much less)
			pbe			quality			avg				percentage		100 (but should be much less)
			flag		software		sum...s			count			< relay
			as			locality		sum...s			count			< relay (but really much less)
			pex			software		sum,sum,sum		count			< relay
												
	BRIDGE																
			bridge		hardware		sum				count			Server minus Relay	
			brp			locality		sum,sum,sum		count			bridge
			bre			locality		sum				count			bridge
			brt			software		sum,sum			count			bridge
											
	CLIENT										
			cb			locality		sum				client
			cr			locality		sum				client
			cpt			software		sum,sum,sum,sum	count		
			cip			software		sum,sum			count
										
	COUTRY								
	clients								
			cbcc		locality		sum				count
			crcc		locality		sum				count
	relays								
			osv			software		sum...s			count			relay
			tsv			software						count			relay
			upt			quality			avg				percentage		100
			bwa			network			sum				count		
			bwc			network			sum				count			bwa
			g			hardware		sum				count			< relay
			m			hardware		sum				count			< relay
			e			hardware		sum				count			< relay
			d			hardware		sum				count			< relay
			pbr			quality			avg				percentage		100 (but should be much less)
			pbg			quality			avg				percentage		100 (but should be much less)
			pbm			quality			avg				percentage		100 (but should be much less)
			pbe			quality			avg				percentage		100 (but should be much less)
			flag		software		sum...s			count			< gmed
			as			locality		scat + sum...s	count			< gmed (but really much less)
			

**Overview data on clients and relays**   
We have some very general data on all relays and bridges: total count, software version, operating system version, total bandwidth provided and consumed. 
Correspondingly we have quite general data on clients: how many clients in total were connected to the Tor network via bridges or directly via guard nodes. 
These two fit well together.
We also know which IP-version and which obfuscation techniques clients use. 
But that's about it with clients and relays. 

**Clients**   
Client data is on purpose quite sparse and we can't do much more than compare numbers of clients with the more detailed data about the relays and bridges. 
We will eg not be able to follow clients through the network.

**Countries**   
The most detailed view we can get on clients is their distribution by country. This is interesting since we also know from each relay the country in which it is located. And we know a lot about relays. So maybe we can construct some useful views on specific characteristics of relays and total numbers of clients by country.

**Relays**   
Additionally to the data on relays and bridges we have quite specific data on different types of relays (but not bridges), namely guards, middle nodes, exits and directory servers. 
This data is detailed but not easy to handle.   
Numbers for the different types of relays don't add up to the total number of relays since each relay can (and most often does) serve more than one purpose and implements two, three or all four types of relays besides bridges.    
For each relay we know with which probability it is part of a clients route through the network, but we would need to agggregate averages and mean deviations to add more meaning to these numbers. 
We also know for relays through which AS they are connected to the internet but this is a very large number of different AS which we first need to aggregate to find the most used ones and how high the concentration is.   
We then have some flags and exit port information which again are not particularily easy to visualize (and interpret).

**Bridges**    
Last not least we have some data about bridges, but not as much as about relays. This is again on purpose since bridges serve to circumvent attempts to block the access to the tor network alltogether. Gathering too much information about them would make the censors' job easier. 
Since bridges are distinct from relays their numbers add up to the total number of servers.
Apart from that we don't know much more than a few technicalities that don't have much impact on the rest of the network: from which bridge pool they were assigned, which transport they use and if they are hosted in the EC2 cloud. 


### Details

#### Usage and users

A [**discussion**](https://github.com/tomlurge/visionion/issues/5) on GitHub explains how the number of clients is calculated/guesstimated and how it should be interpreted. 
That discussion provides a good example about how an issue that seems intuitively clear to the unanticipating user quickly can become complex and subtly entagled. 

#### default values   
The seperate doc about [**default values**](doc/defaults.md) discusses the best way to deal with missing data (same doc as linked from the  README).


#### tresholds
Should there be a threshold of non-null entries below which we don't aggregate an entry? 
For example, if a relay was only running for 1 out of 6 hours, should we rather exclude it? 
If so, what fraction of non-null entries would we require?

Onionoo includes a data point if it has data for at least 20% of the considered interval, and considers the data point as null otherwise.   
So, for a 6 hour interval, having data for 1 hour wouldn't suffice, but 2 hours or more would be okay.

So, if a relay upgrades in a 6-hour period, we'll have to pick either version number for the 6-hour data point.  
Using the mode (in math sense, so most frequent element, breaking ties somehow) and breaking ties by picking the larger version number, we'll have these results:

	023 023 023 023 023 024 -> 023
	023 023 023 023 024 024 -> 023
	023 023 023 024 024 024 -> 024
	023 023 null null 024 024 -> 024

And if we use the 20% threshold for non-null values:

	023 024 null null null null -> 024
	023 null null null null null -> null


#### measures and dimensions
Improve readbility of visualization by distinguishing clearly between measures and dimensions (see m/d column below)

	in   code   m/d  description     type
	+---+------+----+---------------+--------------------------------------
	rbc  _id    d    document ID     dict of:
									- datetime, ISODate
									- span, integer, in hours
									- type: "relay", "bridge", or "client"
									- fingerprint, string, only rb span=1
									- nickname, string, only rb span=1
	r    rtype  d    type of relay   some of "Guard", "Middle", ...
	r    rflag  d    relay flags     some of "Fast", "Stable", ...
	rb   tsv    d    software ver.   string
	rb   osv    d    operating sys.  string
	r    as     d    auton. sys.     integer
	r    pex    d    perm. exit p.   array of integers
	r c  cc     d    country code    string
	 b   brp    d    bridge pool     string
	 b   bre    d    EC2 cloud       boolean
	 bc  brt    d    pluggable trans string
	  c  cdc    d    direct conn.    boolean: connect via relay or bridge?
	  c  cip    d    ip version      integer: connect via IP version 4 or 6
	rbc  nodes  m    # of nodes      float
	rb   bwa    m    bw advertised   float
	rb   bwc    m    bw consumed     float
	r    pbr    m    cons. weight    float
	r    pbg    m    guard prob.     float
	r    pbm    m    middle prob.    float
	r    pbe    m    exit prob.      float


#### uptimes    
A node may not be online in every part of an aggregated timespan. 
We don't count servers that haven't been available for at least 30% of a timespan. 
That way we are counting the bandwidth a little conservativ, while we are too optimistic regarding the number of available servers.