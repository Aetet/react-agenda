/**
* @jsx React.DOM
*/
var React = require('react'),
    Toolbar = require('root/Toolbar/views/Toolbar'),
    Content = require('root/Content/views/Content');
var Agenda = React.createClass({
  //Подгружаются события на один месяц.
  //Если текущая дата меньше 10, то подгружаем прошлый месяц и текущий
  //Если текущая дата больше 20, то подгружаем текущий и следующий
  //Если между 10 и 20 подгружаем только текущий
  //Каждая подгрузка увеличивает количество объектов в state
  //Или оставляет его неизменным
  getInitialState: function () {
    return {
      events: [{
        date: '01.05.03',
        title: 'Hello'
      }, {
        date: ''
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