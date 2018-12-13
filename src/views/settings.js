var View = require('../components/stack/view')

var setup = require('../components/startup/setup')

var loading = require('../components/utils/loading')

module.exports = class Home extends View {
  constructor(id, state, emit, opts) {
    opts = opts || {}
    opts.child = setup(state, emit)
    super(id, state, emit, opts)
  }
}
