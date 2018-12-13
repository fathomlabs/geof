var html = require('choo/html')
var View = require('../components/stack/view')

var section = require('../components/phoneui/section')

var {
  recent,
  meals
} = require('../components/cards')

var loading = require('../components/utils/loading')

module.exports = class Home extends View {
  constructor(id, state, emit, opts) {
    opts = opts || {}
    opts.child = 'placeholder'
    super(id, state, emit, opts)
    this.finishedLoading = true
    this.needsupdate = false
  }

  load () {
    this._defineChild()
  }

  _defineChild () {
    var inner
    var rerenderAfter

    if (this.state.dataloaded) {
      var sections = [{
          title: 'Overview',
          content: meals(this.state, this.emit)
        },
        {
          title: 'Recent catches',
          content: recent(this.state, this.emit)
        }
      ]

      inner = sections.map(entry => section(this.state, this.emit, entry))
      this.needsupdate = false
      this.rerenderAfter = true
    } else {
      inner = html`
    
      <div class="flex w-100 h-100 justify-center items-center">${loading()}</div>

      `
      this.needsupdate = true
    }

    var content = html`
    
    <div class="${this.state.style.classes.main} flex flex-column w-100 h-100 items-center" style="justify-content: space-evenly;">
      ${inner}
    </div>
    
    `

    this.child = content

    if (this.rerenderAfter) {
      console.log('home is rerendering')
      this.rerender()
    }
  
    if (this.needsupdate) {
      setTimeout(() => this._defineChild(), 100)
    }
  }

  update () {
    var updatesuper = super.update()
    var needsupdate = this.state.navigator.needsupdate.home || this.needsupdate || updatesuper
    if (needsupdate) {
      this._defineChild()
      setTimeout(() => this.rerender(), 200)
    }
    this.emit('navigator:setneedsupdate', 'home', false)
    return false
  }
}

