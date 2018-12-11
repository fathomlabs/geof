require('isomorphic-fetch')
var css = require('sheetify')
var choo = require('choo')
var persist = 

css('tachyons')
var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
  app.use(require('choo-persist')())
}

app.use(require('./stores/app'))
app.use(require('./stores/user'))
app.use(require('./stores/fishdata'))
app.use(require('./stores/catches'))
app.use(require('./stores/allowance'))
app.use(require('./stores/styles'))
app.use(require('./stores/clicks'))

app.route('/', require('./views/startup'))
app.route('/home', require('./views/home'))
app.route('/settings', require('./views/settings'))
app.route('/catch', require('./views/catch'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
