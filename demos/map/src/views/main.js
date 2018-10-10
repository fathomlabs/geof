var html = require('choo/html')

var TITLE = 'maps - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var lakedesc = state.lake ? makelake(state.lake) : nolake()

  return html`
    <body class="code lh-copy">
      <div id='map'></div>
      <div>${lakedesc}</div>
    </body>
  `
}

function makelake () {
  return html`
  
  <div class="">
    ${state.lake}
  </div>
  
  `
}

function nolake () {
  return html`
  
  <div class="ba b--hot-pink">
    <h3>No lake has been selected yet</h3>
  </div>
  
  `
}