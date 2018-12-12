var html = require('choo/html')

// components
var {,
  navigation,
} = require('../components')
var loading = require('../components/utils/loading')

var TITLE = 'GEOF'

module.exports = view

function view(state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var inner

  if (state.dataloaded) {
    var sections = [{
        title: 'Overview',
        content: meals(state, emit)
      },
      {
        title: 'Recent catches',
        content: recent(state, emit)
      }
    ]

    inner = sections.map(entry => section(state, emit, entry))
  } else {
    inner = html `
    
    <div class="flex w-100 h-100 justify-center items-center">${loading()}</div>

    `
  }

  var content = html `
  
  <body class="roboto fw4 mid-gray" style="height: 100vh; background: black;">
    ${state.cache(Navigation, 'persistent-nav')}
    ${state.cache(RouteController, 'route-controller')}
  </body>
  
  `

  return phoneify(content)
}
