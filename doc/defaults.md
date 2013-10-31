# visionion

## Data Schema Outline

_default values_   
To reduce complexity in the mapReduce script it has proven helpful that all import data always contains all fields expected for the respective type (client, bridge or relay). Therefor some default values have to be defined for those fields whose values weren't known in the first place. 

For relays these are:

			OLD		NEW
	nick	""		""	
	role	[]		
	flag	[]		
	bwa		0		null
	bwc		0		null
	tsv		""		""
	osv		""		""
	pbr		0		null
	pbg		0		null
	pbm		0		null
	pbe		0		null
	pex		[]		
	as		""		""
	cc		""		""
	
For bridges:

	nick	""		""
	bwa		0		null
	bwc		0		null
	tsv		""		""
	osv		""		""
	brp		""		""
	bre		0		null
	brt		[]		
	
And for clients:

	cb		0		null
	cbcc	{}		null		
	cr		0		null
	crcc	{}		null
	cpt		{}		null
	cip		{}		null

The following fields don't have default values because they are mandatory:
	
	_id
	addd
	span
	date
	type
	node	(only for relays and bridges)
	
Question: Why not always use 'null' when the value is not known?  
Answer: That would be much harder to process.   
Discussion:    
**strings**: this concerns 'nick', 'osv', 'tsv', 'as', 'cc' and 'brp'. An empty string "" and a value 'null' are processed quite differently. Having to handle the 'null' case makes things more complicated than just using "" for unknown values. And it makes no difference practically, since in all cases where we expect string values a default of 'null' wouldn't make much sense: if there's no nick then we can't help it, no matter if it was omitted or didn't exist in the first place. Knowing the difference doesn't make a difference for our usecase. If there's no value for 'osv', 'tsv', 'as', 'cc' and 'brp' then we already know that it was omitted, because there necessarily is a value (no relay runs without operating system, no bridge was not assigned by some pool etc).   
**numbers**: numbers are the one case where it makes perfect sense to distnguish '0' (zero) and 'null'. It adds no complexity to the code since 'null' adds up just as nicely as '0' and it makes a difference if the value of 'bwa', 'bwc' etc is '0' or not known to us (and both is perfectly possible).   
**arrays**: this concerns 'role', 'flag', 'pex' and 'brt'. Replacing empty arrays ('[]') by 'null' doesn't make processing them considerably more expensive. In some cases like 'flag' or 'role' it makes a difference if we know that there is no value set or if we don't know anything about the value.    
**objects**: this concerns only client data. Since client data is already preaggregated missing values almost certainly mean that we don't know the real values. Therefor missing object data should be represented not as an empty object '{}' but as 'null'.   

Still two questions remain:   
- Did we know at any point through gathering the data for sure if the value in question is just missing/unknown or really/deliberatly empty? E.g. do we have a way to distinguish if the flag-field was lost during transmission or if there was really no single flag set? Is the answer to that question for all fields the same?   
- What do we do with it? So far there's no concept on why or how to visualize unknown data, and neither the aggregation script nor the data schema for aggregated data does take it into account. Of course both could easily change resp. be changed. 
