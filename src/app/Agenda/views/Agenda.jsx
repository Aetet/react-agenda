/**
* @jsx React.DOM
*/
var React = require('react'),
    Toolbar = require('root/Agenda/Toolbar/views/Toolbar');
    Content = require('root/Agenda/Content/views/Content');
var Agenda = React.createClass({
  render: function () {
    var type = this.props.type;
      return (
        <div className="span9">

          <div className="hero-unit">
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
          <Toolbar />
          <Content />
        </div>
      );
  }
});
module.exports = Agenda;