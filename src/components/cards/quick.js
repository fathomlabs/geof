var html = require('choo/html')
var button = require('../button')

module.exports = function component(state, emit, opts) {
  var newcatch = button(state, emit, {
    classes: "w-100 mv1",
    label: 'Record a catch',
    onclick: () => emit('pushState', '/catch')
  })

  var newmeal = button(state, emit, {
    classes: "w-100 mv1",
    label: 'Record a meal',
    onclick: () => emit('pushState', '/meal')
  })

  return html`
  
  <div class="flex flex-column w-100">
    ${newcatch}
  </div>
  
  `
}