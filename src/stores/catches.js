var steps = [
  'location',
  'fish',
  'size'
]

var init = []

module.exports = function (state, emitter) {
  state.catches = {
    log: init,
    adding: null
  }

  var update = catchdata => {
    var adding = state.catches.adding || {}
    state.catches.adding = Object.assign(adding, catchdata)
  }

  var cancel = () => {
    state.catches.adding = null
    emitter.emit(state.events.PUSHSTATE, '/home')
  }

  var done = () => {
    var c = state.catches.adding
    if (!c) return
    emitter.emit('allowance:update')
    var key = `${c.wb}:${c.sp}:${c.size}`

    // check if this catch has advisories
    var adv = state.data.adv[key]
    c.key = key
    c.adv = adv

    // log it and cleanup
    state.catches.log.push(c)
    state.catches.adding = null
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('catches:adding:cancel', cancel)
    emitter.on('catches:adding:update', update)
    emitter.on('catches:adding:done', done)
  })

}