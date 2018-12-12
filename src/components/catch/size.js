var html = require('choo/html')

var sizes = [
  { id: 15, text: "15-20cm" },
  { id: 20, text: "20-25cm" },
  { id: 25, text: "25-30cm" },
  { id: 30, text: "30-35cm" },
  { id: 35, text: "35-40cm" },
  { id: 40, text: "40-45cm" },
  { id: 45, text: "45-50cm" },
  { id: 50, text: "50-55cm" },
  { id: 55, text: "55-60cm" },
  { id: 60, text: "60-65cm" },
  { id: 65, text: "65-70cm" },
  { id: 70, text: "70-75cm" },
  { id: 75, text: ">75cm" }
]

module.exports = function sizepicker(state, emit, opts) {
  var option = d => {
    var clicked = e => {
      opts.next({
        size: d
      })
    }
    var el = html`<div class="pa3 bg-white bb b--light-gray bg-animate hover-bg-white pointer w-100 ">${d.text}</div>`
    el.onclick = clicked
    return el
  }

  return html`
  
  <div class="flex flex-column w-100 pa3 f4 gray roboto">
    ${sizes.map(option)}
  </div>

  `
}