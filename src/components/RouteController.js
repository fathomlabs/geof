var html = require('choo/html')
var Component = require('choo/component')

var views = require('../views')

module.exports = class RouteController extends Component {
  constructor(id, state, emit, opts) {
    super(id, state, emit)
    this.id = id
    this.state = state
    this.emit = emit
    this.opts = opts || {}
    this._createViews()
  }

  _createViews () {
    this.views = []
    Object.keys(views).forEach(name => {
      var View = views[name]
      var view = this.state.cache(View, `rc-${name}-view`)
      this.views[name.toLowerCase()] = view
    })
  }

  _hideAllViews () {
    Object.values(views).forEach(view => view.hide())
  }

  _pickView () {
    if (!this.state.user.setupDone) {
      this.currentRoute = 'startup'
    } else {
      var route = this.state.params.route || this.state.params.wildcard
      this.currentRoute = route
    }

    this.currentView = this.views[this.currentRoute]

    Object.keys(this.views).forEach(name => {
      var view = this.views[name]
      if (name == this.currentRoute) {
        view.moveToTop()
      } else {
        view.moveToBottom()
      }
    })

    this.currentView.show()
  }

  createElement (opts) {
    console.log('RouteController.createElement')

    return html`

    <div class="flex ma0 pa0 items-center ${opts.classes || ''}" style="position: fixed; left: 0; top: 48px; right: 0; bottom: 0;">
      ${Object.values(this.views).map(view => view.render())}
    </div>

    `
  }

  update (opts) {
    var route = this.state.params.route || this.state.params.wildcard
    if (route !== this.currentRoute) this._pickView()
    return false
  }

  beforerender (el) {
    console.log('RouteController.beforerender')
    this._pickView()
    // maybe do something first
  }

  load () {
    // maybe do something when the component is put into the dom
  }

  unload () {
    console.log('RouteController.unload')
    // maybe do something when it's unloaded from the DOM
    // this.element = null
    this._reRouteController()
  }
}