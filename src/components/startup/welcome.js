var html = require('choo/html')
var button = require('../button')
var section = require('../phoneui/section')

module.exports = function component(state, emit, opts) {
  var inner = html`
  
  <div>
    <h2>Hello and welcome to the GEOF app!</h2>
    <h4>The app that helps you and your family stay healthy when eating fish caught in Ontario.</h4>
    <p>You see, toxic chemicals can be present in our air and waters. Unfortunately, the chemicals in our lakes and rivers can get into the fish that live there.</p>
    <p>Over time, if we eat a lot of fish with toxins in them, it can be harmful to our health.</p>
    <p>GEOF helps you monitor this. The app uses data from the Ministry of the Environment, Conservation and Parks to track the toxins in the fish you catch. Then it tells you how much more fish you can safely eat each month, and recommends which of your favourite fishing spots and fish are the healthiest.</p>
    <p>Let's get started. Happy fishing!</p>
    ${button(state, emit, { classes: 'w-100', label: 'Get started', onclick: opts.next })}
  </div>
  
  `

  return section(state, emit, {
    title: 'Welcome to GEOF',
    content: inner
  })
}