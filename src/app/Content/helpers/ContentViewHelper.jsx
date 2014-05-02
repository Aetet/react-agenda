/**
* @jsx React.DOM
*/

var React = require('react');
var MonthView = require('root/Month/views/MonthView');

var ContentViewHelper = {
  getContentView: function (events, type) {
    var ContentView;
    switch (type) {
      case 'week':
        ContentView = this.getMonthView(events);
    }
    return ContentView;
  },

  getMonthView: function (events) {
    var ContentView = <MonthView />;
    return ContentView;
  }
};

module.exports = ContentViewHelper;