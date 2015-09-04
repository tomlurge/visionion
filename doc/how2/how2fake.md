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


#### Errors
Import produced 4 errors in 09/2015 (see the very bottom). Like the first time 
in 06/2015it complained 4 times that the supplied JSON is too large. This is 
strange since in the supplied fake data no generated month occurs exactly 4 times.

	./import.sh: line 1: ﻿#!/bin/bash: No such file or directory
	connected to: 127.0.0.1
	Fri Sep  4 02:06:54.986 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:06:54.986 			100	33/second
	Fri Sep  4 02:06:58.679 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:06:58.679 			200	28/second
	Fri Sep  4 02:07:02.166 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:07:02.166 			300	27/second
	Fri Sep  4 02:07:05.610 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:07:05.610 			400	28/second
	Fri Sep  4 02:07:08.996 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:07:08.996 			500	29/second
	Fri Sep  4 02:07:12.345 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:07:12.345 			600	28/second
	Fri Sep  4 02:07:16.002 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:07:16.002 			700	28/second
	Fri Sep  4 02:07:18.579 check 9 774
	Fri Sep  4 02:07:18.674 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:07:22.377 		Progress: 44943037/316365042	14%
	Fri Sep  4 02:07:22.378 			100	25/second
	Fri Sep  4 02:07:32.570 		Progress: 89983283/316365042	28%
	Fri Sep  4 02:07:32.570 			200	14/second
	Fri Sep  4 02:07:36.039 		Progress: 135180810/316365042	42%
	Fri Sep  4 02:07:36.039 			300	16/second
	Fri Sep  4 02:07:39.709 		Progress: 180982604/316365042	57%
	Fri Sep  4 02:07:39.709 			400	19/second
	Fri Sep  4 02:07:43.214 		Progress: 226291869/316365042	71%
	Fri Sep  4 02:07:43.214 			500	20/second
	Fri Sep  4 02:07:47.168 		Progress: 271577667/316365042	85%
	Fri Sep  4 02:07:47.170 			600	20/second
	Fri Sep  4 02:07:50.675 check 9 699
	Fri Sep  4 02:07:50.683 imported 699 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:07:54.566 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:07:54.567 			100	25/second
	Fri Sep  4 02:07:59.300 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:07:59.300 			200	22/second
	Fri Sep  4 02:08:02.953 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:08:02.953 			300	25/second
	Fri Sep  4 02:08:06.504 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:08:06.504 			400	25/second
	Fri Sep  4 02:08:09.985 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:08:09.985 			500	26/second
	Fri Sep  4 02:08:13.458 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:08:13.458 			600	26/second
	Fri Sep  4 02:08:16.964 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:08:16.964 			700	26/second
	Fri Sep  4 02:08:19.723 check 9 774
	Fri Sep  4 02:08:19.741 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:08:23.546 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:08:23.546 			100	25/second
	Fri Sep  4 02:08:37.227 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:08:37.227 			200	11/second
	Fri Sep  4 02:08:40.701 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:08:40.702 			300	14/second
	Fri Sep  4 02:08:44.545 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:08:44.545 			400	16/second
	Fri Sep  4 02:08:48.150 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:08:48.150 			500	17/second
	Fri Sep  4 02:08:51.507 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:08:51.507 			600	18/second
	Fri Sep  4 02:08:55.023 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:08:55.023 			700	19/second
	Fri Sep  4 02:08:56.693 check 9 749
	Fri Sep  4 02:08:56.697 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:09:00.427 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:09:00.427 			100	25/second
	Fri Sep  4 02:09:03.954 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:09:03.954 			200	28/second
	Fri Sep  4 02:09:07.630 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:09:07.630 			300	27/second
	Fri Sep  4 02:09:11.184 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:09:11.184 			400	26/second
	Fri Sep  4 02:09:14.737 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:09:14.737 			500	27/second
	Fri Sep  4 02:09:18.308 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:09:18.308 			600	27/second
	Fri Sep  4 02:09:21.892 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:09:21.892 			700	28/second
	Fri Sep  4 02:09:24.968 check 9 774
	Fri Sep  4 02:09:25.105 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:09:37.559 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:09:37.559 			100	8/second
	Fri Sep  4 02:09:41.037 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:09:41.037 			200	12/second
	Fri Sep  4 02:09:44.500 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:09:44.500 			300	15/second
	Fri Sep  4 02:09:48.021 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:09:48.021 			400	17/second
	Fri Sep  4 02:09:51.600 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:09:51.600 			500	19/second
	Fri Sep  4 02:09:55.048 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:09:55.048 			600	20/second
	Fri Sep  4 02:09:58.684 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:09:58.684 			700	21/second
	Fri Sep  4 02:10:00.507 check 9 749
	Fri Sep  4 02:10:00.514 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:10:04.287 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:10:04.288 			100	25/second
	Fri Sep  4 02:10:07.707 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:10:07.707 			200	28/second
	Fri Sep  4 02:10:11.384 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:10:11.384 			300	27/second
	Fri Sep  4 02:10:15.050 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:10:15.050 			400	26/second
	Fri Sep  4 02:10:18.482 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:10:18.482 			500	27/second
	Fri Sep  4 02:10:53.817 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:10:53.817 			600	11/second
	Fri Sep  4 02:10:57.342 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:10:57.342 			700	12/second
	Fri Sep  4 02:10:59.920 check 9 774
	Fri Sep  4 02:10:59.932 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:11:03.771 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:11:03.771 			100	33/second
	Fri Sep  4 02:11:07.549 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:11:07.549 			200	28/second
	Fri Sep  4 02:11:11.226 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:11:11.226 			300	27/second
	Fri Sep  4 02:11:14.754 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:11:14.754 			400	28/second
	Fri Sep  4 02:11:18.542 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:11:18.542 			500	27/second
	Fri Sep  4 02:11:22.303 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:11:22.303 			600	27/second
	Fri Sep  4 02:11:31.998 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:11:31.998 			700	22/second
	Fri Sep  4 02:11:34.644 check 9 774
	Fri Sep  4 02:11:34.655 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:11:38.614 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:11:38.614 			100	25/second
	Fri Sep  4 02:11:42.305 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:11:42.305 			200	25/second
	Fri Sep  4 02:11:45.789 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:11:45.789 			300	27/second
	Fri Sep  4 02:11:49.484 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:11:49.485 			400	26/second
	Fri Sep  4 02:11:53.273 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:11:53.273 			500	26/second
	Fri Sep  4 02:11:56.941 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:11:56.942 			600	27/second
	Fri Sep  4 02:12:00.499 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:12:00.499 			700	26/second
	Fri Sep  4 02:12:02.353 check 9 749
	Fri Sep  4 02:12:02.407 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:12:06.366 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:12:06.366 			100	25/second
	Fri Sep  4 02:12:09.844 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:12:09.844 			200	28/second
	Fri Sep  4 02:12:13.451 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:12:13.451 			300	27/second
	Fri Sep  4 02:12:17.184 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:12:17.184 			400	26/second
	Fri Sep  4 02:12:20.795 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:12:20.795 			500	27/second
	Fri Sep  4 02:12:24.736 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:12:24.736 			600	27/second
	Fri Sep  4 02:12:38.095 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:12:38.095 			700	19/second
	Fri Sep  4 02:12:40.743 check 9 774
	Fri Sep  4 02:12:40.774 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:12:44.855 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:12:44.855 			100	25/second
	Fri Sep  4 02:12:48.576 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:12:48.576 			200	25/second
	Fri Sep  4 02:12:52.426 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:12:52.426 			300	25/second
	Fri Sep  4 02:12:56.246 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:12:56.246 			400	25/second
	Fri Sep  4 02:12:59.847 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:12:59.847 			500	26/second
	Fri Sep  4 02:13:03.651 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:13:03.651 			600	26/second
	Fri Sep  4 02:13:07.435 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:13:07.435 			700	25/second
	Fri Sep  4 02:13:09.309 check 9 749
	Fri Sep  4 02:13:09.333 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:13:13.401 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:13:13.402 			100	25/second
	Fri Sep  4 02:13:16.940 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:13:16.940 			200	28/second
	Fri Sep  4 02:13:20.775 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:13:20.775 			300	27/second
	Fri Sep  4 02:13:25.349 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:13:25.349 			400	25/second
	Fri Sep  4 02:13:37.101 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:13:37.101 			500	17/second
	Fri Sep  4 02:13:40.923 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:13:40.923 			600	19/second
	Fri Sep  4 02:13:44.833 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:13:44.833 			700	20/second
	Fri Sep  4 02:13:47.810 check 9 774
	Fri Sep  4 02:13:47.825 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:13:51.613 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:13:51.614 			100	25/second
	Fri Sep  4 02:14:01.338 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:14:01.338 			200	14/second
	Fri Sep  4 02:14:06.084 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:14:06.084 			300	15/second
	Fri Sep  4 02:14:09.729 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:14:09.729 			400	18/second
	Fri Sep  4 02:14:13.284 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:14:13.284 			500	19/second
	Fri Sep  4 02:14:19.536 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:14:19.536 			600	18/second
	Fri Sep  4 02:14:28.362 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:14:28.362 			700	17/second
	Fri Sep  4 02:14:33.652 check 9 774
	Fri Sep  4 02:14:33.777 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:14:42.308 		Progress: 44943037/316365042	14%
	Fri Sep  4 02:14:42.309 			100	11/second
	Fri Sep  4 02:14:45.885 		Progress: 89983283/316365042	28%
	Fri Sep  4 02:14:45.885 			200	16/second
	Fri Sep  4 02:14:49.500 		Progress: 135180810/316365042	42%
	Fri Sep  4 02:14:49.500 			300	18/second
	Fri Sep  4 02:14:52.986 		Progress: 180982604/316365042	57%
	Fri Sep  4 02:14:52.986 			400	21/second
	Fri Sep  4 02:14:56.537 		Progress: 226291869/316365042	71%
	Fri Sep  4 02:14:56.537 			500	21/second
	Fri Sep  4 02:15:00.040 		Progress: 271577667/316365042	85%
	Fri Sep  4 02:15:00.040 			600	22/second
	Fri Sep  4 02:15:03.484 check 9 699
	Fri Sep  4 02:15:03.492 imported 699 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:15:07.297 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:15:07.300 			100	25/second
	Fri Sep  4 02:15:10.738 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:15:10.738 			200	28/second
	Fri Sep  4 02:15:14.199 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:15:14.199 			300	27/second
	Fri Sep  4 02:15:17.761 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:15:17.761 			400	28/second
	Fri Sep  4 02:15:21.310 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:15:21.310 			500	27/second
	Fri Sep  4 02:15:25.476 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:15:25.476 			600	27/second
	Fri Sep  4 02:15:36.978 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:15:36.978 			700	21/second
	Fri Sep  4 02:15:39.436 check 9 774
	Fri Sep  4 02:15:39.452 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:15:43.578 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:15:43.579 			100	25/second
	Fri Sep  4 02:15:46.963 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:15:46.963 			200	28/second
	Fri Sep  4 02:15:50.410 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:15:50.410 			300	27/second
	Fri Sep  4 02:15:54.098 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:15:54.098 			400	26/second
	Fri Sep  4 02:15:57.447 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:15:57.447 			500	27/second
	Fri Sep  4 02:16:00.864 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:16:00.864 			600	28/second
	Fri Sep  4 02:16:04.322 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:16:04.322 			700	28/second
	Fri Sep  4 02:16:05.961 check 9 749
	Fri Sep  4 02:16:05.965 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:16:09.851 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:16:09.852 			100	33/second
	Fri Sep  4 02:16:13.345 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:16:13.345 			200	28/second
	Fri Sep  4 02:16:16.888 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:16:16.888 			300	30/second
	Fri Sep  4 02:16:25.345 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:16:25.345 			400	21/second
	Fri Sep  4 02:16:31.616 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:16:31.616 			500	20/second
	Fri Sep  4 02:16:37.725 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:16:37.725 			600	19/second
	Fri Sep  4 02:16:44.223 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:16:44.223 			700	18/second
	Fri Sep  4 02:16:47.677 check 9 774
	Fri Sep  4 02:16:47.688 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:16:52.223 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:16:52.223 			100	20/second
	Fri Sep  4 02:16:58.268 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:16:58.268 			200	18/second
	Fri Sep  4 02:17:06.212 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:17:06.212 			300	15/second
	Fri Sep  4 02:17:14.648 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:17:14.648 			400	14/second
	Fri Sep  4 02:17:19.747 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:17:19.747 			500	15/second
	Fri Sep  4 02:17:23.064 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:17:23.064 			600	16/second
	Fri Sep  4 02:17:33.825 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:17:33.825 			700	15/second
	Fri Sep  4 02:17:35.407 check 9 749
	Fri Sep  4 02:17:35.412 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:17:38.890 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:17:38.890 			100	33/second
	Fri Sep  4 02:17:42.247 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:17:42.247 			200	28/second
	Fri Sep  4 02:17:45.673 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:17:45.673 			300	30/second
	Fri Sep  4 02:17:49.087 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:17:49.087 			400	28/second
	Fri Sep  4 02:17:52.403 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:17:52.403 			500	29/second
	Fri Sep  4 02:17:55.796 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:17:55.796 			600	30/second
	Fri Sep  4 02:17:59.237 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:17:59.237 			700	29/second
	Fri Sep  4 02:18:01.791 check 9 774
	Fri Sep  4 02:18:01.816 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:18:05.574 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:18:05.575 			100	33/second
	Fri Sep  4 02:18:08.991 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:18:08.991 			200	33/second
	Fri Sep  4 02:18:12.504 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:18:12.504 			300	30/second
	Fri Sep  4 02:18:15.959 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:18:15.959 			400	30/second
	Fri Sep  4 02:18:19.470 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:18:19.470 			500	29/second
	Fri Sep  4 02:18:22.907 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:18:22.907 			600	30/second
	Fri Sep  4 02:18:37.561 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:18:37.561 			700	20/second
	Fri Sep  4 02:18:40.133 check 9 774
	Fri Sep  4 02:18:40.150 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:18:43.890 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:18:43.890 			100	33/second
	Fri Sep  4 02:18:47.331 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:18:47.331 			200	28/second
	Fri Sep  4 02:18:50.831 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:18:50.831 			300	30/second
	Fri Sep  4 02:18:54.333 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:18:54.333 			400	28/second
	Fri Sep  4 02:18:57.775 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:18:57.775 			500	29/second
	Fri Sep  4 02:19:01.228 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:19:01.228 			600	28/second
	Fri Sep  4 02:19:04.861 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:19:04.861 			700	29/second
	Fri Sep  4 02:19:06.593 check 9 749
	Fri Sep  4 02:19:06.616 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:19:10.341 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:19:10.341 			100	25/second
	Fri Sep  4 02:19:13.841 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:19:13.841 			200	28/second
	Fri Sep  4 02:19:17.383 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:19:17.383 			300	27/second
	Fri Sep  4 02:19:20.982 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:19:20.982 			400	28/second
	Fri Sep  4 02:19:24.942 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:19:24.942 			500	27/second
	Fri Sep  4 02:19:37.688 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:19:37.688 			600	19/second
	Fri Sep  4 02:19:41.190 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:19:41.190 			700	20/second
	Fri Sep  4 02:19:43.799 check 9 774
	Fri Sep  4 02:19:43.842 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:19:47.759 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:19:47.760 			100	25/second
	Fri Sep  4 02:19:55.638 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:19:55.638 			200	16/second
	Fri Sep  4 02:20:03.952 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:20:03.952 			300	15/second
	Fri Sep  4 02:20:11.274 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:20:11.274 			400	14/second
	Fri Sep  4 02:20:14.862 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:20:14.862 			500	16/second
	Fri Sep  4 02:20:18.460 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:20:18.460 			600	17/second
	Fri Sep  4 02:20:22.047 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:20:22.047 			700	17/second
	Fri Sep  4 02:20:24.904 check 9 749
	Fri Sep  4 02:20:24.991 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:20:32.031 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:20:32.031 			100	14/second
	Fri Sep  4 02:20:39.954 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:20:39.954 			200	14/second
	Fri Sep  4 02:20:43.365 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:20:43.365 			300	16/second
	Fri Sep  4 02:20:46.868 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:20:46.868 			400	19/second
	Fri Sep  4 02:20:50.293 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:20:50.293 			500	20/second
	Fri Sep  4 02:20:53.725 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:20:53.725 			600	21/second
	Fri Sep  4 02:20:57.277 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:20:57.277 			700	21/second
	Fri Sep  4 02:20:59.889 check 9 774
	Fri Sep  4 02:20:59.894 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:21:03.410 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:21:03.410 			100	25/second
	Fri Sep  4 02:21:06.781 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:21:06.781 			200	28/second
	Fri Sep  4 02:21:10.251 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:21:10.251 			300	27/second
	Fri Sep  4 02:21:13.599 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:21:13.599 			400	28/second
	Fri Sep  4 02:21:16.973 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:21:16.973 			500	29/second
	Fri Sep  4 02:21:20.363 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:21:20.363 			600	28/second
	Fri Sep  4 02:21:33.600 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:21:33.600 			700	20/second
	Fri Sep  4 02:21:36.080 check 9 774
	Fri Sep  4 02:21:36.110 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:21:39.755 		Progress: 44943037/327709626	13%
	Fri Sep  4 02:21:39.756 			100	33/second
	Fri Sep  4 02:21:43.195 		Progress: 89983283/327709626	27%
	Fri Sep  4 02:21:43.195 			200	28/second
	Fri Sep  4 02:21:46.765 		Progress: 135180810/327709626	41%
	Fri Sep  4 02:21:46.765 			300	30/second
	Fri Sep  4 02:21:50.386 		Progress: 180982604/327709626	55%
	Fri Sep  4 02:21:50.386 			400	28/second
	Fri Sep  4 02:21:53.853 		Progress: 226291869/327709626	69%
	Fri Sep  4 02:21:53.853 			500	29/second
	Fri Sep  4 02:21:57.315 		Progress: 271577667/327709626	82%
	Fri Sep  4 02:21:57.315 			600	28/second
	Fri Sep  4 02:22:00.869 		Progress: 316932659/327709626	96%
	Fri Sep  4 02:22:00.869 			700	29/second
	Fri Sep  4 02:22:01.679 check 9 724
	Fri Sep  4 02:22:01.715 imported 724 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:22:05.414 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:22:05.414 			100	25/second
	Fri Sep  4 02:22:08.858 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:22:08.858 			200	28/second
	Fri Sep  4 02:22:12.376 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:22:12.376 			300	27/second
	Fri Sep  4 02:22:15.944 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:22:15.944 			400	28/second
	Fri Sep  4 02:22:19.358 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:22:19.358 			500	27/second
	Fri Sep  4 02:22:22.883 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:22:22.883 			600	28/second
	Fri Sep  4 02:22:36.315 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:22:36.315 			700	20/second
	Fri Sep  4 02:22:39.064 check 9 774
	Fri Sep  4 02:22:39.068 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:22:42.637 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:22:42.638 			100	33/second
	Fri Sep  4 02:22:46.109 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:22:46.109 			200	28/second
	Fri Sep  4 02:22:49.622 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:22:49.622 			300	30/second
	Fri Sep  4 02:22:53.131 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:22:53.131 			400	28/second
	Fri Sep  4 02:22:56.670 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:22:56.670 			500	29/second
	Fri Sep  4 02:23:00.164 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:23:00.164 			600	28/second
	Fri Sep  4 02:23:04.133 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:23:04.133 			700	28/second
	Fri Sep  4 02:23:05.876 check 9 749
	Fri Sep  4 02:23:05.882 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:23:09.829 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:23:09.830 			100	25/second
	Fri Sep  4 02:23:13.439 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:23:13.439 			200	25/second
	Fri Sep  4 02:23:17.046 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:23:17.046 			300	25/second
	Fri Sep  4 02:23:20.564 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:23:20.564 			400	26/second
	Fri Sep  4 02:23:24.860 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:23:24.860 			500	26/second
	Fri Sep  4 02:23:38.173 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:23:38.173 			600	18/second
	Fri Sep  4 02:23:42.016 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:23:42.016 			700	18/second
	Fri Sep  4 02:23:45.015 check 9 774
	Fri Sep  4 02:23:45.019 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:23:49.066 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:23:49.067 			100	25/second
	Fri Sep  4 02:23:53.136 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:23:53.136 			200	25/second
	Fri Sep  4 02:23:57.066 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:23:57.066 			300	25/second
	Fri Sep  4 02:24:01.027 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:24:01.027 			400	25/second
	Fri Sep  4 02:24:04.598 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:24:04.598 			500	26/second
	Fri Sep  4 02:24:08.907 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:24:08.907 			600	26/second
	Fri Sep  4 02:24:12.651 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:24:12.651 			700	25/second
	Fri Sep  4 02:24:16.135 check 9 749
	Fri Sep  4 02:24:16.288 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:24:34.114 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:24:34.115 			100	5/second
	Fri Sep  4 02:24:44.646 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:24:44.646 			200	7/second
	Fri Sep  4 02:24:50.077 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:24:50.077 			300	8/second
	Fri Sep  4 02:24:55.263 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:24:55.263 			400	10/second
	Fri Sep  4 02:24:58.557 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:24:58.557 			500	11/second
	Fri Sep  4 02:25:01.897 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:25:01.897 			600	13/second
	Fri Sep  4 02:25:05.149 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:25:05.149 			700	14/second
	Fri Sep  4 02:25:07.555 check 9 774
	Fri Sep  4 02:25:07.579 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:25:11.183 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:25:11.188 			100	25/second
	Fri Sep  4 02:25:14.579 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:25:14.579 			200	28/second
	Fri Sep  4 02:25:18.089 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:25:18.089 			300	27/second
	Fri Sep  4 02:25:21.516 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:25:21.516 			400	28/second
	Fri Sep  4 02:25:33.169 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:25:33.169 			500	19/second
	Fri Sep  4 02:25:36.639 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:25:36.639 			600	20/second
	Fri Sep  4 02:25:40.074 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:25:40.074 			700	21/second
	Fri Sep  4 02:25:42.670 check 9 774
	Fri Sep  4 02:25:42.674 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:25:46.424 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:25:46.424 			100	25/second
	Fri Sep  4 02:25:50.036 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:25:50.037 			200	25/second
	Fri Sep  4 02:25:53.485 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:25:53.485 			300	27/second
	Fri Sep  4 02:25:57.031 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:25:57.031 			400	26/second
	Fri Sep  4 02:26:00.576 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:26:00.576 			500	27/second
	Fri Sep  4 02:26:04.078 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:26:04.078 			600	27/second
	Fri Sep  4 02:26:07.786 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:26:07.786 			700	28/second
	Fri Sep  4 02:26:09.541 check 9 749
	Fri Sep  4 02:26:09.547 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:26:13.237 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:26:13.237 			100	25/second
	Fri Sep  4 02:26:16.695 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:26:16.695 			200	28/second
	Fri Sep  4 02:26:20.224 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:26:20.224 			300	27/second
	Fri Sep  4 02:26:33.877 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:26:33.877 			400	16/second
	Fri Sep  4 02:26:37.470 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:26:37.470 			500	17/second
	Fri Sep  4 02:26:40.983 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:26:40.983 			600	19/second
	Fri Sep  4 02:26:44.473 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:26:44.474 			700	20/second
	Fri Sep  4 02:26:47.215 check 9 774
	Fri Sep  4 02:26:47.237 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:26:50.832 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:26:50.832 			100	33/second
	Fri Sep  4 02:26:54.772 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:26:54.773 			200	28/second
	Fri Sep  4 02:26:58.296 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:26:58.296 			300	27/second
	Fri Sep  4 02:27:01.763 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:27:01.763 			400	28/second
	Fri Sep  4 02:27:05.374 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:27:05.374 			500	27/second
	Fri Sep  4 02:27:08.921 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:27:08.921 			600	28/second
	Fri Sep  4 02:27:12.465 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:27:12.465 			700	28/second
	Fri Sep  4 02:27:14.288 check 9 749
	Fri Sep  4 02:27:14.297 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:27:18.083 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:27:18.083 			100	25/second
	Fri Sep  4 02:27:21.864 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:27:21.864 			200	28/second
	Fri Sep  4 02:27:36.099 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:27:36.099 			300	13/second
	Fri Sep  4 02:27:39.822 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:27:39.822 			400	16/second
	Fri Sep  4 02:27:43.502 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:27:43.502 			500	17/second
	Fri Sep  4 02:27:47.129 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:27:47.129 			600	18/second
	Fri Sep  4 02:27:50.986 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:27:50.986 			700	19/second
	Fri Sep  4 02:27:53.771 check 9 774
	Fri Sep  4 02:27:53.790 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:27:57.944 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:27:57.945 			100	25/second
	Fri Sep  4 02:28:01.553 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:28:01.553 			200	25/second
	Fri Sep  4 02:28:05.585 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:28:05.585 			300	25/second
	Fri Sep  4 02:28:09.172 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:28:09.172 			400	25/second
	Fri Sep  4 02:28:12.938 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:28:12.938 			500	26/second
	Fri Sep  4 02:28:16.840 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:28:16.840 			600	26/second
	Fri Sep  4 02:28:20.479 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:28:20.479 			700	25/second
	Fri Sep  4 02:28:23.571 check 9 774
	Fri Sep  4 02:28:23.633 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:28:36.240 		Progress: 44943037/316365042	14%
	Fri Sep  4 02:28:36.240 			100	7/second
	Fri Sep  4 02:28:39.929 		Progress: 89983283/316365042	28%
	Fri Sep  4 02:28:39.929 			200	12/second
	Fri Sep  4 02:28:43.576 		Progress: 135180810/316365042	42%
	Fri Sep  4 02:28:43.576 			300	15/second
	Fri Sep  4 02:28:47.386 		Progress: 180982604/316365042	57%
	Fri Sep  4 02:28:47.386 			400	16/second
	Fri Sep  4 02:28:50.836 		Progress: 226291869/316365042	71%
	Fri Sep  4 02:28:50.836 			500	18/second
	Fri Sep  4 02:29:00.664 		Progress: 271577667/316365042	85%
	Fri Sep  4 02:29:00.664 			600	16/second
	Fri Sep  4 02:29:07.470 check 9 699
	Fri Sep  4 02:29:07.504 imported 699 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:29:11.490 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:29:11.490 			100	25/second
	Fri Sep  4 02:29:15.146 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:29:15.146 			200	25/second
	Fri Sep  4 02:29:19.235 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:29:19.235 			300	25/second
	Fri Sep  4 02:29:34.685 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:29:34.685 			400	14/second
	Fri Sep  4 02:29:40.250 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:29:40.250 			500	15/second
	Fri Sep  4 02:29:43.576 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:29:43.576 			600	16/second
	Fri Sep  4 02:29:46.917 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:29:46.917 			700	17/second
	Fri Sep  4 02:29:49.400 check 9 774
	Fri Sep  4 02:29:49.417 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:29:53.185 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:29:53.185 			100	25/second
	Fri Sep  4 02:29:56.580 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:29:56.580 			200	28/second
	Fri Sep  4 02:30:00.051 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:30:00.051 			300	27/second
	Fri Sep  4 02:30:03.538 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:30:03.538 			400	28/second
	Fri Sep  4 02:30:07.032 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:30:07.032 			500	27/second
	Fri Sep  4 02:30:10.492 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:30:10.492 			600	28/second
	Fri Sep  4 02:30:13.990 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:30:13.990 			700	29/second
	Fri Sep  4 02:30:15.781 check 9 749
	Fri Sep  4 02:30:15.785 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:30:19.775 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:30:19.775 			100	25/second
	Fri Sep  4 02:30:23.568 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:30:23.568 			200	25/second
	Fri Sep  4 02:30:37.821 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:30:37.821 			300	13/second
	Fri Sep  4 02:30:41.604 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:30:41.604 			400	15/second
	Fri Sep  4 02:30:45.136 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:30:45.136 			500	16/second
	Fri Sep  4 02:30:48.861 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:30:48.861 			600	18/second
	Fri Sep  4 02:30:52.656 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:30:52.656 			700	18/second
	Fri Sep  4 02:30:55.296 check 9 774
	Fri Sep  4 02:30:55.300 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:30:59.150 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:30:59.151 			100	25/second
	Fri Sep  4 02:31:02.599 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:31:02.599 			200	28/second
	Fri Sep  4 02:31:05.992 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:31:05.992 			300	30/second
	Fri Sep  4 02:31:09.638 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:31:09.638 			400	28/second
	Fri Sep  4 02:31:13.034 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:31:13.034 			500	27/second
	Fri Sep  4 02:31:16.627 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:31:16.627 			600	28/second
	Fri Sep  4 02:31:20.041 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:31:20.041 			700	28/second
	Fri Sep  4 02:31:21.752 check 9 749
	Fri Sep  4 02:31:21.759 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:31:34.978 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:31:34.978 			100	7/second
	Fri Sep  4 02:31:38.441 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:31:38.441 			200	11/second
	Fri Sep  4 02:31:41.962 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:31:41.962 			300	15/second
	Fri Sep  4 02:31:45.515 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:31:45.516 			400	16/second
	Fri Sep  4 02:31:48.983 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:31:48.983 			500	18/second
	Fri Sep  4 02:31:52.863 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:31:52.863 			600	19/second
	Fri Sep  4 02:31:56.394 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:31:56.394 			700	20/second
	Fri Sep  4 02:31:59.038 check 9 774
	Fri Sep  4 02:31:59.042 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:32:02.629 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:32:02.629 			100	33/second
	Fri Sep  4 02:32:06.272 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:32:06.272 			200	28/second
	Fri Sep  4 02:32:09.645 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:32:09.645 			300	30/second
	Fri Sep  4 02:32:13.065 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:32:13.065 			400	28/second
	Fri Sep  4 02:32:16.555 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:32:16.555 			500	29/second
	Fri Sep  4 02:32:20.101 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:32:20.101 			600	28/second
	Fri Sep  4 02:32:24.054 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:32:24.054 			700	28/second
	Fri Sep  4 02:32:35.910 check 9 774
	Fri Sep  4 02:32:35.926 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:32:39.797 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:32:39.797 			100	25/second
	Fri Sep  4 02:32:43.382 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:32:43.382 			200	25/second
	Fri Sep  4 02:32:47.130 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:32:47.131 			300	25/second
	Fri Sep  4 02:32:50.884 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:32:50.884 			400	26/second
	Fri Sep  4 02:32:54.564 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:32:54.564 			500	26/second
	Fri Sep  4 02:32:58.215 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:32:58.215 			600	26/second
	Fri Sep  4 02:33:01.915 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:33:01.915 			700	26/second
	Fri Sep  4 02:33:03.742 check 9 749
	Fri Sep  4 02:33:03.750 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:33:07.748 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:33:07.748 			100	25/second
	Fri Sep  4 02:33:11.370 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:33:11.370 			200	25/second
	Fri Sep  4 02:33:14.908 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:33:14.908 			300	27/second
	Fri Sep  4 02:33:20.365 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:33:20.365 			400	23/second
	Fri Sep  4 02:33:31.934 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:33:31.934 			500	17/second
	Fri Sep  4 02:33:40.446 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:33:40.446 			600	16/second
	Fri Sep  4 02:33:46.704 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:33:46.704 			700	16/second
	Fri Sep  4 02:33:50.816 check 9 774
	Fri Sep  4 02:33:50.943 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:33:57.532 		Progress: 44943037/339034045	13%
	Fri Sep  4 02:33:57.532 			100	16/second
	Fri Sep  4 02:34:05.166 		Progress: 89983283/339034045	26%
	Fri Sep  4 02:34:05.166 			200	14/second
	Fri Sep  4 02:34:08.753 		Progress: 135180810/339034045	39%
	Fri Sep  4 02:34:08.753 			300	17/second
	Fri Sep  4 02:34:14.500 		Progress: 180982604/339034045	53%
	Fri Sep  4 02:34:14.500 			400	17/second
	Fri Sep  4 02:34:20.245 		Progress: 226291869/339034045	66%
	Fri Sep  4 02:34:20.245 			500	17/second
	Fri Sep  4 02:34:23.691 		Progress: 271577667/339034045	80%
	Fri Sep  4 02:34:23.691 			600	18/second
	Fri Sep  4 02:34:30.304 		Progress: 316932659/339034045	93%
	Fri Sep  4 02:34:30.304 			700	17/second
	Fri Sep  4 02:34:31.901 check 9 749
	Fri Sep  4 02:34:31.908 imported 749 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:34:35.574 		Progress: 44943037/350494466	12%
	Fri Sep  4 02:34:35.574 			100	33/second
	Fri Sep  4 02:34:39.004 		Progress: 89983283/350494466	25%
	Fri Sep  4 02:34:39.004 			200	28/second
	Fri Sep  4 02:34:42.520 		Progress: 135180810/350494466	38%
	Fri Sep  4 02:34:42.520 			300	30/second
	Fri Sep  4 02:34:46.091 		Progress: 180982604/350494466	51%
	Fri Sep  4 02:34:46.091 			400	28/second
	Fri Sep  4 02:34:49.471 		Progress: 226291869/350494466	64%
	Fri Sep  4 02:34:49.471 			500	29/second
	Fri Sep  4 02:34:52.835 		Progress: 271577667/350494466	77%
	Fri Sep  4 02:34:52.835 			600	30/second
	Fri Sep  4 02:34:56.348 		Progress: 316932659/350494466	90%
	Fri Sep  4 02:34:56.348 			700	29/second
	Fri Sep  4 02:34:58.960 check 9 774
	Fri Sep  4 02:34:58.968 imported 774 objects
	connected to: 127.0.0.1
	Fri Sep  4 02:34:59.031 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
	Fri Sep  4 02:34:59.032 
	Fri Sep  4 02:34:59.032 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
	Fri Sep  4 02:34:59.032 
	Fri Sep  4 02:34:59.032 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
	Fri Sep  4 02:34:59.032 
	Fri Sep  4 02:34:59.032 exception:BSON representation of supplied JSON is too large: code FailedToParse: FailedToParse: Expecting '{': offset:0
	Fri Sep  4 02:34:59.032 
	Fri Sep  4 02:34:59.032 check 0 0
	Fri Sep  4 02:34:59.033 imported 0 objects
	Fri Sep  4 02:34:59.033 ERROR: encountered 4 error(s)s
