## Data Import

Visionion is driven by data collected through the [Tor metrics Project](https://metrics.torproject.org/‎).
This data is not always easy to interpret and sometimes fragmentary or even guesstimated for reasons of (preserving) anonymity.
In the page on the [**gestalt**](doc/gestalt.md) of these numbers we take a more thorough look on how they are gathered and what they actually represent.

Before Tor metrics data can be imported into MongoDB is has to be gathered and prepared. The respective [importer code](https://github.com/tomlurge/visionion/tree/master/importer) is part of this project (and code repository) but outside the scope of this documentation. It is maintained by the Tor metrics project.

### <span id="dataSchemaOutline">Data Schema Outline</span>

The initial database import schema has only one collection for all node types: 'client', 'bridge' and 'relay'.
The following import outline documents the fields and values that each imported document may have depending on the type of node it represents.
(The field names are rather short to achieve better performance in MongoDB.
Memorizing them or looking them up again in the table below will be helpful when reading through the rest of the documentation and the code.)

	node    field desc                        type    subtype aggregation valuespace
	+-------+-----+---------------------------+-------+-------+-----------+---------
	cbr     _id   document ID                 string          (*)         fingerprint/'client'+span+date
	                                                                      eg 'fingerprint-1-YYYYMMDDHH'
	cbr     updt  JS Date the doc was added   string                      ISO 8601 extended format YYYY-MM-DDTHH:mm:ss.sssZ
	cbr     span  period of validity          string          -           length of the interval this dataset describes:
	                                                                      one of: "h"(hourly), "d" (daily), "m" (monthly)
	cbr     date  JS Date                     string          -           start of the time span that this document describes
	                                                                      format "YYYY-MM-DDTHH:MM" as defined by ECMAScript
	cbr     type  type of document            string                      one of: "c" (clients), "b" (bridge), "r" (relay)
	c       cb    clients at bridges          integer         mean
	c       cbcc  clients@bridges per country object          mean        {cc:integer ...}
	c       cr    clients at relays           integer         mean
	c       crcc  clients@relays per country  object          mean        {cc:integer ...}
	c       cpt   bridge pluggbl.transp.used  object                      {obfs2/obfs3/OR/unknown:integer}
	c       cip   ip-version used             object          mode        {v4/v6:integer}
	 br     node  node id                     string          -           Tor fingerprint
	 br     nick  nickname                    string          mode        nickname of relay
	 br     bwa   bandwidth advertized        integer         mean        B/s
	 br     bwc   bandwidth consumed          integer         mean        B/s
	 br     tsv   Tor software version        string          mode        one of: t10, t11, t12, t20, t21, t22, t23, t24, t25
	 br     osv   operating system            string          mode        one of: linux, darwin, freebsd, windows, other
	 b      pool  bridge pool                 string          mode        one of: email, https, other
	 b      ec2   bridge is in EC2 cloud      boolean         mode        //  maps to category 'host'
	 b      plug  bridge pluggable transport  array   string  mode (*)    some of: obfs2, obfs3
	  r     role  roles/functions of relay    array   string  mode (*)    some of: Guard, Middle, Exit, Dir
	  r     flag  flags                       array   string  mode (*)    some of: Authority, Fast, Stable, BadExit, 
	                                                                      BadDirectory, Named, Running, Unnamed,  Valid, 
	  r     pr    consensus_weight_fraction   number                      V2Dir, V3Dir
	  r     pg    guard_probability           number          mean        probability this relay is used in a path
	  r     pm    middle_probability          number          mean        probability this relay is used as a guard node
	  r     pe    exit_probability            number          mean        probability this relay is used as a middle node
	  r     exp   permitted exit ports        array   integer mean        probability this relay is used as a exit nod
	  r     as    autonomous system           integer         mode        as number
	  r     cc    country code                string          mode        two-letter (ISO 3166-1 alpha-2), upper case


	LEGEND --------------------------------------------------------------------
	node          indicates, for which type of node the field is relevant,
	              c (clients), b (bridge), r (relay)
	field         name of the field in the database
	desc          description,	short characterization
	type          as defined in 3.5 of 
	              http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1
	subtype       if type is array, type of array content
	valuespace    expected values
	              for lists of possible values "some of" where multiple values are
	              possible or "one of" where possible values are mutually exclusive
	(*)           if the relay provides the functionality in question for at least
	              half of the timespan in question
	 					

	
The timespan for import data is always 1 hour. During aggregation, described below, we will derive larger timespans to improve performance for  visualizations over larger periods of time.

There's a big difference between client data and relay data that isn't immediatly obvious from the schema.
Client data is - unlike all relay and bridge data - never collected at the client nodes themselves because that could compromise anonymity.
Instead client data is estimated by some calculations over relay data. During that calculation client data is already aggregated into timespans. One entry of client data in the import database represents all clients during a given timespan.
OTOH we import data for each and every server active during a given timespan. We keep this data to be able to look up individual relays but for most visualization tasks we want data for all servers (that have certain characteristics) during a timespan. This data is only aggregated within MongoDB by the mapReduce operation outlined below.
So the import database contains many server entries per hour, one for each relay and bridge active during that timespan, but only one client entry, with numbers for all clients active during that timespan.

One more detail: client data is originally calculated per day. The import data for clients contains one document for each hour because the default timespan for server data is 1 hour. That means we have 24 client documents per day (one for each hour), each with the same values (see the [discussion](https://github.com/tomlurge/visionion/issues/5) for more details).

Check out an [**example**](doc/import.md) of each of the 3 types of documents in the import collection to get a better idea of its structure.


**Default values**
The data gathered by the Tor metrics project is not always complete (not astonishing for a network of that size, diversity of services and heterogenity of actors). See the seperate doc about [**default values**](doc/defaults.md) for a discussion about how to deal with missing data.



### <span id="jsonSchema">JSON schema</span>
The above has been transformed into a JSON [schema](doc/schema.json).

The purpose of the schema is twofold: combined with a [validator](https://github.com/garycourt/JSV) it can provide some control over what data get's inserted into the database. Since MongoDB doesn't perform any consistency checks this can be useful to detect if something goes wrong.
More importantly the validator can spot data that's not handled by the schema and trigger the addition of an appropriate (probably rather generic) query interface to the visualization GUI.

If the outline above and the schema get out of sync, the *outline is authorative*.
(This may seem unusual and the plan was to have it the other way round but reality is that changes are first documented in the outline and then - hopefully - implemented  in the schema...).

For information about JSON Schema see [Wikipedia](http://en.wikipedia.org/wiki/JSON#Schema) and the [Draft Specification](http://datatracker.ietf.org/doc/draft-zyp-json-schema/?include_text=1).


### <span id="dataImportChecks">Data Import Checks</span>
We are making assumptions about the imported data that wouldn't hurt to be checked.
E.g. a query checking if Bridges and all other types of relays are really disjunct sets:

>TODO



