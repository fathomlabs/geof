module.exports = store

function store(state, emitter) {
  state.lakes = {
    selected: null,
    data: null,
    updatedAt: null
  }

  async function loadLakes() {
    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function json(response) {
      return response.json()
    }

    var lakes = await fetch('./assets/wbs.json').then(status).then(json)
    state.lakes.data = lakes
    state.lakes.updatedAt = Date.now()
    emitter.emit('lakes:loaded')
  }


  emitter.on('DOMContentLoaded', function () {
    loadLakes()

    emitter.on('lake:select', lake => {
      state.lakes.selected = Object.assign({}, lake)
      emitter.emit('render')
    })
  })
}
