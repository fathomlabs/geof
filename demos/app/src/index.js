var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

var { moveLeft } = require('animation-toolbox')
var delay = 400

app.use(require('choo-animate')({
  animations: {
    'movein': function (el) {
      return moveLeft(el, '100%', '0%', delay)
    },
    'moveout': function (el) {
      return moveLeft(el, '0%', '100%', delay)
    }
  },
  before: 'movein',
  after: 'moveout'
}))

app.use(require('./stores/clicks'))
app.use(require('./stores/styles'))

app.route('/', require('./views/main'))
app.route('/catch', require('./views/catch'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
