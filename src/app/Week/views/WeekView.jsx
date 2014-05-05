/**
* @jsx React.DOM
*/
var React = require('react'),
    WeekHead = require('root/Week/views/WeekHead'),
    WeekBody = require('root/Week/views/WeekBody');
    //WeekViewHelper = require('root/Week/helpers/WeekViewHelper');

var WeekView = React.createClass({
  render: function () {
    return (
      <table>
        <WeekHead week={this.props.week} />
        <WeekBody week={this.props.week} />
      </table>
    );
  }
});
module.exports = WeekView;