/**
* @jsx React.DOM
*/

var React = require('react'),
    moment = require('moment');
    moment.lang('ru');

var WeekViewHelper = {
  getHead: function (week) {
    var startDate = week.startDate;
    var head = [];
    var tmpM = moment(startDate);
    for (var i = 0; i < 7; i++) {
      var tmp = <th>{tmpM.format('DD.MM.YYYY dd')}</th>;
      tmpM.add(1, 'day');
      head.push(tmp);

    }
    return (<div>{head}</div>);
  }
};

module.exports = WeekViewHelper;