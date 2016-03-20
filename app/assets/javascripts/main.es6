import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeHTTPDriver} from '@cycle/http';
import viewModelCycle from './cycles/models/viewModelCycle.es6';
import mainView from './sinks/views/mainView.es6';

const CONSTANTS = require('./constants.es6');

var main = (drivers) => {
  var viewModel = viewModelCycle(drivers);
  const sinks = {
    DOM: mainView(viewModel.cycleSource),
    HTTP: viewModel.cycleSink,
  };

  return sinks;
}

const drivers = {
  DOM: makeDOMDriver('#app'),
  HTTP: makeHTTPDriver()
};

Cycle.run(main, drivers);
