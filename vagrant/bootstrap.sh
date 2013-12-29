#!/usr/bin/env bash

cd /vagrant

# create clean tmp dir
#rm -rf tmp/*
#mkdir -p tmp/db
rm -rf tmp/*
mkdir -p /data/db

# download onionoo dumps
wget https://people.torproject.org/~karsten/volatile/clients-2013-10-18.json.gz -O tmp/clients.json.gz
wget https://people.torproject.org/~karsten/volatile/servers-2013-09-10.json.gz -O tmp/servers.json.gz

# unzip dumps
gunzip tmp/clients.json.gz
gunzip tmp/servers.json.gz

cd /vagrant
ln -s /data/db /vagrant/tmp/db

# install mongodb
# via http://docs.mongodb.org/manual/tutorial/install-mongodb-on-debian/
apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/debian-sysvinit dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
apt-get update
#apt-get install mongodb-10gen --force-yes
apt-get install mongodb-10gen=2.0.6 --force-yes

# stop started mongodb process
/etc/init.d/mongodb stop

# start mongod TODO: add parameters if required
mongod &

# TODO: find better way to wait
# sleep a while to wait for mongodb to be ready
sleep 30s

# import dumps
mongoimport --db visionion --collection import --stopOnError --upsert --file tmp/clients.json
mongoimport --db visionion --collection import --stopOnError --upsert --file tmp/servers.json

mongo localhost:27017/visionion vagrant/bootstrap.js

echo "alias mr3='mongo localhost:27017/visionion /vagrant/aggregation/mongodb/mr3.js'" >> /home/vagrant/.bashrc
echo "bootstrapping done"