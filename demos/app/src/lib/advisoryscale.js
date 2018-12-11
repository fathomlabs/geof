var getscale = require('./gradientscale')

module.exports = function () {
  var ticks = [1, 2, 4, 8, 12, 16, 32, 0].reverse()
  var domain = d => {
    return (d === 0) ? 0 : (1 / d)
  }

  var scale = getscale({
    ticks,
    domain
  })

  return scale
}