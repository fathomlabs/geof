var html = require('choo/html')
var View = require('../stack/view')
var Stack = require('../stack/stack')

// components
var Map = require('./lakemap/map')
var Fishpicker = require('./fishpicker/fishpicker')
var size = require('./size')
// var confirm = require('./confirm')

module.exports = class NewCatch extends View {
  constructor(id, state, emit, opts) {
    var leaves = {
      wb: next => new Map('add-catch-map', state, emit, {
        points: state.data.wb,
        next: next
      }).render(),
      sp: next => new Fishpicker('add-catch-fishpicker', state, emit, {
        next: next
      }).render(),
      size: next => size(state, emit, {
        next: next
      })
      // confirm: next => confirm(state, emit, {
      //   next: next
      // })
    }

    var stack = state.cache(Stack, 'add-catch-stack', Object.values(leaves), {
      onnext: data => emit('catches:adding:update', data),
      ondone: () => emit('catches:adding:done')
    })

    opts = opts || {}
    opts.child = stack.render()

    super(id, state, emit, opts)

    this.leaves = leaves
    this.stack = stack
  }
}
