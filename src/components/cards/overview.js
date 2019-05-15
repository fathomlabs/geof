var html = require('choo/html')
var svg = require('../utils/svg')

module.exports = function component(state, emit, opts) {
  var ncatches = 5
  var nmeals = 6
  var stats = html`
  
  <div class="flex flex-column w-100">
    <div class="flex flex-row justify-center items-center mv3" style="justify-items: space-around;" style="color: #5BA8EF;">
      <div class="flex flex-column w-50 justify-center items-center">
        ${svg(state, emit,  { name: 'meal', backgroundColor: '#f4f4f4' })}
        <div class="flex f4">
          meals remaining
        </div>
      </div>
    </div>
    <div class="flex w-100 f5 justify-center items-center i">
      in the last 30 days
    </div>
  </div>
  
  `

  return html`
  
  <div class="flex flex-column w-100 white">
    ${stats}
  </div>
  
  `
}