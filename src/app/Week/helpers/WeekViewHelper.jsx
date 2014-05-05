/**
* @jsx React.DOM
*/

var React = require('react'),
    WeekHeaderView = require('root/Week/views/WeekHeaderView');

var WeekViewHelper = {
  getHead: function (week) {
    var head = [];
    var startDate = moment(week.startDate).format('YYYY-MM-DD HH:mm');
    var tmpDate = moment(week.startDate);
    for (var i = 0; i < 7; i++) {
      <WeekHeaderView date={tmpDateStr} />
      var tmp = <th>{tmpM.format('DD.MM.YYYY dddd')}</th>;
      tmpM.add(1, 'day');
      head.push(tmp);
    }
    return (<thead>{head}</thead>);
  },

  getBody: function (week) {
    return (<tbody><tr><td>Ojoj</td></tr></tbody>);
  }
};

module.exports = WeekViewHelper;