require('babel-polyfill')
var css = require('sheetify')
var choo = require('choo')

css('tachyons')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/map'))
app.use(require('./stores/lake'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/main'))

module.exports = app.mount('body')
