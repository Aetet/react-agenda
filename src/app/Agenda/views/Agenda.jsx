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

  //Необходимо совершать выборку за месяц.
  //Получать сдвиг для первой недели месяца.
  //Получить номер текущей недели.
  //Если неделя первая запросить еще один месяц в фоне.
  //Если неделя последняя запросить еще один месяц в фозне
  getInitialState: function () {
    return {
      events: [
        [{
          date: '2014-04-12 14:35',
          title: 'Hello, doctor',
          time: ''
        }, {
          date: '2014-04-12 14:35',
          title: 'Next patient'
        }, {
          date: '2014-04-12 14:35',
          title: 'Another patient'
        }],
        [],
        [],
        [],
        [],
        [],
        []
      ],

      type: 'week'
    };
  },
  render: function () {

    var type = this.props.type;
    return (
      <div className="span9">
        <div className="hero-unit">
          <Toolbar />
          <Content events={this.state.events} type={this.state.type}/>
        </div>
      </div>
    );
  }
});
module.exports = Agenda;