module.exports = (drivers) =>
  drivers.DOM.select('#cancel').events('click', true).map(function(ev){
    return {cancel: true};
  });
