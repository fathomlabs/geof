var html = require('choo/html')
var navbutton = require('../navbutton')

module.exports = function back(state, emit) {
  return navbutton(state, emit, {
    svg: {
      name: 'back',
      backgroundColor: state.style.theme.primary
    },
    onclick: e => {
      emit('catches:adding:cancel')
      emit('pushState', '/home')
    }
  })
}