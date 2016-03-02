import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX, div, ul, li} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import roomCollection from './sources/models/roomCollection.es6';
import initialSource from './sources/streams/initialSource.es6';
import roomRequestCycle from './cycles/http/roomRequest.es6';
import floorPlanView from './sinks/views/floorPlanView.es6';
import bookingView from './sinks/views/bookingView.es6';

const CONSTANTS = require('./constants.es6');

var main = (drivers) => {

  var durationSource = drivers.DOM.select('#duration').events('keyup', true).map(ev => {
    var duration = ev.target.value;
    return {duration: duration, time: duration};
  });

  var timeDeltaSource = Rx.Observable.interval(1000).
    map(i => {return {timeDelta: 1};});

  var roomRequest = roomRequestCycle(drivers);

  var messageSource = initialSource.merge(durationSource).merge(timeDeltaSource).merge(roomRequest.source);

  roomCollection.forEach((room) => {
    messageSource = messageSource.merge(
      drivers.DOM.select(room.id + "," + room.textId).events('click').map(ev => {
        return {room: room.index};
      })
    );
  });

  messageSource = messageSource.scan((prev, curr) => {
    var time = ('duration' in curr) ? curr['duration'] : prev['time'];
    var room = ('room' in curr) ? curr['room'] : prev['room'];
    var duration = ('duration' in curr) ? curr['duration'] : prev['duration'];
    var rooms = ('rooms' in curr) ? curr['rooms'] : prev['rooms'];
    if (room != CONSTANTS.ROOM_NONE && 'timeDelta' in curr) time = prev['time'] - curr['timeDelta'];
    if ('room' in curr) time = duration;
    if (time <= 0) {
      time = duration;
      room = CONSTANTS.ROOM_NONE;
    }
    return {
      time: time,
      room: room,
      duration: duration,
      rooms: rooms,
    };
  });

  const sinks = {
    DOM: messageSource.map(message =>
      div([
        bookingView(message),
        floorPlanView(message)
      ])
    ),
    HTTP: roomRequest.sink,
  };

  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
};

Cycle.run(main, drivers);
