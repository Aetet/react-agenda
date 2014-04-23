/**
* @jsx React.DOM
*/
var React = require('react'),
    CreateEvent = require('root/CreateEvent/views/CreateEvent');
var Month = React.createClass({

  render: function () {
    return (
      <div>
        <CreateEvent />
      </div>
    );
  }
});
module.exports = Month;