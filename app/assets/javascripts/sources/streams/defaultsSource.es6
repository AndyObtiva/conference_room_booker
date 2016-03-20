var Rx = require('rx');
const CONSTANTS = require('../../constants.es6')

module.exports = (drivers) =>
  Rx.Observable.of({
    rooms: [{name: ' '}, {name: ' '}, {name: ' '}, {name: ' '}, {name: ' '}, {name: ' '}],
    duration: CONSTANTS.DURATION_DEFAULT,
    time: CONSTANTS.DURATION_DEFAULT,
    room: CONSTANTS.ROOM_NONE
  });
