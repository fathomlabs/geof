var navbutton = require('../navbutton')

module.exports = function (state, emit) {
  return navbutton(state, emit, {
    svg: {
      name: 'settings',
      backgroundColor: state.style.theme.primary
    },
    onclick: e => {
      emit('pushState', '/settings')
    }
  })
}