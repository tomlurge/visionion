## Visualization


### Visualization Interface Wishlist

- coloring of data should be readable for color blind people
- selecting countries by region, by other criterias (eg number of relays), on a map etc
- visualize countries on a fisheye map, with suitable projection
- selecting time period by widget, zoom in/out, move left/right in time
- ability to change scale on vertical axis
- ensure that any field not accessible through predefined vis options is accessible through gerneric interface
- combine criteria eg stable and fast relays runnix linux with OS version xy in country z
- combine/add/stack graphs to show complete datasets (eg cake diagrams)
- SVG export
- [future] consumed bandwidth between relays
- chrome colors green and purple


Some useful links:

- [Topojson](https://github.com/mbostock/topojson/)
- [Fisheye](http://bost.ocks.org/mike/fisheye/)


### Visualization Mechanics Wishlist

- notify the client of new fields so he can add them to the generic interface
- RESTfulness: having the URL represent the complete state of a visualization
  e.g. including zoom factor, active facets, selected clipping etc
- bookmarkability of any state of visualization
- no dependance on client-side javascript

