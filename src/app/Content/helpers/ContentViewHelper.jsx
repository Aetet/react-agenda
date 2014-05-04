/**
* @jsx React.DOM
*/

var React = require('react');
var WeekView = require('root/Week/views/WeekView');

var ContentViewHelper = {
  getContentView: function (week, type) {
    var ContentView;
    switch (type) {
      case 'week':
        ContentView = this.getWeekView(week);
    }
    return ContentView;
  },

  getWeekView: function (week) {
    var ContentView = <WeekView week={week} />;
    return ContentView;
  }
};

module.exports = ContentViewHelper;