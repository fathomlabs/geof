require('isomorphic-fetch')
var css = require('sheetify')
var choo = require('choo')

css('tachyons')

css`

body {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: none;
}

`

var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
  app.use(require('choo-persist')())
}

app.use(require('./stores/app'))
app.use(require('./stores/user'))
app.use(require('./stores/navigator'))
app.use(require('./stores/allowance'))
app.use(require('./stores/fishdata'))
app.use(require('./stores/catches'))
app.use(require('./stores/styles'))

app.route('/', require('./views/startup'))
app.route('/startup', require('./views/startup'))
app.route('/home', require('./views/home'))
app.route('/settings', require('./views/settings'))
app.route('/catch', require('./views/catch'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
