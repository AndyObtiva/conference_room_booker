var Rx = require('rx');

module.exports = (drivers) =>
  Rx.Observable.interval(1000).map(i => {return {timeChange: 1};});
