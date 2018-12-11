var html = require('choo/html')
var svg = require('../utils/svg')
var button = require('../button')

module.exports = function component(state, emit, opts) {
  return html`
  
  <div class="flex flex-column w-100">
    <div class="flex flex-row justify-center items-center pb3" style="justify-items: space-around;" style="color: #555;">
      <div class="flex flex-column w-50 justify-center items-center">
        ${svg(state, emit, { name: 'catch', backgroundColor: '#555' })}
        <div class="flex f4">
          ${initialText(state)}
        </div>
      </div>
    </div>
    ${recentCatches(state, emit)}
    ${addnew(state, emit)}
  </div>
  
  `
}

function addnew (state, emit) {
  var newcatch = button(state, emit, {
    classes: "w-100 mv1",
    label: 'add a new catch',
    onclick: () => emit('pushState', './catch')
  })
  return newcatch
}

function initialText (state) {
  return state.catches.log.length > 0
  ? `${state.catches.log.length} recent catches`
  : 'no catches recorded yet'
}

function recentCatches (state, emit) {
  if (state.catches.log.length === 0) return null
  var list = state.catches.log.reverse().slice(0, 5).map(entry => recentCatch(state, emit, entry))
  return html`
  
  <div>
    ${list}
    <div class="pa3 tc i">click a catch to add it again or...</div>
  </div>
  
  `
}

function recentCatch (state, emit, entry) {
  function cellIcon (name) {
    return svg(state, emit, {
      name: name,
      backgroundColor: '#555',
      size: '30px'
    })
  }
  var el = html`
  
  <div class="pv2 f5 bt bb b--white-60 bg-animate hover-bg-white pointer">
    <div class="flex justify-center mv1">
      ${entry.size.text} ${entry.sp.name.en} at ${entry.wb.name.en}
    </div>
  </div>
  
  `

  el.onclick = e => {
    console.log('clicked', entry)
  }

  return el
}