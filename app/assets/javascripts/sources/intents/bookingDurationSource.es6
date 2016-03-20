module.exports = (drivers) =>
  drivers.DOM.select('#duration').events('keyup', true).map(function(ev){
    var duration = ev.target.value;
    return {duration: duration, time: duration};
  });
