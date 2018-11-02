var html = require('choo/html')
var { phoneify, statusbar, startup } = require('../components')

var TITLE = 'GEOF'

module.exports = view

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  if (state.appdata.setupDone) return emit('pushState', './home')

  var content = html `
  
  <div class="mainwrapper flex flex-column" style="position: absolute; height: 100%;">
    ${statusbar(`bg-${state.styleOpts.primary}`)}
    <div class="flex overflow-auto" style="flex: 1;">
      ${startup(state, emit)}
    </div>
  </div>
  
  `

  return phoneify(content)
}

