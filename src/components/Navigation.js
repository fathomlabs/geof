var html = require('choo/html')
var Component = require('choo/component')
var deepEqual = require('deep-equal')

var { back, settings } = require('./phoneui/nav')

module.exports = class Navbar extends Component {
  constructor (id, state, emit) {
    super(id, state, emit)
    this.state = state
    this.emit = emit
  }

  createElement (opts) {
    var { left, middle, right } = this._generateParts(opts)

    return html`
    
    <div class="flex w-100 ma0 pa0 f2 white items-center ${opts.classes || ''}" style="position: fixed; top: 0; left: 0; height: 48px; ${opts.style || ''}">
      ${left}
      ${middle}
      ${right}
    </div>
    
    `
  }

  _generateParts (opts) {
    var left = html`<div class="w-30 f4 ph2">${this._leftPart(opts)}</div>`
    var middle = html`<div class="w-40 f3 tc justify-center">${this._middlePart(opts)}</div>`
    var right = html`<div class="w-30 f4 ph2 tr">${this._rightPart(opts)}</div>`
    return { left, middle, right }
  }

  _leftPart (opts) {
    var key = opts.left
    if (!key) return null
    if (key === 'back') return back(this.state, this.emit)
  }

  _middlePart (opts) {
    return opts.middle
  }

  _rightPart (opts) {
    var key = opts.right
    if (!key) return null
    if (key === 'settings') return settings(this.state, this.emit)
  }

  update (opts) {
    if (opts.needsUpdate) {
      this.emit('navbar:updated')
      return true
    }
    return false
  }

  load () {
    // maybe do something when the component is put into the dom
  }

  unload () {
    // maybe do something when it's unloaded from the DOM
  }
}