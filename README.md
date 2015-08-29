# visionion

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
* [Data Import](doc/dataImport.md)
	* [Data Schema Outline](doc/dataImport.md#dataSchemaOutline)  
	* [JSON Schema](doc/dataImport.md#jsonSchema)  
	* [Data Import Checks](doc/dataImport.md#dataImportChecks) 
* [Aggregation](doc/aggregation.md)  
	* [Import Data Aggregation](doc/aggregation.md#import)  
		* [Structural Overview](doc/aggregation.md#structure)  
		* [Structure Detailed](doc/aggregation.md#detailed)  
			* [Projective versus Disjunctive](doc/aggregation.md#prodis)  
		* [Reports](doc/aggregation.md#reports)  
			* [Server Reports](doc/aggregation.md#server)  
			* [Country Reports](doc/aggregation.md#country)  
			* [Autonomous System Reports](doc/aggregation.md#as)  
		* [Future Possibilities](doc/aggregation.md#future)  
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
		* [MongoDB](doc/how2/how2mongo.md)
		* [mapReduce in MongoDB](doc/how2/how2mapReduce.md)
		* [indexing in MongoDB](doc/how2/how2index.md)
		* [generate fake import data](doc/how2/how2fake.md)
		* [D3](doc/how2/how2D3.md)
		* [unix](doc/how2/how2unix.md)
		* [vim](doc/how2/how2vim.md)
		* [git](doc/how2/how2git.md)
		* [webstorm](doc/how2/how2webstorm.md)
	* [Acronyms](doc/acronyms.md)
	* [TODO](todo.md)
		
		













