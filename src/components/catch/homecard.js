var html = require('choo/html')
var button = require('../button')
var svg = require('../utils/svg')

module.exports = function component(state, emit, opts) {
  var ncatches = 5
  var nmeals = 6
  var stats = html`
  
  <div class="flex flex-column w-100">
    <div class="flex w-100 f3 justify-center items-center">
      you've logged
    </div>
    <div class="flex flex-row justify-center items-center" style="justify-items: space-around;">
      <div class="flex flex-column w-30 justify-center items-center">
        ${svg(state, emit, { name: 'catch' })}
        <div class="flex f3">
          ${ncatches} catches
        </div>
      </div>
      <div class="flex flex-column w-30 justify-center items-center">
        ${svg(state, emit,  { name: 'meal' })}
        <div class="flex f3">
          ${nmeals} meals
        </div>
      </div>
    </div>
    <div class="flex w-100 f3 justify-center items-center">
      in the last 30 days
    </div>
  </div>
  
  `

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
    ${stats}
    ${newcatch}
    ${newmeal}
  </div>
  
  `
}