var html = require('choo/html')
var {
  phoneify,
  setup
} = require('../components')

var TITLE = 'GEOF'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var next = () => emit('pushState', '/home')

  var content = html`
  
  <div class="mainwrapper flex flex-column" style="position: absolute; height: 100%;">
    <div class="flex overflow-auto" style="flex: 1;">
      ${setup(state, emit, { next })}
    </div>
  </div>
  
  `

  return phoneify(content)
}
