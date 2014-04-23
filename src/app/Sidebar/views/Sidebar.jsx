/**
* @jsx React.DOM
*/
var React = require('react');
var Sidebar = React.createClass({
  render: function () {
      return (
        <div className="span3">
          <div className="well sidebar-nav">
            <ul className="nav nav-list">
              <li className="nav-header">hey ho</li>
            </ul>
          </div>
        </div>
      );
  }
});
module.exports = Sidebar;