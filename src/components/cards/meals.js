var html = require('choo/html')
var svg = require('../utils/svg')

module.exports = function meals(state, emit, opts) {
  var text
  var perc = Math.round(state.allowance.percent)
  if (perc < 51) {
    text = html`<span class="">Plenty of meals left this month</span>`
  } else if (perc < 80) {
    text = html`<span class="orange">You've had over half your safe monthly allowance</span>`
  } else if (perc < 100) {
    text = html`<span class="red">You're close to the safety limit</span>`
  } else if (perc >= 100) {
    text = html`<span class="red">WARNING!<br>You're over the safe limit for consumption</span>`
  }

  return html`

  <div class="flex flex-column w-100">
    <div class="flex flex-row justify-center items-center pb3" style="justify-items: space-around;" style="color: #fff;">
      <div class="flex flex-column w-100 justify-center items-center">
        ${svg(state, emit, { name: 'meal', backgroundColor: '#fff' })}
        <div class="flex f4 tc">
          ${text}
        </div>
      </div>
    </div>
    ${require('./gauge')(state, emit)}
  </div>

  `
}