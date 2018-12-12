var html = require('choo/html')
var css = require('sheetify')
var { phoneify } = require('../components')
var TITLE = 'GEOF'

var style = css`

:host {
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(/assets/splash.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

`

module.exports = view

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = html`
  
  <div class="flex flex-column">
    <div class="flex h-100 w-100 overflow-hidden ${style}">
    </div>
  </div>
  
  `

  return phoneify(content)
}
