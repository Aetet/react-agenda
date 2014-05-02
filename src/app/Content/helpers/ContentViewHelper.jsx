/**
* @jsx React.DOM
*/

var React = require('react');
var WeekView = require('root/Week/views/WeekView');

var ContentViewHelper = {
  getContentView: function (events, type) {
    var ContentView;
    switch (type) {
      case 'week':
        ContentView = this.getWeekView(events);
    }
    return ContentView;
  },

  getWeekView: function (events) {
    var ContentView = <WeekView events={events} />;
    return ContentView;
  }
};

module.exports = ContentViewHelper;