var html = require('choo/html')
var View = require('../components/stack/view')

var {
  section
} = require('../components')

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

  beforeRender () {
    _defineChild()
  }

  _defineChild () {
    var inner

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
      this.needsUpdate = true
    } else {
      inner = html `
    
      <div class="flex w-100 h-100 justify-center items-center">${loading()}</div>

      `
      this.needsUpdate = false
    }

    var content = html `
    
    <div class="${this.state.style.classes.main} flex flex-column w-100 h-100">
      ${inner}
    </div>
    
    `

    this.child = content
  }

  update () {
    var updateSuper = super.update()
    return this.needsUpdate || updateSuper
  }
}

