var html = require('choo/html')
var button = require('../button')
var section = require('../phoneui/section')

module.exports = function component(state, emit, opts) {
  var inner = html`
  
  <div>
    <h2>This app helps you and your family stay healthy when eating fish caught in Ontario.</h2>
    <p>Some toxic chemicals are present in harmless concentrations in lakes, rives and other water bodies. Some fish naturally build up high concentrations of these chemicals in their bodies. This means that eating too much of some kinds of fish over time can cause health issues. This app helps you keep track of your catches and ensure you eat fish safely.</p>
    ${button(state, emit, { classes: 'w-100', label: 'Get started', onclick: opts.next })}
  </div>
  
  `

  var wrapper = section(state, emit, {
    title: 'Welcome to GEOF',
    content: inner
  })

  var outer = html`

  <div class="w-100 h-100 flex flex-column bg-gray" style="min-height: -webkit-min-content; align-content: center; justify-content: center;">
    ${wrapper}
  </div>
  
  `
  return outer
}