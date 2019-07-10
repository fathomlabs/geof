var html = require('choo/html')

// components
var {,
  Navigation,
  RouteController
} = require('../components')

var TITLE = 'GEOF'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var inner

  return html`
  
  <body class="roboto fw4 mid-gray vh-100 bg-white">
    ${state.cache(Navigation, 'persistent-nav')}
    ${state.cache(RouteController, 'route-controller', { style: { top: '48px;' }})}
  </body>
  
  `
}
