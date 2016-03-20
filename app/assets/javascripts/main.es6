import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX, div, ul, li} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import roomBookingSource from './sources/models/roomBookingSource.es6';
import defaultsSource from './sources/streams/defaultsSource.es6';
import bookingDurationSource from './sources/events/bookingDurationSource.es6';
import timeChangeSource from './sources/streams/timeChangeSource.es6';
import roomRequestCycle from './cycles/http/roomRequestCycle.es6';
import mainView from './sinks/views/mainView.es6';
import pipesAndFilters from './pipesAndFilters.es6';

const CONSTANTS = require('./constants.es6');

var main = (drivers) => {
  var messageSource = pipesAndFilters(drivers).
    mergeSources(
      defaultsSource,
      bookingDurationSource,
      timeChangeSource,
      roomRequestCycle,
      roomBookingSource
    );

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
    DOM: mainView(messageSource),
    HTTP: roomRequestCycle(drivers).cycleSink,
  };

  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
};

Cycle.run(main, drivers);
