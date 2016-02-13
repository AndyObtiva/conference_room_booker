var CycleDOM = require('@cycle/dom');
var div = CycleDOM.div;
var p = CycleDOM.p;
var h1 = CycleDOM.h1;
var h2 = CycleDOM.h2;
var input = CycleDOM.input;

module.exports = (message =>
  div([
    h1('Conference Room Booker (in Cycle.js)'),
    p('Please enter duration needed and book a room by clicking on it.'),
    h2([
      input({id: 'duration', value: message['time'] < message['duration'] ? message['time'] : message['duration']}),
      ' seconds remaining.'
    ]),
    h2('Room booked: ' + message['room']),
  ])
);
