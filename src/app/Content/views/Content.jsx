/**
* @jsx React.DOM
*/
var React = require('react');
var helper = require('root/Content/helpers/ContentViewHelper');

var Content = React.createClass({

  render: function () {
    console.log('cv', helper);
    var ContentView = helper.getContentView(this.props.events, this.props.type);
    return (
      <div>
        {ContentView}
      </div>
    );
  }
});
module.exports = Content;