var html = require('choo/html')
var css = require('sheetify')
var Map = require('../components/map.js')

var TITLE = 'maps - main'

module.exports = view

var style = css`

.map {
  height: 80%;
}

.info {
  border-top: 4px solid #333;
  height: 20%;
  padding: 20px;
}

`

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var lakedesc = state.lakes.selected ? makelake(state.lakes.selected) : nolake()

  return html`
    <body class="code lh-copy">
      <div class="mw9 center ph2-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-half-ns pa2 vh-75">
            ${state.cache(Map, 'my-map').render(state)}
          </div>
          <div class="fl w-100 w-half-ns pa2">
            <div>${lakedesc}</div>
          </div>
        </div>
      </div>
    </body>
  `
}

function makelake (lake) {
  return html`
  
  <div class="">
    <h1 class="mt0">Fishing location selected: <em>${lake.en}</em></h1>
  </div>
  
  `
}

function nolake () {
  return html`
  
  <div class="ba b--hot-pink ph3">
    <h3>Use the map to find and select the nearest fishing location.</h3>
  </div>
  
  `
}