
SED
	http://www.grymoire.com/Unix/Sed.html#toc-uh-1
	sed s/day/night/ <old >new
	sed 's/\"bwa\":\([0-9]*\)/&,\"bwp\":\1/' relays.json > relays2.json
	sed 's/addd/type\":\"c\",\"addd/g' clients.json > typedClients.json
	sed 's/<??>/Unknown/ typedClients.json

SPLITING IMPORTs	 - split up the nodes.json.gz file	
	zgrep "type....Bridge" nodes.json.gz > bridges.json
	zgrep -v "type....Bridge" nodes.json.gz > relays.json
	
	
APACHE neustarten 		/etc/init.d/apache2 graceful
APACHE config testen	apache2ctl configtest
APACHE version			apachectl -v
	  logfiles		/var/log/apache2



AUF DEM MAC wget INSTALLIEREN
	brew update
	brew install wget 

USER

root werden
	su -
user wechseln
	su [username]
passwort ändern:
	passwd
neuen user anlegen
	adduser [username]
neue gruppe anlegen
	addgroup [gruppenname]
user zu gruppe zufügen
	addgroup thomas www-data
prüfen in welchen gruppen thomas eingetragen ist
	groups thomas
user wechseln
	su			zb von tl aus root werden
	su -		zb von tl aus root werden, aber mit komfortablerer shell
	su tl		zb von root aus tl werden
wer ist eingeloggt
	w

RECHTE 

rechte von eigentümer und gruppe ändern
	chmod
eigentümer ändern
	zb 	tl@zooey:/var/www/schwabingrad.org/htdocs$ sudo chown -R www-data:www-data .
		ändert die eigentümer für user und gruppe im aktuellen und unterverzeichnissen
		sudo-passwort ist gleich user-passwort
	chown
		zb chown -R www-data /var/www/www.bellastoria.de/htdocs
		zb chown -R thomas /var/www/*
gruppe ändern (geht nur als root)
	chgrp
	zb chgrp -R www-data /var/www/www.bellastoria.de/htdocs
		-R = rekursiv, dann die gruppe, dann das verzeichnis
For example, in order to make a directory tree to be owned by a user foo and shared by a group bar, issue the following commands from the root account:
	cd /some/location/
     	chown -R foo:bar .   (beachte den PUNKT am ende !)
     	chmod -R ug+rwX,o=rX .   (beachte den PUNKT am ende (und das leerzeichen davor)!)
							= setzt permissions, + fügt permissions zu, - entfernt permissions
geheimnisvollerweise startup.sh's zum laufen bringen die irgendwas von permission denied faseln
	chmod 755 /bin/verzeichnis/worin/das/liegt/bin/*
geheimnisvollerweise eine datei ausführbar machen
	chmod a+x dateiname (als root)
noch ein beispiel
	root@zooey:/var/lock# mkdir apache2
	root@zooey:/var/lock# chown -R www-data:www-data apache2
	root@zooey:/var/lock# chmod -R ug+rwX,o=rX /var/lock/apache2
	root@zooey:/var/lock# ls -l
	total 0
	drwxrwxr-x 2 www-data www-data 40 2012-02-16 13:31 apache2
http://en.wikipedia.org/wiki/Chmod
http://en.wikipedia.org/wiki/Chown


DATEI-OPERTIONEN

neue datei erzeugen
	touch [dateiname]
dateien listen
	ls
	ls -a	auch unsichtbare dateien anzeigen
	ls -l	ausführliche ansicht
	ls -altr
datei kopieren
	cp
	-p	bewahrt die ursprünglichen rechte und letzte änderung
	-R	rekursiv
	-v zeigt die gerade kopierte datei im prompt an
dateien bewegen
	mv
verzeichnis löschen
	rm -rf 
eine datei finden
	locate DATEINAME 	(indiziert jeden morgen die platte, deshalb sauschnell)
	find	DATEINAME 	(ohne index, deshalb aktuell, aber saulahm)
		find [wo] -name [was]
		wo: zu durchsuchendes verz, z.b. "/" für alles
		was: suchbegriff, wenn in "", dann auch mit reg exp zb "*omas" findet auch "thomas"
inhalt einer datei anzeigen
	cat
symlink erstellen
	ln -s (/pfad/name der original-datei) (/pfad/name der symlink-datei)
	http://www-rohan.sdsu.edu/doc/debian/ch-advanced.html
das derzeitige verzeichnis anzeigen
	pwd


PACKEN, ENTPACKEN

tar
	tar.gz auspacken 	(x)
		tar xzf
	tar erstellen		(c)
		tar cvf /home/thomas/var_www.tar /var/www  
				packt /var/www in mein homeverzeichnis
		tar cvfz /home/thomas/var_www.tar.gz /var/www  
				packt und gzipped /var/www in mein homeverzeichnis
	v	als zusätzliche option (also zB tar -xzvf) ist verbose
	syk benutzt bei tar noch gerne die option 'j'
gzip -d	dekomprimieren
gzip -r	rekursiv
gunzip	packt ein gz-archiv aus
uncompress	packt ein z-archiv aus


BASH

umgebungsvariablen in der BASH setzen
	.profile
		export JAVA_HOME=/usr
		export ANT_HOME=/usr/local/ant
		export PATH=${PATH}:${ANT_HOME}/bin:/usr/local/pgsql/bin
	.bash_profile
		export JAVA_HOME=/usr
		export CVS_RSH=/usr/bin/ssh
		# der punkt bedeutet "ausführen", der pfad führt zu Fink
		. /sw/bin/init.sh
	umgebungsvariable "direkt" in der bash setzen
		export PATH=$PATH:/usr/local/ant/bin/
	system-weit pfade setzen
		bbedit /etc/profile


SHELL

einen prozess abbrechen
	ctrl  c
raus und fertig
	ctrl d

man verlassen
	ctrl z

prozess starten und dann das fenster schliessen
	./start.sh &
	exit
oder, wenn noch weitere eingaben erwartet werden:
	./start
	ctrl^z
	bg
	exit

subversion auf chefkoch: zur zeit ist der pfad
	svn+ssh://stray.net/home/thomas/subv/... (zb smwebapp)

umgebungsvariablen in 
	.bashrc


SOFTWARE INSTALLIEREN UND AKTUALISIERUNG

	apt-get
	apt-get update      		-> holt die liste neuer pakete
	apt-get upgrade    		-> installiert die updates und patches
	apt-get -u upgrade  		-> installiert die updates und patches, aber frägt erst
	apt-get -u dist-upgrade	-> installiert ein upgrade der distribution
						    kann sinnvoll sein, um die dependencies zurückgehaltener 
						    pakete aufzulösen
	apt-get install [name]	-> installiert das programm
	protokoll wird in /var/log/dpkg.log gespeichert 


PROZESSE

im aktuellen verzeichnis ein skript ausführen
	./skriptname.sh
	./ fügt dem pfad das aktuelle verzeichnis zu
alle prozesse aller user
       ps axuf
alle prozesse des users postgres
       ps axu | grep post
alle prozesse
	ps -ef
einen prozess abschiessen
	kill [#]
oder ganz sicher
	kill -9 [#]
top
	die load der aktiven prozesse
	und dann 	-O	(Ooh, nicht Null)
	und dann	n
	ordnet nach speicherverbrauch


PORTS

welcher prozess hängt an welchem port
	netstat -anpt	
die aktiven dienste samt port anzeigen:
	nmap localhost
port-nummern 
	/etc/services
feststellen auf welchem port mysql lauscht
	grep mysql /etc/services
netwzwerk-probleme
	netstat -rn
	ifconfig
	ping






MAC OS X

ROOT werden unter MAC OS X
	sudo -s 
Apache auf'm mac unter /private/etc/apache2
	On Macs with OS X 10.5.5 the default directory for Apache2 is `/Library/WebServer/Documents'.
Restart Apache2 with: sudo apachectl restart
	copies of the Apache configuration files in /etc/apache2/original
mac os x MySQL
	user root password 1pro
	starten
		sudo /usr/local/mysql/bin/mysqld_safe
		http://developer.apple.com/internet/opensource/osdb.html
			passwort einrichten
				/usr/local/mysql/bin/mysqladmin -u root password 1pro
	stoppen
		sudo mysqladmin shutdown
	sql befehl ausführen
		sudo mysql -uroot -p1pro
		... und da erscheint auch prompt das prompt...
JAVA und OS X
	die version wechseln
	cd /System/Library/Frameworks/JavaVM.framework/Versions
	rm CurrentJDK
	ln -s 1.5.0 CurrentJDK     ((zb, könnte natürlich auch ein anderes sein, ls listet sie alle))
	java -version
alle prozesse auf MAC OS X
	ps -almuvwx
	das fördert einiges zutage, was die parameter alle bedeuten weiss ich nicht

JAVA unter DEBIAN installieren
	die jsdk ziehen
	chmod +x jsdk.bin
	./jsdk.bin (enter)
	dann entpackt sich das miststück 
       und man muss es nur noch an den gewünschten ort verschieben

TOMCAT
	fehlermeldungen verfolgen
		cd ~tomcat_home/logs 
		tail -f catalina.out





freien speicherplatz auf der festplatte anzeigen
	df -h
	z.b.:
	thomas@syntax:/$ df -h
	Filesystem            Size  Used Avail Use% Mounted on
	/dev/hda1             471M   17M  429M   4% /
	/dev/hda7             104G  5.5G   93G   6% /home
	/dev/hda6             3.8G  1.4G  2.2G  38% /var
	/dev/hda3             3.8G  483M  3.0G  14% /usr
	/dev/hda5             121M   23k  115M   1% /tmp

hilfe holen
	apropos xxx		man pages zum begriff xxx anzeigen
					den index anlegen mit sudo catman -w 
	man [befehl]		hilfe zum befehl
	man man			hilfe zu den man pages
	man -k xxx		wie apropos
	u				nach oben blättern
	d oder space		nach unten blättern
	q				man verlassen
debian how-tos
http://www.debian.org/doc/manuals/securing-debian-howto/index.en.html#contents
http://www.debian.org/doc/user-manuals
http://www.debian.org/doc/manuals/reference/reference.de.html#contents
http://www.tldp.org/HOWTO/Security-Quickstart-HOWTO/services.html

crontab editieren, am beispiel: nächtliches system-update:
	das hier in die crontab:
	0 1 * * *   apt-get -qq update && apt-get -dqq upgrade && apt-get -sqq upgrade
	(eine zeile!!!)
	und das system wird nachts um eins geupdatet
	editieren der crontab mit
		crontab -e
		als superuser, da apt-get als superuser laufen muss

how to WGET my sites:
	C:\Programme\1netUse\wget\WGET.EXE --recursive --no-parent
	--convert-links - -no-host-directories --cut-dirs=2
       http://www.nadir.org/nadir/kampagnen/camp01

in welcher datei wird bei debian eingetragen, welche programm beim booten gestartet werden sollen?
	die stehen im verzeichnis /etc/init.d
	das sind die startscripte selbst und alle scripte, die beim booten gestartet werden soll sind in den verzeichnissen /etc/rcX.d/ verlinkt.
	X ist runlevel
	google debian runlevel init.d
alle umgebungsvariablen anzeigen lassen
	set
die aktuelle partition anzeigen lassen
	df .
alle prozesse, die auf home zugreifen, anzeigen lassen
	lsof | grep home
scp
	alle dateien aus einem verzeichnis auf einen andern server
	scp /etc/apache2/ssl/* root@62.75.185.236:/etc/apache2/ssl

	scp SourceFile user@host:directory/TargetFile
	scp user@host:folder/SourceFile TargetFile

eine datei aus dem netz ziehen
	wget [url]


echo "this is new(s) to me" > new.txt