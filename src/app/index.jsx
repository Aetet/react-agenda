/** @jsx React.DOM */

var React = require('react'),
    Sidebar = require('root/Sidebar/views/Sidebar'),
    Agenda = require('root/Agenda/views/Agenda');

var Index = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="row-fluid">
          <Sidebar />
          <Agenda />
        </div>
      </div>
    );
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.appl'));
