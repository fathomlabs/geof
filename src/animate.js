var {
  moveLeft,
  moveRight,
  fadeOut
} = require('animation-toolbox')

var delay = 400

var opts = {
  animations: {
    movein: function (el) {
      return moveRight(el, '100%', '0%', delay)
    },
    moveout: fadeOut
  },
  before: 'movein'
}

module.exports = require('choo-animate')(opts)