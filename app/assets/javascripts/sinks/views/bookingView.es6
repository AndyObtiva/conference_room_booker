var CycleDOM = require('@cycle/dom');
var a = CycleDOM.a;
var div = CycleDOM.div;
var p = CycleDOM.p;
var h1 = CycleDOM.h1;
var h2 = CycleDOM.h2;
var input = CycleDOM.input;

module.exports = (message => {
  var elapsing = message['time'] < message['duration'];
  var bookedRoom = message['rooms'][message['bookedRoom']] || {name: ''};
  return div([
    h1('Conference Room Booker (in Cycle.js)'),
    p('Please enter duration needed and book a room by clicking on it.'),
    h2([
      'Booker: ',
      input({id: 'booker', disabled: elapsing ? 'disabled' : null, value: elapsing ? message['booker'] : message['booker']}),
    ]),
    h2([
      input({id: 'duration', disabled: elapsing ? 'disabled' : null, value: elapsing ? message['time'] : message['duration']}),
      ' seconds remaining.'
    ]),
    h2([
      'Room booked: ' + bookedRoom.name + ' ',
      a({id: 'cancel', href: 'javascript:null', style: elapsing ? 'display: inline;' : 'display: none;'}, '(Cancel)')
    ]),
  ])
});
