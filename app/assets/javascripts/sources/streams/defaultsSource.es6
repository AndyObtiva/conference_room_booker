var Rx = require('rx');
const CONSTANTS = require('../../constants.es6')

module.exports = (drivers) =>
  Rx.Observable.of({
    time: CONSTANTS.DURATION_DEFAULT,
    duration: CONSTANTS.DURATION_DEFAULT,
    bookedRoom: CONSTANTS.ROOM_NONE
  });
