var html = require('choo/html')

module.exports = store

function store(state, emitter) {
  var splash = () => {
    var next = state.user.setupDone ? '#home' : '#startup'
    emitter.emit('pushState', next)
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('navigator:splash', splash)
  })
}
