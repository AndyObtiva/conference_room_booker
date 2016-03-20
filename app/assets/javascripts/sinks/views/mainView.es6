var floorPlanView = require('./floorPlanView.es6');
var bookingView = require('./bookingView.es6');
var CycleDOM = require('@cycle/dom');
var div = CycleDOM.div;

module.exports = messageSource =>
  messageSource.map(message =>
    div([
      bookingView(message),
      floorPlanView(message)
    ])
  )
