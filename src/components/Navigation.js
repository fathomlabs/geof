var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Navbar extends Component {
  constructor (id, state, emit) {
    super(id, state, emit)
    this.state = state
    this.emit = emit
  }

  _rebuild () {

  }

  createElement () {
    var left = html`<div class="w-30 f4 ph2">${opts.left}</div>`
    var middle = html`<div class="w-40 f3 tc justify-center blue">${opts.middle}</div>`
    var right = html`<div class="w-30 f4 ph2 tr">${opts.right}</div>`

    return html`
    
    <div class="flex w-100 ma0 pa0 f2 blue items-center ${opts.classes || ''}" style="position: absolute; top: 0; left: 0; height: 48px; ${opts.style || ''}">
      ${left}
      ${middle}
      ${right}
    </div>
    
    `
  }

  update (opts) {
    return false
  }

  load () {
    // maybe do something when the component is put into the dom
  }

  unload () {
    // maybe do something when it's unloaded from the DOM
  }
}