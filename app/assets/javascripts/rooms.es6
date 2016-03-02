import Rx from 'rx';
import Cycle from '@cycle/core';
import {makeDOMDriver, hJSX, div, ul, li} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import roomCollection from './model/roomCollection.es6';
import floorPlanView from './view/floorPlanView.es6'
import bookingView from './view/bookingView.es6'

function main(drivers) {
  const DURATION_DEFAULT = 60;
  const ROOM_NONE = 'None';
  var initialSource = Rx.Observable.of({
    rooms: [{name: ' '}, {name: ' '}, {name: ' '}, {name: ' '}, {name: ' '}, {name: ' '}],
    duration: DURATION_DEFAULT,
    time: DURATION_DEFAULT,
    room: ROOM_NONE
  });

  var durationSource = drivers.DOM.select('#duration').events('keyup', true).map(ev => {
    var duration = ev.target.value;
    return {duration: duration, time: duration};
  });

  var timeDeltaSource = Rx.Observable.interval(1000).
    map(i => {return {timeDelta: 1};});

  const ROOMS_URL = 'http://conference_room_booker.dev/rooms.json';
  var roomsRequest = Rx.Observable.just({url: ROOMS_URL});
  var roomsSource = drivers.HTTP.
    filter(res$ => res$.request.url === ROOMS_URL).
    mergeAll().
    map(res => res.text).
    map(text => {
      return {rooms: JSON.parse(text)};
    });

  var messageSource = initialSource.merge(durationSource).merge(timeDeltaSource).merge(roomsSource);

  roomCollection.forEach((room) => {
    messageSource = messageSource.merge(
      drivers.DOM.select(room.id + "," + room.textId).events('click').map(ev => {
        return {room: room.name};
      })
    );
  });

  messageSource = messageSource.scan((prev, curr) => {
    var time = ('duration' in curr) ? curr['duration'] : prev['time'];
    var room = ('room' in curr) ? curr['room'] : prev['room'];
    var duration = ('duration' in curr) ? curr['duration'] : prev['duration'];
    var rooms = ('rooms' in curr) ? curr['rooms'] : prev['rooms'];
    if (room != ROOM_NONE && 'timeDelta' in curr) time = prev['time'] - curr['timeDelta'];
    if ('room' in curr) time = duration;
    if (time <= 0) {
      time = duration;
      room = ROOM_NONE;
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
    HTTP: roomsRequest,
  };

  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
};

Cycle.run(main, drivers);
