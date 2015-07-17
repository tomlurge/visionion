# How To Generate Fake Data #

The real data we got from the metrics project did span only about 6 weeks. That wasnt enough to test the application under real load. We therefor had to add some fake data. The fake data wasn't generated from scratch but derived by copying the real data into the database again and again.

First we exported 31 days:

	mongoexport -d visionion -c facts -q '{_id: {$gte: "2013-04-01 00", $lte: "2013-05-01 23"}}' --out ~/Desktop/2013_04.json

	mongoexport docs:
	http://docs.mongodb.org/v2.4/reference/program/mongoexport/
	helpful:
	http://buraktas.com/mongoexport-query-with-using-date/
	http://stackoverflow.com/questions/19805738/mongodump-range-query-on-timestamp-filed-raising-failedtoparser-error


Some cleaning had to be done to remove errors added in prior aggregation steps:

	sed 's/:00:00"/:00"/g' export-2013-04.json > export-2013-04-removeNulls.json
	sed 's/-05-01/-04-31/g' export-2013-04-removeNulls.json > export-2013-04-31tage.json

Then the months with 31 days were generated from that prototype

	sed 's/2013-04-/2013-01-/g' export-2013-04-31tage.json > fake-2013-01.json
	sed 's/2013-01-/2013-03-/g' fake-2013-01.json > fake-2013-03.json
	sed 's/2013-01-/2013-05-/g' fake-2013-01.json > fake-2013-05.json

etcetera for 07, 08, 10, 12

Then generate february and don't forget leap years

	sed 's/2013-01-/2013-02-/g' fake-2013-01.json > fake-2013-02.json
	sed 's/2013-01-/2013-04-/g' fake-2013-01.json > fake-2013-04.json

then remove the 31. day from april and generate the 30-day-months

	sed 's/2013-04-/2013-06-/g' fake-2013-04.json > fake-2013-06.json
	sed 's/2013-04-/2013-09-/g' fake-2013-04.json > fake-2013-09.json
	sed 's/2013-04-/2013-11-/g' fake-2013-04.json > fake-2013-11.json

weitere jahre erzeugen:
alle dateien in ein neues verzeichnis kopieren und umbennen
auf der console dorthin wechseln
sed -i '' 's/2013-/2014-/g' *.*
	// http://stackoverflow.com/questions/11895169/can-i-search-replace-in-multiple-txt-files-quickly-from-terminal
	// die syntax ist etwas anders als auf GNU/Linux

bulk importing the fake data into mongodb through the following shell script

	#!/bin/bash
	for filename in *; do 
		mongoimport -d visionion -c fakes $filename  
	done

saved as import.sh.sh in the directory where the fake data files lie
made executable by

	chmod u+x import.sh

and then executed by

	./import.sh

errors:
with every yearly mongoimport run i got 4 times the following error message:
"exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0"
the count of imported documents was correct though. 
this seems to suggest that 4 of the documents contained an array that was larger than 16 mb. that is not plausibel because 1) the average document (data per 1 hour) has a size of about 600 kb 2) every year contains 12 times (months) the same data. the error should therefor occur in a multiple of 12 (or at least 8, since only 8 months have 31 days, the other months are shorter).
strange...   