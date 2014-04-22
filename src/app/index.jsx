/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('root/Sidebar/views/Sidebar'),
    Agenda = require('root/Agenda/views/Agenda');

var Index = React.createClass({
  render: function () {
    return (
      <div>
        <Sidebar />
        <Agenda/>
      </div>
    );
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.appl'));
