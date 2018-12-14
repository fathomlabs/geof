var html = require('choo/html')
var svg = require('../utils/svg')
var button = require('../button')
// var getscale = require('../../lib/advisoryscale')

module.exports = function component(state, emit, opts) {
  return html`
  
  <div class="flex flex-column w-100">
    <div class="flex flex-row justify-center items-center pb3" style="justify-items: space-around;" style="color: #555;">
      <div class="flex flex-column w-50 justify-center items-center">
        ${svg(state, emit, { name: 'catch', backgroundColor: '#555' })}
        <div class="flex f4 tc">
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
    onclick: () => emit('pushState', '/newcatch')
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

  // var scale = getscale()

  function recentCatch (state, emit, entry) {
    // var geticon = level => {
    //   console.log(scale.pointcolour(adv.level).toString())
    //   return svg(state, emit, {
    //     name: 'exclamation',
    //     backgroundColor: scale.pointcolour(adv.level).toString(),
    //     size: '30px'
    //   })
    // }

    // var icon = null

    // var maybeicon = adv => {
    //   var usersensitive = state.user.pregnant || !(state.user.over16)
    //   var advsensitive = adv.pop === 2
    //   if (usersensitive === advsensitive) {
    //     icon = geticon(adv.level)
    //   }
    //   console.log(adv, icon)
    // }

    // var adv = entry.adv || state.data.adv[`${entry.wb.id}:${entry.sp.id}:${entry.size.id}`]
    // if (adv) {
    //   adv.forEach(maybeicon)
    // }

    var el = html`
    
    <div class="pv2 f5 bt bb b--white-60 bg-animate hover-bg-white pointer">
      <div class="flex flex-row mv1">
        ${entry.size.text} ${entry.sp.name.en} at ${entry.wb.name.en}
      </div>
    </div>
    
    `

    el.onclick = e => {
      console.log('clicked', entry)
    }

    return el
  }

  var list = state.catches.log.reverse().slice(0, 5).map(entry => recentCatch(state, emit, entry))
      // <!-- <div class="w-100 h1">${scale.legend.el}</div> -->
      // <!-- <div class="pa3 tc i">click a catch to add it again or...</div> -->
  return html`
  
  <div class="pb3">
    ${list}
  </div>
  
  `
}