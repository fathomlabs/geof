var html = require('choo/html')

module.exports = footer

// components
var tab = require('./tab')

function footer(state, emit, opts) {
  opts = opts || {}

  return html `
  
  <div class="${state.style.classes.footer}">
    ${tab(state, emit, opts.left || { icon: ':)', label: 'smile' })}
    ${tab(state, emit, opts.middle || { icon: ':|', label: 'meh' })}
    ${tab(state, emit, opts.right || { icon: ':(', label: 'waaah' })}
  </div>
  
  `
}