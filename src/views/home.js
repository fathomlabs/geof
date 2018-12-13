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
    this.needsUpdate = false
  }

  load () {
    this._defineChild()
    this.rerender()
  }

  beforeRender () {
    _defineChild()
    super.beforeRender()
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
      this.needsUpdate = false
      this.rerenderAfter = true
    } else {
      inner = html`
    
      <div class="flex w-100 h-100 justify-center items-center">${loading()}</div>

      `
      this.needsUpdate = true
    }

    var content = html`
    
    <div class="${this.state.style.classes.main} flex flex-column w-100 h-100 justify-around items-center">
      ${inner}
    </div>
    
    `

    this.child = content

    if (this.rerenderAfter) {
      this.rerender()
    }
  
    if (this.needsUpdate) {
      setTimeout(() => this._defineChild(), 100)
    }
  }

  update () {
    var updateSuper = super.update()
    return this.needsUpdate || updateSuper
  }
}

