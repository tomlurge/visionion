# visionion

Import data gestalt
-------------------

	TODO 	this section is of questionable quality

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
	and many more autonomous systems

 clients

	2 types: @relays, @bridges
	2 types per country: @relays, @bridges
	2 flags: transport used (4 values) and ip-version used (2 values)


The fields in the 3 import collections overlap only in one case: date. That's the only clamp between all datasets. 
The table below tries to capture the multiple dimensions and qualities of the imported data.

"Mode" refers to the essential quality of the thing being counted. 
This may be the numbers of hardware instances, software characteristics, measures of quality of service, number of users.   
"Measure" documents if the numbers denote absolute values, percentages, averages etc. 
Percentages don't easily compare to absolute values and also not all absolute values in one category add up to a meaningful sum because value spaces overlap. 
Therefor it's important to carefully select, construct and arrange meaningful and actually comparable configurations.   
"Unit" is not much different from Measure, mainly reflecting if the field is single value or multi valued.
"Upper limit" denotes the upper limit of the value space. For percentages it's 100. 
For each relay type it's the total number of relays - the important implication being that each relay can simultaneously belong to multiple types: the types alltogether don't add up to the number of relays, the're up to 4 times more. Bridges are distinct from relays.
	

	TYPE	FIELD	MODE	MEASURE			UNIT				UPPER LIMIT
	-----------------------------------------------------------------------
	SERVER								
			server	hard	sum				count				server
			osv		soft	sum...s			count/item			server
			tsv		soft	sum...s			count/item			server
			upt		quality	avg				percentage			100
			bwa		ip		sum				count				-
			bwc		ip		sum				count				bwa
									
	RELAY								
			relay	hard	sum				count				Server minus Bridge
			g		hard	sum				count				< relay
			m		hard	sum				count				< relay
			e		hard	sum				count				< relay
			d		hard	sum				count				< relay
			pbr		quality	avg				percentage			100 (but should be much less)
			pbg		quality	avg				percentage			100 (but should be much less)
			pbm		quality	avg				percentage			100 (but should be much less)
			pbe		quality	avg				percentage			100 (but should be much less)
			flag	soft	sum...s			count/item			< relay
			as		net		sum...s			count/item			< relay (but really much less)
			pex		soft	sum,sum,sum		count/item			< relay
									
	BRIDGE														Server minus Relay
			bridge	hard	sum	count		relay	
			brp		net		sum,sum,sum		count/item			bridge
			bre		hard	sum				count				< bridge
			brt		soft	sum,sum			count/item			bridge
								
	CLIENT							
			cb		user	sum				client
			cr		user	sum				client
			cpt		soft	sum,sum,sum,sum	count/item		
			cip		soft	sum,sum			count/item
						
	COUTRY					
	clients					
			cbcc	user	sum				client/country
			crcc	user	sum				client/country
	relays					
			osv		soft	sum...s			count/item/country	relay
			tsv		soft					count/item/country	relay
			upt		quality	avg				percentage/country	100
			bwa		ip		sum				count/country		
			bwc		ip		sum				count/country		bwa
			g		hard	sum				count/country		< relay
			m		hard	sum				count/country		< relay
			e		hard	sum				count/country		< relay
			d		hard	sum				count/country		< relay
			pbr		quality	avg				percentage/country	100 (but should be much less)
			pbg		quality	avg				percentage/country	100 (but should be much less)
			pbm		quality	avg				percentage/country	100 (but should be much less)
			pbe		quality	avg				percentage/country	100 (but should be much less)
			flag	soft	sum...s			count/item/country	< gmed
			as		net		scat + sum...s	count/item/country	< gmed (but really much less)
			

Overview data on clients and relays:   
We have some very general data on all relays and bridges: total count, software version, operating system version, total bandwidth provided and consumed. 
Correspondingly we have quite general data on clients: how many clients in total were connected to the tor network via bridges or directly via guard nodes. 
These two fit well together.
We also know which IP-version and which obfuscation techniques clients use. 
But that's about it with clients and relays. 

Clients:   
Client data is on purpose quite sparse and we can't do much more than compare numbers of clients with the more detailed data about the relays and bridges. 
We will eg not be able to follow clients through the network.

Countries:   
The most detailed view we can get on clients is their distribution by country. This is interesting since we also know from each relay the country in which it is located. And we know a lot about relays. So maybe we can construct some useful views on specific characteristics of relays and total numbers of clients by country.

Relays:   
Additionally to the data on relays and bridges we have quite specific data on different types of relays (but not bridges), namely guards, middle nodes, exits and directory servers. 
This data is detailed but not easy to handle. 
Numbers for the different types of relays don't add up to the total number of relays since each relay can (and most often does) serve more than one purpose and implements two, three or all four types of relays besides bridges.   
For each relay we know with which probability it is part of a clients route through the network, but we would need to agggregate averages and mean deviations to add more meaning to these numbers. 
We also know for most relays through which AS they are connected but this is a very large number of different AS which we first need to aggregate to find the most used ones and how high the concentration is. 
We then have some flags and exit port information which again are not particularily easy to visualize (and interpret).

Bridges:    
Last not least we have some data about bridges, but not as much as about relays. This is again on purpose since bridges serve to circumvent attempts to block the access to the tor network alltogether. Gathering too much information about them would make the censors' job easier. 
Since bridges are distinct from relays their numbers add up to the total number of servers.
Apart from that we don't know much more than a few technicalities that don't have much impact on the rest of the network: from which bridge pool they were assigned, which transport they use and if they are hosted in the EC2 cloud. 

