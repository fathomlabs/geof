var html = require('choo/html')
var Component = require('choo/component')
var Stackable = require('./stackable')

module.exports = class Stack extends Component {
  constructor (id, state, emit, children, opts) {
    super(id, state, emit)
    if (!children) throw new Error('Stack requires children to be passed')
    this.id = id
    this.state = state
    this.emit = emit
    this.children = children
    this.opts = opts || {}
  }

  _nextCallback (i) {
    var self = this
    return (data) => {
      if (self.opts.onnext) {
        self.opts.onnext(data)
      }
      // self.leaves[i].hide()
      var nextleaf = self.leaves[i+1]
      if (nextleaf) {
        nextleaf.show()
      } else {
        self._allStepsDone()
      }
    }
  }

  createElement () {
    var self = this
    this.leaves = this.children.map((childfn, i) => {
      var opts = {
        child: childfn(this._nextCallback(i)),
        start: (i > 0) ? 'hideRight' : null,
        index: i
      }
      var id = `${self.id}-leaf-${i}`
      var leaf = self.state.cache(Stackable, id, opts)
      return leaf
    })

    return html`
      <div class="flex w-100 h-100 ${this.opts.classes || ''}" style="position: relative;">
        ${this.leaves.map(leaf => leaf.render())}
      </div>
    `
  }

  update (opts) {
    return false
  }

  beforerender (el) {
    // maybe do something first
  }

  load () {
    // maybe do something when the component is put into the dom
  }

  unload () {
    // maybe do something when it's unloaded from the DOM
    // this.element = null
    this._reset()
  }

  _restack () {
    this.leaves.forEach(leaf => {
      leaf.hideRight()
    })
    this.leaves[0].show()
  }

  _allStepsDone () {
    if (this.opts.ondone) {
      this.opts.ondone()
    }
    this._restack()
    this._reset()
    this.emit('pushState', '/home')
  }
}