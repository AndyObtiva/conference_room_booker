import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX, div, p, label, input, h1, h2, img} from '@cycle/dom';
import roomCollection from './roomCollection.es6';
import floorPlanView from './floorPlanView.es6'

function main(drivers) {

  var initialSink = Rx.Observable.of({time: 0, room: 'N/A'});

  var timeSink = Rx.Observable.interval(1000).
    map(i => {return {time: (i+1)};});

  var messageSink = initialSink.merge(timeSink);

  roomCollection.forEach((room) => {
    messageSink = messageSink.merge(
      drivers.DOM.select(room.id + "," + room.textId).events('click').map(ev => {
        return {room: room.name};
      })
    );
  });

  messageSink = messageSink.scan((prev, curr) => {
    return {
      time: ('time' in curr) ? curr['time'] : prev['time'],
      room: ('room' in curr) ? curr['room'] : prev['room'],
    };
  });

  const sinks = {
    DOM: messageSink.map(message =>
      div([
        floorPlanView(message),
        h1('Conference Room Booker'),
        p('Please start by clicking on a conference room.'),
        h2('Room booked: ' + message['room']),
        h2('' + message['time'] + ' seconds elapsed.'),
      ])
    )
  };

  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
