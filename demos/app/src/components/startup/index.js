var html = require('choo/html')
var Stack = require('../stack').stack

var welcome = require('./welcome')
var setup = require('./setup')

module.exports = function (state, emit, opts) {
  var leaves = [
    next => welcome(state, emit, { next }),
    next => setup(state, emit, { next })
  ]
  var stack = state.cache(Stack, 'welcome-stack', leaves, {
    done: () => {
      console.log('startup stack completed')
    }
  })

  return html`
  
  <div class="w-100 h-100 bg-white flex flex-column" style="justify-content: center; align-content: center;">
    ${stack.render()}
  </div>

  `
}