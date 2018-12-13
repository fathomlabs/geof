var html = require('choo/html')
var css = require('sheetify')

var bodystyle = css`

:host {
  background: #a9e4f7;
  background: -moz-linear-gradient(-45deg, #a9e4f7 34%, #0fb4e7 59%);
  background: -webkit-linear-gradient(-45deg, #a9e4f7 34%,#0fb4e7 59%);
  background: linear-gradient(135deg, #a9e4f7 34%,#0fb4e7 59%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#a9e4f7', endColorstr='#0fb4e7', GradientType=1);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

`

// components
var {
  Navigation,
  RouteController
} = require('../components')

var TITLE = 'GEOF'

module.exports = view

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
  
  <body class="avenir mid-gray ${bodystyle}">
    ${state.cache(Navigation, 'persistent-nav').render(state.navigation)}
    ${state.cache(RouteController, 'persistent-route-controller').render(state.navigation)}
  </body>
  
  `
}
