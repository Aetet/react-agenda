/**
* @jsx React.DOM
*/
var React = require('react'),
    Toolbar = require('root/Toolbar/views/Toolbar'),
    Content = require('root/Content/views/Content');
var Agenda = React.createClass({
  getInitialState: function () {
    return {
      events: [{
        date: '01.05.03',
        title: 'Hello'
      }]
    };
  },
  render: function () {

    var type = this.props.type;
      return (
        <div className="span9">
          <div className="hero-unit">
            <Toolbar />
            <Content />
          </div>
        </div>
      );
  }
});
module.exports = Agenda;