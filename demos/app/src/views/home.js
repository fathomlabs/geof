var html = require('choo/html')

// components
var {
  section,
  navigation,
  // footer,
  button,
  form,
  setup,
  chart,
  phoneify
} = require('../components')

var {
  recent,
  meals
} = require('../components/cards')

var {
  settings
} = require('../components/phoneui/nav')

var TITLE = 'GEOF'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var sections = [
    {
      title: 'Overview',
      content: meals(state, emit)
    },
    {
      title: 'Recent catches',
      content: recent(state, emit)
    }
  ]

  var content = html`
  
  <div class="${state.style.classes.main} flex flex-column w-100 h-100">
    ${navigation(state, emit, {
      classes: `bg-${state.styleOpts.primary}`,
      style: 'flex: 0 0 auto;',
      left: null,
      middle: state.appdata.title,
      right: settings(state, emit)
    })}
    <div class="flex" style="flex: 1; min-height: 0px;">
      <div class="flex overflow-auto" style="flex: 1;">
        <div class="w-100" style="min-height: -webkit-min-content;">
          ${sections.map(entry => section(state, emit, entry))}
        </div>
      </div>
    </div>
  </div>
  
  `

  return phoneify(content)
}
