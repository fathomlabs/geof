var Component = require('choo/Component')
var html = require('choo/html')
var input = require('../../form/input')
var button = require('../../button')
var SearchableInput = require('../../searchableinput')
var Popover = require('../../utils/popover')
var css = require('sheetify')
css('../../searchableinput/searchable-input.css')

var { section, form } = require('../..')

var style=""

module.exports = class FishPicker extends Component {
  constructor(id, state, emit, opts) {
    super(id, state, emit)
    this.state = state
    this.emit = emit
    this.opts = Object.assign({}, opts)
    this.next = opts.next
  }

  createElement () {
    this._createControls()
    var self = this
    var el = html`
    
    <div class="h-100">
      ${this.controls.render()}
    </div>
    
    `

    var tryLoading = () => {
      if (!self.state.data || !self.state.data.spp) {
        return setTimeout(tryLoading, 200)
      }

      var inner = html`
      
      <div class="flex flex-column h-100 ${style}" style="align-content: space-between;">
        <input name="fish_search" placeholder="enter a fish name" />
      </div>
      
      `
      
      var searchableInput = new SearchableInput(
        inner,
        [{
          name: '',
          items: Object.values(self.state.data.spp).map((f, i) => {
            return {
              id: i,
              name: f.name.en,
              keywords: f.name.en.split(' ').concat(f.name.fr.split(' '))
            }
          })
        }],
        {
          inputName: 'fish_search',
          inputValueKey: 'name'
        }
      )

      searchableInput.on('select', function(value) {
        self.selected = value
        self._showControls()
      });

      searchableInput.on('change', function(value) {
        console.log('changed', value)
      });

      var submit = html`<button class="ba br1 pa2 w-100 dark-gray bg-white hover-bg-light-gray hover-white">Select</button>`

      el.appendChild(inner)
    }

    tryLoading()

    return el
  }

  update() {
    return false
  }

  _createControls() {
    this.controls = this.state.cache(Popover, 'fishpicker-controls-popover')
  }

  _showControls() {
    if (!this.selected) return
    var self = this
    var confirm = button(self.state, self.emit, {
      label: 'yes',
      classes: 'w-40',
      onclick: () => {
        self.next({
          sp: self.selected.item
        })
      }
    })
    var cancel = button(self.state, self.emit, {
      label: 'no',
      classes: 'w-40',
      onclick: () => self._dismissControls()
    })
    var controlcontent = html `
      
      <div class="flex flex-column f3" style="justify-content: center;">
        <div><p class="pv1">Did you catch a ${this.selected.item.name}?</p></div>
        <div class="flex flex-row" style="justify-content: space-evenly;">${confirm}${cancel}</div>
      </div>

      `
    this.controls.show({
      content: controlcontent
    })
  }

  _dismissControls() {
    this.controls.hide()
  }

}