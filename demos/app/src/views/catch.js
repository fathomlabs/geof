var html = require('choo/html')
var css = require('sheetify')

// components
var {
  section,
  navigation,
  navbutton,
  statusbar,
  button,
  Map,
  Fishpicker,
  phoneify
} = require('../components')

var back = require('../components/phoneui/nav/back')

var Stack = require('../components/stack/stack')

var TITLE = 'src - main'

var baseStyle = css`

:host {
  margin-left: 100%;
  transition: all 0.5s linear;
}

`

var showStyle = css`

:host {
  margin-left: 0;
}

`

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  var steps = [
    next => state.cache(Map, 'my-map', {
      points: state.data.wb,
      next: next
    }).render(),
    next => state.cache(Fishpicker, 'my-fishpicker', {
      next: next
    }).render()

  ]
  var stack = state.cache(Stack, 'my-stack', steps, {}).render()
  
  var content = html`
  
  <div class="flex flex-column">
    ${statusbar(`bg-${state.styleOpts.primary}`)}
    ${navigation(state, emit, {
      classes: `bg-${state.styleOpts.primary}`,
      left: back(state, emit),
      middle: 'New catch',
      right: null
    })}
    <div class="" style="display: block; position: absolute; left: 0; top: 92px; bottom: 0; right: 0;">
      ${stack}
    </div>
  </div>
  
  `

  return phoneify(content)
}

function recentlocations (state, emit) {
  return state.catches.recentlocations ? html`
  
  <div class="flex flex-column" style="flex-grow: 0;">
    <h3>Recent locations:</h3>
    <div class="flex flex-column">
      <div>one</div>
      <div>two</div>
      <div>three</div>
    </div>
  </div>  
  
  ` : null
}