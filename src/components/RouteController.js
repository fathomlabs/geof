var html = require('choo/html')
var Component = require('choo/component')

module.exports = class RouteController extends Component {
  constructor(id, state, emit, children, opts) {
    super(id, state, emit)
    if (!children) throw new Error('RouteController requires children to be passed')
    this.id = id
    this.state = state
    this.emit = emit
    this.children = children
    this.opts = opts || {}
  }

  _nextCallback(i) {
    var self = this
    return (data) => {
      if (self.opts.onnext) {
        self.opts.onnext(data)
      }
      // self.leaves[i].hide()
      var nextleaf = self.leaves[i + 1]
      if (nextleaf) {
        nextleaf.show()
      } else {
        self._allStepsDone()
      }
    }
  }

  createElement() {
    var self = this
    this.leaves = this.children.map((childfn, i) => {
      var opts = {
        child: childfn(this._nextCallback(i)),
        start: (i > 0) ? 'hideRight' : null,
        index: i
      }
      var id = `${self.id}-leaf-${i}`
      var leaf = self.state.cache(RouteControllerable, id, opts)
      return leaf
    })

    var el = html `

    <div class="w-100 h-100 ${this.opts.classes || ''}" style="position: absolute; top: 0; left: 0;">
      ${this.leaves.map(leaf => leaf.render())}
    </div>

    `
    return el
  }

  update(opts) {
    console.log('RouteController.update')
    return false
  }

  beforerender(el) {
    console.log('RouteController.beforerender')
    // maybe do something first
  }

  load() {
    // maybe do something when the component is put into the dom
  }

  unload() {
    console.log('RouteController.unload')
    // maybe do something when it's unloaded from the DOM
    // this.element = null
    this._reRouteController()
  }

  _reRouteController() {
    this.leaves.forEach(leaf => {
      leaf.hideRight()
    })
    this.leaves[0].show()
  }

  _allStepsDone() {
    console.log('RouteController.allStepsDone')
    if (this.opts.ondone) {
      this.opts.ondone()
    }
    this._reRouteController()
    this._reset()
    this.emit('pushState', '/home')
  }
}