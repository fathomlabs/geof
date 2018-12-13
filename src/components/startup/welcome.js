var html = require('choo/html')
var button = require('../button')
var section = require('../phoneui/section')

module.exports = function component(state, emit, opts) {
  var inner = html`
  
  <div>
    <h2>This app helps you and your family stay healthy when eating fish caught in Ontario</h2>
    <p>Toxic chemicals can be present in small concentrations in some lakes, rives and other water bodies. Fishing living in the water can build up high concentrations of these chemicals in their bodies.</p>
    <p>Eating a lot of fish that have high concentrations of toxins can cause health problems over time. The best way to eat wild-caught fish and stay healthy is to make sure you fish in the cleanest water and catch the fish that are least likely to contain toxins.</p>
    <p>This app helps you eat fish safely. Every time you catch a fish, record the catch in the app. The app uses data from the Ministry of the Environment, Conservation and Parks to track the toxins in the fish you catch. Then it tells you how much more fish you can safely eat each month, and recommends which of your favourite fishing spots and fish are the healthiest.</p>
    ${button(state, emit, { classes: 'w-100', label: 'Get started', onclick: opts.next })}
  </div>
  
  `

  return section(state, emit, {
    title: 'Welcome to GEOF',
    content: inner
  })
}