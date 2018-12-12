module.exports = function (state, emitter) {
  state.allowance = {
    advisories: {
      normal: [],
      sensitive: []
    },
    safety: {
      total: 0,
      nsafe: 0
    },
    percent: 0
  }

  var updatetotal = () => state.allowance.safety.total += 1
  var updatesafe = () => state.allowance.safety.nsafe += 1

  function update () {
    state.catches.log.forEach(c => {
      updatetotal()
      var key = `${c.wb.id}:${c.sp.id}:${c.size.id}`
      var advs = state.data.adv[key]
      if (!advs) return updatesafe()
      advs.forEach(adv => {
        var advsensitive = adv.pop === 2
        state.allowance.advisories[advsensitive ? 'sensitive' : 'normal'].push(adv)
        var usersensitive = state.user.pregnant || !(state.user.over16)
        if (usersensitive === advsensitive) {
          state.allowance.percent += (100 / adv.level)
        }
      })
    })
    if (state.route !== '/') emitter.emit('render')
  }

  emitter.on('DOMContentLoaded', function () {
    emitter.on('allowance:update', update)
    emitter.on('fishdata:all:loaded', function () {
      update()
    })
  })
}