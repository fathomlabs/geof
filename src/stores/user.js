module.exports = (state, emitter) => {
  state.user = {
    setupDone: false
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('user:setup', data => {
      Object.assign(state.user, data)
      state.user.setupDone = true
      emitter.emit('pushState', '#home')
    })
  })
}