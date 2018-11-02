var html = require('choo/html')

// opts: { classes, label }
module.exports = function button(state, emit, opts) {
  var el = html `
  
  <button class="${state.style.classes.button} ${opts.classes}">${opts.label}</button>
  
  `

  el.onclick = opts.onclick
  return el
}