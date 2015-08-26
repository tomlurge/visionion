## Usage Scenario

A user might just have some simple questions: how many relays were there running in the past 3 months in .de? How much bandwidth was provided by relays running Tor version 0.2.3.x.?
Such questions might just ask for a number and therefor need no visualization at all.
When a series of numbers is asked for or when information needs get more complex because they involve different factors and sources of data a visualization can be very handy to ease comprehension of the answer.
A simple graph of values over a period of time can already be grasped much more easily than a list of numbers.
Visually combining and contextualizing different aspects of data in one place can help understand causes, effects and correlations.
When there is a problem to which not only the right answer but also the right question is not known a visualization can help develop an understanding of what's going on in the first place.
Certainly this is an ambitious task for which the visualization has to provide interactive controls and visual malleablity.

How to achieve all this?
Basically, take all network graphs and merge them into one single graph with plenty of options.
Users should be able to navigate into any factor (bridge vs. relay, country, flags, Tor software version, operating system, EC2 cloud bridge or not) and learn the total relay number or advertised bandwidth or bandwidth history or any other available metric for their selection.

**Scenario 1 : a classic curve**
The most prominent usecase is the timeline with a graph representing volumina of bandwidth or number of hosts or number of clients etc. on the vertical axis.
This scenario is currently implemented by the Tor metrics project [graph visualizations](https://metrics.torproject.org/network.html).

**Scenario 1a : curves layered on each other**
It should also be possible to layer timeline graphs for the same time period but with different subject on each other to compare eg correlations between consumed bandwidth and number of clients.
This scenario is currently available as a prototype at [interactive graphs](http://tigerpa.ws/tor_metrics/).

**Scenario 2 : adding detail on an orthogonal plane**
Imagine a plane orthogonal to the graph, representing some other data at that point in time eg adding to the graph of Linux driven relays a cake diagram of all operating systems driving relays.
This is one step beyond simple layering of graphs. Combining different visualization techniques like timeline and cake diagram visualizes relations between different categories of data. Control shifts from the visualization framework to the web application.

**Scenario 3 : geography**
A ground plane on the floor might show geographic distribution of linux driven relays and how much bandwidth each of them handles, the imaginary center of Linux driven traffic at the crosspoint of the first two planes.
The geographical dimension is not very strongly represented in the raw data but nonetheless sometimes an important perspective.

**Scenario 4 : events**
Now add markers for certain events: the day when traffic from linux driven relays peaked, the day it hit an alltime low, the days it plummeted, the days it spiked etc.
Markers point the user in directions that might be worth to explore. Its driven by some analytics in the background.

**Scenario 5 : amassments**
Emphasize the biggest nodes for a given metric and their share of the total.
Facilitate checks for (de-) centralizations in the infrastructure.


### More usecases
* Visualizing the total pbr of all relays with a certain characteristic, e.g. what's the total pbr of all relays in Germany?
* number of relays running version 0.2.4 on Linux.
* bandwidth provided by relays running version 0.2.4
* bytes per day transported by relays running Linux.
* number of relays running with type Guard and Middle, with the Fast and Stable flag, with version 0.2.3.x, on OS X, in AS 1234, not permitting any ports, in Germany, on May 23, 2013   (maximum level of detail)
* total pbr of all relays with a certain characteristic. E.g. what's the total pbr of all relays in Germany?
* bwa, bwc, and pbr are more important measures than the number of nodes.


