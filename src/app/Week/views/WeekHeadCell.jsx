/**
* @jsx React.DOM
*/
var React = require('react'),
    moment = require('moment');
    moment.lang('ru');
var WeekHeadCell = React.createClass({
  render: function () {
    var date = moment(this.props.date).format('DD.MM.YYYY ddd');
    return (
      <th>{date}</th>
    );
  }
});
module.exports = WeekHeadCell;