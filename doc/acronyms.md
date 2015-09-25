#Acronyms used in reports on clients, relays and bridges


	field   desc                         valuespace
	+-------+----------------------------+---------
	_id     document ID                  fingerprint/'client'+span+date
	                                     eg 'fingerprint-1-YYYYMMDDHH'
	updt    JS Date the doc was added    ISO 8601 extended format YYYY-MM-DDTHH:mm:ss.sssZ
	span    period of validity           length of the interval this dataset describes:
	                                     one of: "h"(hourly), "d" (daily), "m" (monthly)
	date    JS Date                      start of the time span that this document describes
	                                     format "YYYY-MM-DDTHH:MM" as defined by ECMAScript
	type    type of document             one of: "c" (clients), "b" (bridge), "r" (relay)
	  c     client
	  b     bridge
	  r     relay
	cb      clients at bridges          
	cbcc    clients@bridges per country  {cc:integer ...}
	cr      clients at relays           
	crcc    clients@relays per country   {cc:integer ...}
	cpt     bridge pluggbl.transp.used   {obfs2/obfs3/OnionRouting /unknown:integer}
	  cptObfs2
	  cptObfs3
	  cptOR
	  cprtUnknown
	cip     clients ip-version used      {v4/v6:integer}
	  cip4
	  cip6
	node    node id                      Tor fingerprint
	nick    nickname                     nickname of relay
	bwa     bandwidth advertized         B/s
	bwc     bandwidth consumed           B/s
	tsv     Tor software version         one of: t10, t11, t12, t20, t21, t22, t23, t24, t25
	  t10   version 0.10
	        etc
	osv     operating system             one of: linux, darwin, freebsd, windows, other
	  od    darwin
	  of    freebsd
	  ol    linux
	  ow    windows
	  oo    other
	pol     bridge pool                  one of: email, https, other
	  be    email
	  bh    https
	  bo    other
	hst     hosting service              service hosting a bridge
	  bc    bridge is in EC2 cloud
	plg     bridge pluggable transport   some of: obfs2, obfs3
	  b2    obfs2
	  b3    obfs3
	  b23   ogbfs2 + obfs3
	role    roles/functions of relay     some of: Guard, Middle, Exit, Dir
	  g     guard
	  m     middle
	  e     exit
	  d     directory
	flag    flags                        some of: Authority, Fast, Stable, BadExit, BadDirectory, Named, Running, Unnamed,  Valid, V2Dir, V3Dir
	  f     fast
	  s     stable
	  a     authority
	prb     consensus_weight_fraction    probablitiy this relay is used in a path 
	  pr    relay probability            as guard/ middle/exit node
	  pg    guard_probability            as a guard node
	  pm    middle_probability           as a middle node
	  pe    exit_probability             as an exit node
	exp     permitted exit ports
    e4    443
    e6    6667
    e8    80
    e46   443 + 6667
    e48   443 + 80
    e68   6667 + 80
    e468  443 + 6667 + 80
	as      autonomous system            as number, eg "AS123456"
	cc      country code                 two-letter (ISO 3166-1 alpha-2), upper case



Relays reports get aggregated under all possible combinations of roles and flags. These are not explicitly listed here (but in the [aggregation doc](doc/aggregation.md#detailed)) since they are straightforwardly made up of the role and flag acronyms listed above.