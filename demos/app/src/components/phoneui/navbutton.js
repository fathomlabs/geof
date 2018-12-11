var html = require('choo/html')
var svg = require('../utils/svg')

// opts: { classes, label }
module.exports = function navbutton(state, emit, opts) {
  var icon = null
  if (opts.svg) {
    var svgopts = Object.assign({
      backgroundColor: 'white',
      size: '40px'
    }, opts.svg)
    icon = svg(state, emit, svgopts)
  }
  var el = html`
  
  <button class="${state.style.classes.navbutton} ${opts.classes}">${opts.label}${icon}</button>
  
  `

  el.onclick = opts.onclick
  return el
}