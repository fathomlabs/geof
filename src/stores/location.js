module.exports = (state, emitter) => {
  state.location = {
    lastLocation: null,
    gpsEnabled: true
  }

  var update = () => navigator.geolocation.getCurrentPosition(pos => {
    // pos.coords.latitude, pos.coords.longitude
    state.location.lastLocation = pos
    emitter.emit('location:updated', state.location.lastLocation)
  })

  emitter.on('DOMContentLoaded', function () {
    emitter.on('location:update', update)
  })
}