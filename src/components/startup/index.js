var html = require('choo/html')
var View = require('../stack/view')
var Stack = require('../stack/stack')

var welcome = require('./welcome')
var setup = require('./setup')

module.exports = class Startup extends View {
  constructor(id, state, emit, opts) {
    var leaves = [
      next => welcome(state, emit, { next }),
      next => setup(state, emit, { next })
    ]

    var stack = state.cache(Stack, 'startup-stack', leaves, {
      done: () => {
        console.log('startup stack completed')
      }
    })

    opts = opts || {}
    opts.child = stack.render()

    super(id, state, emit, opts)

    this.leaves = leaves
    this.stack = stack
  }
}
