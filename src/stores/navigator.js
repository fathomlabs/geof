var html = require('choo/html')

module.exports = store

var blockedroutes = [
  'startup',
  'catch'
]

var navstates = {
  startup: { left: null, middle: 'G.E.O.F', right: null },
  home: { left: null, middle: 'G.E.O.F', right: 'settings' },
  newcatch: { left: 'back', middle: 'Add a catch', right: null },
  settings: { left: 'back', middle: 'Settings', right: null }
}

function store(state, emitter) {
  state.navigator = {
    blocked: false,
    needsupdate: {}
  }

  state.navigation = {
    classes: 'bg-' + state.styleOpts.primary,
    left: null,
    middle: 'G.E.O.F',
    right: null
  }

  var setneedsupdate = (name, value) => {
    console.log('view', name, value ? 'does' : 'does not', 'need update')
    state.navigator.needsupdate[name] = value
  }

  var routeisblocked = route => {
    route = route || state.route
    if (!route) return false
    return blockedroutes.indexOf(route) > -1
  }

  var isblocked = loc => {
    return state.navigator.blocked || routeisblocked()
  }

  var render = () => {
    if (isblocked()) return emitter.emit('navigator:renderblocked')
    emitter.emit(state.events.RENDER)
  }

  var splash = () => {
    var next = state.user.setupDone ? '/home' : '/startup'
    emitter.emit('pushState', next)
  }

  var block = () => state.navigator.blocked = true
  var unblock = () => state.navigator.blocked = false

  var setnavstate = newstate => Object.assign(state.navigation, newstate)

  var goto = () => {
    var route = state.params.route || state.params.wildcard

    // update state route record
    state.route = route

    // update navbar state
    var newnav = navstates[route]
    if (!newnav) throw new Error('there is no navbar state for the route: ' + route)
    setnavstate(newnav)
    state.navigation.needsUpdate = true

    // update render blocking
    state.navigator.blocked = routeisblocked(route)

    render()
  }

  var navbarupdated = () => state.navigation.needsUpdate = false
  
  emitter.on('DOMContentLoaded', function () {
    emitter.on('navigator:render', render)
    emitter.on('navigator:splash', splash)
    emitter.on('navigator:block', block)
    emitter.on('navigator:unblock', unblock)
    emitter.on('navigator:setneedsupdate', setneedsupdate)
    emitter.on('navbar:updated', navbarupdated)
    emitter.on('navigate', goto)
  })
}
