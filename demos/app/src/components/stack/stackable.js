var Component = require('choo/component')
var html = require('choo/html')
var css = require('sheetify')

var style = css`

:host {
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: white;
}

`

module.exports = class Stackable extends Component {
  constructor (id, state, emit, opts) {
    super(id, state, emit)
    this.opts = Object.assign({}, opts)
    this.child = this.opts.child
    if (!this.child) throw new Error('Stackable requires child option')
    this._setup()
  }

  createElement () {
    var el = html`
    
    <div class="${style}">
      ${this.child}
    </div>

    `
    this._applyLocalStyle(el)
    return el
  }

  update () {
    this._applyLocalStyle()
    return false
  }

  _applyLocalStyle (_el) {
    var el = _el || this.element
    if (el) {
      Object.assign(el.style, this.localStyle)
    }
  }

  _updateStyle (key, value) {
    var el = this.element
    if (el) {
      el.style[key] = value
    }
    
    this.localStyle[key] = value
  }

  _handleLoad (el) {
    super._handleLoad(el)
    this._applyLocalStyle()
  }

  _setTransitions (property, duration, easing, delay) {
    var self = this
    var prefixes = [
      '-webkit-',
      '-moz-',
      '-o-',
      ''
    ]

    var map = {
      'property': property,
      'duration': duration,
      'timing-function': easing,
      'delay': delay
    }

    var setStyle = key => {
      var value = map[key]
      if (!value) return
      prefixes.forEach(prefix => {
        var styleProp = `${prefix}transition-${key}`
        self._updateStyle(styleProp, value)
      })
    }

    Object.keys(map).forEach(setStyle)
  }

  _setZIndex (value) {
    this._updateStyle('z-index', value)
  }

  _setLeft (value) {
    this._updateStyle('left', value)
  }

  show () {
    this._setLeft(0)
  }

  hideLeft () {
    this._setLeft('-100%')
  }

  hideRight () {
    this._setLeft('100%')
  }

  _setup () {
    this.localStyle = {}
    if (this.opts.start === 'hideRight') this.hideRight()
    else if (this.opts.start === 'hideLeft') this.hideLeft()
    if (this.opts.index) this._setZIndex(2000 + this.opts.index)
    this._setTransitions('all', '0.5s', 'easeInOutSine')
  }
}
