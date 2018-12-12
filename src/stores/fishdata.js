module.exports = store

var bunzip = require('seek-bzip')

var datasets = [
  'wb', // waterbodies
  'spp', // species
  'pops', // populations
  'causes',
  'adv' // advisories
]

function store(state, emitter) {
  state.data = {}

  var total = datasets.length
  var done = 0
  var maybeAllDone = () => {
    if (total === done) {
      state.dataloaded = true
      emitter.emit('fishdata:all:loaded')
      if (state.route === '#home') emitter.emit('navigator:render')
    }
  }

  emitter.on('DOMContentLoaded', function () {
    if (typeof window !== 'undefined') {
      var fetchone = dataset => {
        var url = `/assets/data/${dataset}.json.bz2`
        fetch(url)
          .then(response => response.arrayBuffer())
          .then(rawdata => {
            var buf = new Uint8Array(rawdata)
            var decoded = bunzip.decode(buf)
            var json = new TextDecoder('utf-8').decode(decoded)
            state.data[dataset] = JSON.parse(json)
            emitter.emit(`fishdata:${dataset}:loaded`)
            done += 1
            maybeAllDone()
          })
      }

      datasets.forEach(fetchone)
    }
  })
}
