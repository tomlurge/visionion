/* globals Backbone:false, _:false, d3:false */

var app = app || {};

// Stock Collection
app.StockList = Backbone.Collection.extend({
    model: app.Stock,
    url: '/data/stocks.json'
});