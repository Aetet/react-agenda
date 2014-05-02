/**
* @jsx React.DOM
*/
var React = require('react');
var WeekView = React.createClass({
  render: function () {
    var events = this.props.events;
    return (
      <table>
        <thead>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
});
module.exports = WeekView;