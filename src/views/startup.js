var html = require('choo/html')
var { phoneify, startup } = require('../components')

var TITLE = 'GEOF'

module.exports = view

function view(state, emit) {
  console.log(state.user.setupDone)
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  if (state.user.setupDone) return emit('pushState', './home')

  var content = html`
  
  <div class="flex flex-column">
    <div class="flex overflow-auto" style="flex: 1;">
      ${startup(state, emit)}
    </div>
  </div>
  
  `

  return phoneify(content)
}

