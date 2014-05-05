/**
* @jsx React.DOM
*/
var React = require('react'),
    WeekHeadCell = require('root/Week/views/WeekHeadCell'),
    moment = require('moment');
    moment.lang('ru');

var WeekHead = React.createClass({
  render: function () {

    var head = [];
    var mTmpDate = moment(this.props.week.startDate);

    for (var i = 0; i < 7; i++) {
      var cell = <WeekHeadCell date={mTmpDate.format('YYYY-MM-DD')} />;
      head.push(cell);
      mTmpDate.add(1, 'day');
    }

    return (
      <thead>
        {head}
      </thead>
    );


    // return (
    //   <thead><tr><th>Jojo</th></tr></thead>
    // );
  }
});
module.exports = WeekHead;