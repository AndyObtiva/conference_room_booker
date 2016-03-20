var Rx = require('rx');
var roomRequestCycle = require('../http/roomRequestCycle.es6');
var bookedRoomTimingSource = require('../../sources/models/bookedRoomTimingSource.es6');

module.exports = (drivers) => {
  var roomRequest = roomRequestCycle(drivers);
  return {
    cycleSource: Rx.Observable.combineLatest(
      roomRequest.cycleSource,
      bookedRoomTimingSource(drivers),
      (roomsData, bookedRoomTimingData) => Object.assign(roomsData, bookedRoomTimingData)
    ),
    cycleSink: roomRequest.cycleSink
  };
};
