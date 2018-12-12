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
  phoneify,
  size
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
  var steps = {
    wb: next => new Map('my-map', state, emit, {
      points: state.data.wb,
      next: next
    }).render(),
    sp: next => new Fishpicker('my-fishpicker', state, emit, {
      next: next
    }).render(),
    size: next => size(state, emit, {
      next: next
    })
  }

  if (state.catches.adding) {
    Object.keys(steps).forEach(key => {
      if (state.catches.adding.hasOwnProperty(key)) {
        delete steps[key]
      }
    })
  }

  var stack = state.cache(Stack, 'my-stack', Object.values(steps), {
    onnext: data => emit('catches:adding:update', data),
    ondone: () => emit('catches:adding:done')
  }).render()
  
  var content = html`
  
  <div class="flex flex-column">
    ${navigation(state, emit, {
      classes: `bg-${state.styleOpts.primary}`,
      left: back(state, emit),
      middle: 'New catch',
      right: null
    })}
    <div class="" style="position: absolute; top: 48px; left: 0; bottom: 0; right: 0;">
      ${stack}
    </div>
  </div>
  
  `

  return phoneify(content)
}
