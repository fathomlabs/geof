var steps = [
  'location',
  'fish',
  'size'
]

module.exports = function(state, emitter) {
  state.catches = {
    log: [],
    adding: null
  }

  var update = catchdata => {
    var adding = state.catches.adding || {}
    state.catches.adding = Object.assign(adding, catchdata)
  }

  var cancel = () => {
    state.catches.adding = null
    emitter.emit(state.events.PUSHSTATE, './')
  }

  var done = () => {
    var adding = state.catches.adding
    if (!adding) return
    state.log.push(adding)
    state.catches.adding = null
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('catches:adding:cancel', cancel)
    emitter.on('catches:adding:update', update)
    emitter.on('catches:adding:done', done)
  })

}