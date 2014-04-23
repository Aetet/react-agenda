/**
* @jsx React.DOM
*/
var React = require('react');
var Toolbar = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row-fluid">
          <div className="span2 offset4 text-center">
            Неделя 
          </div> 
          <div className="span2 text-center">
            Месяц 
          </div> 
        </div>
        <div className="row-fluid">
          <div className="span4 text-center">
            Виджет переключения недель
          </div>
          <div className="span4 text-center">
            Текущая неделя
          </div>
        </div>
      </div>
    );
  }
});
module.exports = Toolbar;