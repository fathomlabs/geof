var html = require('choo/html')
var svg = require('../utils/svg')

module.exports = function meals(state, emit, opts) {
  var text
  var perc = state.allowance.percent
  if (perc < 51) {
    text = html`<span class="">plenty of meals left this month</span>`
  } else if (perc < 80) {
    text = html`<span class="orange">you've had over half your monthly fish allowance</span>`
  } else if (perc < 100) {
    text = html`<span class="red">you're close to the safety limit</span>`
  } else if (perc >= 100) {
    text = html`<span class="red">WARNING!<br>you're over the safe limit for fish consumption</span>`
  }

  return html`

  <div class="flex flex-column w-100">
    <div class="flex flex-row justify-center items-center pb3" style="justify-items: space-around;" style="color: #555;">
      <div class="flex flex-column w-100 justify-center items-center">
        ${svg(state, emit, { name: 'meal', backgroundColor: '#555' })}
        <div class="flex f4 tc">
          ${text}
        </div>
      </div>
    </div>
    ${require('./gauge')(state, emit)}
  </div>

  `
}