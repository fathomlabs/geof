var html = require('choo/html')
var navbutton = require('../navbutton')

module.exports = function settings(state, emit) {
  return navbutton(state, emit, {
    svg: {
      name: 'settings'
    },
    onclick: e => {
      emit('pushState', '#settings')
    }
  })
}