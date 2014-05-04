/**
* @jsx React.DOM
*/
var React = require('react'),
    WeekViewHelper = require('root/Week/helpers/WeekViewHelper');
var WeekView = React.createClass({
  render: function () {
    var head = WeekViewHelper.getHead(this.props.week);
    return (
      <table>
        <thead>
          {head}
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
});
module.exports = WeekView;