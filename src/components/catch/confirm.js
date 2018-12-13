var html = require('choo/html')
var button = require('../button')
var svg = require('../utils/svg')

module.exports = function confirm(state, emit, opts) {
  var btn = button(state, emit, {
    classes: "w-100 mv1",
    label: 'Confirm and save',
    onclick: () => opts.next({})
  })

  var cancel = button(state, emit, {
    classes: "w-100 mv1 bg-red",
    label: 'Cancel',
    onclick: () => {
      emit('catches:adding:cancel')
    }
  })

  var location = svg(state, emit, {
    name: 'waterbody_blank'
  })

  var fish = svg(state, emit, {
    name: 'catch'
  })

  var size = svg(state, emit, {
    name: 'size'
  })

  var d = state.catches.adding

  return html`
  
  <div class="flex flex-column w-100 pa3 f4 gray bg-white">
    <h3 class="Adding catch:"></h3>
    <div class="flex flex-row w-100">${location} ${d.wb.name.en}</div>
    <div class="flex flex-row w-100">${fish} ${d.size.name.en}</div>
    <div class="flex flex-row w-100">${size} ${d.size.text}</div>
    ${btn}
  </div>

  `
}