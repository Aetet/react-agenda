/**
* @jsx React.DOM
*/
var React = require('react'),
    Month = require('root/Month/views/Month');
var Content = React.createClass({
  render: function () {
    var content;
    var type = 'month';

    switch(type) {
      case 'month':
        content = <Month />;
        break;
      default:
        break;
    }
    return (
      <div>
        {content}
      </div>
    );
  }
});
module.exports = Content;