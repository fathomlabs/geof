var steps = [
  'location',
  'fish',
  'size'
]

var init = [
  {
    "size": {
      "id": 35,
      "text": "35-40cm"
    },
    "sp": {
      "id": 5,
      "name": {
        "en": "Coho Salmon",
        "fr": "Saumon coho"
      }
    },
    "wb": {
      "name": {
        "en": "Sowden Lake",
        "fr": "Lac Sowden"
      },
      "loc": {
        "lat": 49.5492,
        "lon": -91.1975
      },
      "id": "49329111"
    }
  },
  {
    "wb": {
      "name": {
        "en": "Winisk River",
        "fr": "Rivière Winisk"
      },
      "loc": {
        "lat": 55.2681,
        "lon": -85.1169
      },
      "id": "55178505"
    },
    "sp": {
      "id": "80",
      "name": {
        "en": "Brook Trout",
        "fr": "Truite mouchetée"
      }
    },
    "size": {
      "id": 40,
      "text": "40-45cm"
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
    emitter.emit(state.events.PUSHSTATE, '#home')
  }

  var done = () => {
    var c = state.catches.adding
    if (!c) return
    emitter.emit('allowance:update')
    var key = `${c.wb}:${c.sp}:${c.size}`

    // check if this catch has advisories
    var adv = state.data.adv[key]
    c.key = key
    c.adv = adv

    // log it and cleanup
    state.catches.log.push(c)
    state.catches.adding = null
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('catches:adding:cancel', cancel)
    emitter.on('catches:adding:update', update)
    emitter.on('catches:adding:done', done)
  })

}