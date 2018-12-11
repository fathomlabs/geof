var steps = [
  'location',
  'fish',
  'size'
]

var init = [
  {
    "wb": {
      "name": {
        "en": "Attawapiskat River",
        "fr": "Rivière Attawapiskat"
      },
      "loc": {
        "lat": 52.9186,
        "lon": -82.4203
      },
    },
    "sp": {
      "name": { en: "Bowfin" }
    },
    size: {
      id: 35,
      text: "35-40cm"
    }
  },
  {
    "wb": {
      "name": {
        "en": "Albany River",
        "fr": "Rivière Albany"
      },
      "loc": {
        "lat": 52.2256,
        "lon": -81.6714
      },
    },
    "sp": {
      "name": { en: "Rainbow Trout" }
    },
    size: {
      id: 35,
      text: "35-40cm"
    }
  }
]

module.exports = function(state, emitter) {
  state.catches = {
    log: init,
    adding: null
  }

  var update = catchdata => {
    var adding = state.catches.adding || {}
    state.catches.adding = Object.assign(adding, catchdata)
  }

  var cancel = () => {
    state.catches.adding = null
    emitter.emit(state.events.PUSHSTATE, './')
  }

  var done = () => {
    var adding = state.catches.adding
    if (!adding) return
    state.catches.log.push(adding)
    state.catches.adding = null
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('catches:adding:cancel', cancel)
    emitter.on('catches:adding:update', update)
    emitter.on('catches:adding:done', done)
  })

}