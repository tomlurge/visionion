## Tor Metrics Data

The project website provides the [currently available data in JSON](https://metrics.torproject.org/graphs/) as well as an [overview of metrics descriptor formats](https://metrics.torproject.org/index.html) and the [raw data](https://metrics.torproject.org/data.html).
It's currently saved to a PostgreSQL database ([SQL schema](https://gitweb.torproject.org/metrics-web.git/blob/HEAD:/db/tordir.sql)).

The data used for Visionion is so far based on sample data provided by the Tor Metrics project. See the [importer](importer) subdirectory and especially the [README](importer/README) for more details.

The [TODO](importer/TODO.md) lists open tasks - mostly changes in Visionion that need to be backported to the importer.

