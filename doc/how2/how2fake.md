# How To Generate Fake Data #

The real data we got from the metrics project did span only about 6 weeks. That 
isnt enough to test the application under real load. We therefor had to derive 
some fake data from it by copying the real data into the database again and 
again.

First we exported chunks of 28, 29, 30 and 31 days:

	mongoexport -d visionion -c fact -q '{_id: {$gte: "2013-04-01-00", $lte: "2013-04-28-23"}}' --out /Volumes/fake/28.json
	mongoexport -d visionion -c fact -q '{_id: {$gte: "2013-04-01-00", $lte: "2013-04-29-23"}}' --out /Volumes/fake/29.json
	mongoexport -d visionion -c fact -q '{_id: {$gte: "2013-04-01-00", $lte: "2013-04-30-23"}}' --out /Volumes/fake/30.json
	mongoexport -d visionion -c fact -q '{_id: {$gte: "2013-04-01-00", $lte: "2013-05-01-23"}}' --out /Volumes/fake/itching31.json

	mongoexport docs:
	http://docs.mongodb.org/v2.4/reference/program/mongoexport/
	helpful:
	http://buraktas.com/mongoexport-query-with-using-date/
	http://stackoverflow.com/questions/19805738/mongodump-range-query-on-timestamp-filed-raising-failedtoparser-error

The month with 31 days had to be massaged a little

	sed 's/-05-01/-04-31/g' itching31.json > 31.json

Then generate months with 31 days

	/Volumes/fake$ sed 's/2013-04-/2013-01-/g' 31.json > fake-2013-01.json
	/Volumes/fake$ sed 's/2013-04-/2013-03-/g' 31.json > fake-2013-03.json
	/Volumes/fake$ sed 's/2013-04-/2013-05-/g' 31.json > fake-2013-05.json
	/Volumes/fake$ sed 's/2013-04-/2013-07-/g' 31.json > fake-2013-07.json
	/Volumes/fake$ sed 's/2013-04-/2013-08-/g' 31.json > fake-2013-08.json
	/Volumes/fake$ sed 's/2013-04-/2013-10-/g' 31.json > fake-2013-10.json
	/Volumes/fake$ sed 's/2013-04-/2013-12-/g' 31.json > fake-2013-12.json

... and with 30 days

	/Volumes/fake$ sed 's/2013-04-/2013-04-/g' 30.json > fake-2013-04.json
	/Volumes/fake$ sed 's/2013-04-/2013-06-/g' 30.json > fake-2013-06.json
	/Volumes/fake$ sed 's/2013-04-/2013-09-/g' 30.json > fake-2013-09.json
	/Volumes/fake$ sed 's/2013-04-/2013-11-/g' 30.json > fake-2013-11.json

... and a short and a long february

	/Volumes/fake$ sed 's/2013-04-/2013-02-/g' 28.json > fake-2013-02.json
	/Volumes/fake$ sed 's/2013-04-/2012-02-/g' 29.json > fake-2012-02.json

	
Then duplicate these files into new folders for the years 2010, 2011, 2012.
Remove the unecessary februaries. 2012 takes the 29 days february. Then in each
folder (adjust file names if you wish and) execute the appropiate command to 
change the years in the duplicated data.

	/Volumes$ cd 2010
	/Volumes/fake/2010$ sed -i '' 's/2013-/2010-/g' *.*
  /Volumes/fake/2010$ cd ../2011
  /Volumes/fake/2011$ sed -i '' 's/2013-/2011-/g' *.*
  /Volumes/fake/2011$ cd ../2012
  /Volumes/fake/2012$ sed -i '' 's/2013-/2012-/g' *.*

	// http://stackoverflow.com/questions/11895169
	// this is the syntax for Mac OS X. it's slightly different for GNU/Linux

Bulk import the fake data into mongodb through the following shell script

	#!/bin/bash
	for filename in *; do 
		mongoimport -d visionion -c fake $filename  
	done

Save it as import.sh.sh in the directory where the fake data files lie
make it executable by

	chmod u+x import.sh

and then execute it

	./import.sh

Import took about 100 minutes on my 6 year old laptop for 4 years of fake data.