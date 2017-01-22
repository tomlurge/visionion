# visionion


**development on this project has ended**
**sorry, but it didn't work out**
**parts may be resurrected in the [trice](https://gitlab.com/rat10/trice) analytics suite for Tor metrics data**
**january 2017**


visionion aims to provide a webbased visualization tool for Tor metrics data.

The [Tor](https://www.torproject.org/index.html) project is primarily a system to provide a user with anonymity while on the internet.
It adds to this some means for censorship circumvention as adversaries try to block access to Tor alltogether.
The Tor infrastructure is comprised of several types of network nodes, and a lot thereof.

Visualizing all the parts of this network in a meaningful way is propably not possible but of course insights can be drawn from combining different aspects and sources in one view.
Visionion aims to integrate and visualize all available data in a generic and easily extensible fashion.
These generic views can then be combined and tailored to elucidate structural patterns and hidden aspects in the data.

* [Tor Metrics Data](doc/torMetricsData.md)  
* [Usage Scenarios](doc/usageScenarios.md)  
* [Technical Overview](doc/technicalOverview.md) 
	* [Database](doc/technicalOverview.md#database) 
	* [Web Application Framework](doc/technicalOverview.md#webapp) 
	* [Visualization Framework](doc/technicalOverview.md#vis)  
* [Tor network terminology](doc/torNetworkTerminology.md)  
	* [Gestalt](doc/gestalt.md)
* [Data Import](doc/dataImport.md)
	* [Data Schema Outline](doc/dataImport.md#dataSchemaOutline)  
	* [JSON Schema](doc/dataImport.md#jsonSchema)  
	* [Data Import Checks](doc/dataImport.md#dataImportChecks) 
* [Aggregation](doc/aggregation.md)  
	* [Import Data Aggregation](doc/aggregation.md#import)  
		* [Structural Overview](doc/aggregation.md#structure)  
			* [Projective versus Disjunctive](doc/aggregation.md#prodis)  
		* [Reports](doc/aggregation.md#reports)  
			* [Client Report](doc/aggregation.md#client)  
			* [Server Reports](doc/aggregation.md#server)  
			* [Country Reports](doc/aggregation.md#country)  
			* [Autonomous System Reports](doc/aggregation.md#as)  
		* [Future Possibilities](doc/aggregation.md#future)  
		* [Structure Detailed](doc/aggregation.md#detailed)  
		* [Annotated + Radically Shortened Sample Fact](doc/annotatedFactRow.md)
	* [Consolidation and Simplification](doc/aggregation.md#consolidate)  
	* [Aggregation Admin Interface](doc/aggregation.md#admin)  
	* [MapReduce with MongoDB](doc/aggregation.md#mongoDB)   
	* [Notes](doc/aggregation.md#notes)  
* [Visualization](doc/visualization.md)  
* [Technicalities](doc/technicalities.md)  
	* [Background Information](doc/technicalities.md#background)
	* [JavaScript Issues](doc/technicalities.md#jsIssues)   
	* [Indexing](doc/technicalities.md#indexing)   
		* [Indexing Import Data](doc/technicalities.md#indexingImport) 
		* [Indexing Aggregated Data](doc/technicalities.md#indexingAggregated)   
	* [Working Notes](doc/technicalities.md#notes)  
	* How To 
		* [Setup Shop](doc/how2/how2setup.md)
		* [install and administer MongoDB](doc/how2/how2mongo.md)
		* [query MongoDB](doc/how2/how2queryMongo.md)
		* [index MongoDB](doc/how2/how2indexMongo.md)
		* [mapReduce in MongoDB](doc/how2/how2mapReduce.md)
		* [generate fake import data](doc/how2/how2fake.md)
		* [scaffold the web application](doc/how2/how2app.md)
		* [D3](doc/how2/how2D3.md)
		* [unix](doc/how2/how2unix.md)
		* [vim](doc/how2/how2vim.md)
		* [git](doc/how2/how2git.md)
		* [webstorm](doc/how2/how2webstorm.md)
	* [Acronyms](doc/acronyms.md)
	* [TODO](todo.md)
		
		













