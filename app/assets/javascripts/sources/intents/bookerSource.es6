module.exports = (drivers) =>
  drivers.DOM.select('#booker').events('keyup', true).map(function(ev){
    var booker = ev.target.value;
    return {booker: booker};
  });
