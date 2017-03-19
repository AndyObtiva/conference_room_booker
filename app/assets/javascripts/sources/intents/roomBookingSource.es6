var roomCollection = [
  {
    index: 0,
    id: '#rect4311', //path element
    textId: '#text5180' //text element
  },
  {
    index: 1,
    id: '#rect4315',
    textId: '#text5184'
  },
  {
    index: 2,
    id: '#rect5101',
    textId: '#text5192'
  },
  {
    index: 3,
    id: '#rect5109',
    textId: '#text5188'
  },
  {
    index: 4,
    id: '#rect5095',
    textId: '#text5196'
  },
  {
    index: 5,
    id: '#rect5121',
    textId: '#text5200'
  },
]

module.exports = (drivers) =>
  roomCollection.
    map((room) =>
        drivers.DOM.select(room.id + "," + room.textId).events('click').map(ev => {
          return {bookedRoom: room.index};
        })
    ).reduce((output, singleRoomBookingSource) =>
      output.merge(singleRoomBookingSource));
