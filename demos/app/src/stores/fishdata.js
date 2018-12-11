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

  if (typeof window !== 'undefined') {
    var fetchone = dataset => {
      var urlbase = window.location.href
        .replace(new RegExp(`${state.route}$`), '')
        .replace('/catch', '/')
        .replace('/home', '/')
      var url = `${urlbase}./assets/data/${dataset}.json.bz2`
      fetch(url)
        .then(response => response.arrayBuffer())
        .then(rawdata => {
          var buf = new Uint8Array(rawdata)
          var decoded = bunzip.decode(buf)
          var json = new TextDecoder('utf-8').decode(decoded)
          state.data[dataset] = JSON.parse(json)
          state.dataloaded = true
        })
    }

    datasets.forEach(fetchone)
  }

  emitter.on('DOMContentLoaded', function () {})
}
