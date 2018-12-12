var html = require('choo/html')

module.exports = navigation

function navigation(state, emit, opts) {
  var left = html`<div class="w-30 f4 ph2">${opts.left}</div>`
  var middle = html`<div class="w-40 f3 tc justify-center">${opts.middle}</div>`
  var right = html`<div class="w-30 f4 ph2 tr">${opts.right}</div>`

  return html`
  
  <div class="flex w-100 ma0 pa0 f2 white items-center ${opts.classes || ''}" style="position: absolute; top: 0; left: 0; height: 48px; ${opts.style || ''}">
    ${left}
    ${middle}
    ${right}
  </div>
  
  `
}
