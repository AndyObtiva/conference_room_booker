var defaultsSource = require('../streams/defaultsSource.es6');
var bookerSource = require('../intents/bookerSource.es6');
var bookingDurationSource = require('../intents/bookingDurationSource.es6');
var timeChangeSource = require('../streams/timeChangeSource.es6');
var roomBookingSource = require('../intents/roomBookingSource.es6');
var pipesAndFilters = require('../../pipesAndFilters.es6');

const CONSTANTS = require('../../constants.es6');

module.exports = (drivers) =>
  pipesAndFilters(drivers).
    mergeSources(
      defaultsSource,
      bookerSource,
      bookingDurationSource,
      timeChangeSource,
      roomBookingSource
    ).
    scan((prev, curr) => {
      var time = prev['time'];
      var bookedRoom = ('bookedRoom' in curr) ? curr['bookedRoom'] : prev['bookedRoom'];
      var booker = ('booker' in curr) ? curr['booker'] : prev['booker'];
      var duration = ('duration' in curr) ? curr['duration'] : prev['duration'];
      if (bookedRoom != CONSTANTS.ROOM_NONE && 'timeChange' in curr) time = prev['time'] - curr['timeChange'];
      if ('bookedRoom' in curr) time = duration;
      if (time <= 0) {
        time = duration;
        bookedRoom = CONSTANTS.ROOM_NONE;
      }
      return {
        time: time,
        bookedRoom: bookedRoom,
        booker: booker,
        duration: duration,
      };
    });
