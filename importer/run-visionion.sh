#!/bin/sh
set -e
echo `date` "Starting."
echo `date` "Parsing descriptors."
javac -d bin/ -cp lib/commons-codec-1.6.jar:lib/commons-compress-1.4.1.jar:lib/descriptor.jar src/Parse.java
java -Xmx4g -cp bin/:lib/commons-codec-1.6.jar:lib/commons-compress-1.4.1.jar:lib/descriptor.jar Parse
for i in $(ls out/*.sql)
do
  echo `date` "Importing $i."
  psql -f $i visionion
done
echo `date` "Exporting results."
psql -c "COPY (SELECT * FROM joined) TO STDOUT WITH CSV HEADER DELIMITER ';';" visionion > visionion.csv
echo `date` "Converting results."
javac -d bin/ -cp lib/commons-codec-1.6.jar:lib/commons-compress-1.4.1.jar:lib/gson-2.2.3.jar:lib/descriptor.jar src/Convert.java
java -Xmx4g -cp bin/:lib/commons-codec-1.6.jar:lib/commons-compress-1.4.1.jar:lib/gson-2.2.3.jar:lib/descriptor.jar Convert
echo `date` "Terminating."

