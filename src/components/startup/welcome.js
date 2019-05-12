var html = require('choo/html')
var button = require('../button')
var section = require('../phoneui/section')

module.exports = function component(state, emit, opts) {
  var inner = html`
  
  <div>
    <h2>Hello! Welcome to G.E.O.F. – the app that helps you and your family safely enjoy the healthy benefits of eating fish caught in Ontario.
    </h2>
    <p>Fresh-caught fish is a healthy food, packed with nutrients and heart-healthy fats. However, contaminants in the land and water can sometimes make their way into the fish that we eat. To reduce your exposure to these contaminants, try to choose smaller fish, avoid eating the organs of fish, and avoid eating the eggs of fatty fish such as salmon and trout. </p>
    <p>The G.E.O.F. app can also help you track the fish that you’re eating. This app uses data from the Ontario Ministry of the Environment, Conservation and Parks. As you add the fish that you catch and eat to the app, the app automatically calculates whether you are still safely within the monthly consumption guidelines, making it easier to ensure that you are safely enjoying all of the healthy benefits of eating fish! </p>
    <p>Let’s get started. Happy fishing! </p>
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