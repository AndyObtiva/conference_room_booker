import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, div, form, label, input, h1, h2, img} from '@cycle/dom';


function main(drivers) {

  var initialSink = Rx.Observable.of({time: 0, name: 'Anonymous', room: 'Empty'});

  var timeSink = Rx.Observable.interval(1000).
    map(i => {return {time: (i+1)};});

  var nameSink = drivers.DOM.select('#name').events('keyup').
    map(ev => ev.target.value).
    map(name => {return {name: name};});

  var messageSink = initialSink.merge(timeSink).merge(nameSink);

  var roomNames = ['A', 'B', 'D', 'C', 'E', 'F']
  var rooms = ["#text5180", "#text5184", "#text5188", "#text5192", "#text5196", "#text5200"];
  for (var i = 0; i < 6; i++) {
    ((roomNumber) => {
      messageSink = messageSink.merge(
        drivers.IMAGE.select(rooms[roomNumber]).events('click').map(ev => {console.log(ev); return {room: roomNames[roomNumber]};})
      );
    })(i);
  }


  messageSink = messageSink.scan((prev, curr) => {
    return {
      time: ('time' in curr) ? curr['time'] : prev['time'],
      name: ('name' in curr) ? curr['name'] : prev['name'],
      room: ('room' in curr) ? curr['room'] : prev['room'],
    };
  });

  const sinks = {
    DOM: messageSink.map(message =>
      div([
        form([
          h1('Cycle.js Example - Hello Human Time'),
          label('Enter Name:'),
          input({type: 'text', id: 'name', value: message['name']})
        ]),
        h2('#message', 'Hello ' + message['name'] + '! ' + message['time'] + ' seconds elapsed at room ' + message['room'] + '.')
      ])
    )
  };

  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  IMAGE: makeDOMDriver('svg#svg2')
};

Cycle.run(main, drivers);
