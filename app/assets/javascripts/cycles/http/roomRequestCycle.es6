var Rx = require('rx');
const CONSTANTS = require('../../constants.es6');

module.exports = (drivers) => {
  return {
    cycleSource: drivers.HTTP.
      filter(res$ => res$.request.url === CONSTANTS.ROOMS_URL).
      mergeAll().
      map(res => res.text).
      map(text => {
        return {rooms: JSON.parse(text)};
      }),
    cycleSink: Rx.Observable.just({url: CONSTANTS.ROOMS_URL})
  }
}
