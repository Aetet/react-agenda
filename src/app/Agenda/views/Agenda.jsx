/**
* @jsx React.DOM
*/
var React = require('react'),
    Toolbar = require('root/Toolbar/views/Toolbar'),
    Content = require('root/Content/views/Content');
var Agenda = React.createClass({
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