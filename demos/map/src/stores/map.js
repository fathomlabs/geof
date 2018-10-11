var html = require('choo/html')

module.exports = store

function store (state, emitter) {
  state.map = {
    show: false
  }

  emitter.on('DOMContentLoaded', function () {
    state.map.show = true
    emitter.emit('render')
    emitter.on('lakes:loaded', () => emitter.emit('render'))
  })
}
