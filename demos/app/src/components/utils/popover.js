var Component = require('choo/component')
var html = require('choo/html')

var css = require('sheetify')

var baseStyle = css`

:host {
  border-top: 1px solid #ddd;
  background: white;
  height: 0;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  -webkit-transition: height 0.5s; 
  -moz-transition: height 0.5s; 
  -ms-transition: height 0.5s; 
  -o-transition: height 0.5s; 
  transition: height 0.5s;  
}


`

var hiddenStyle = css`

:host {
  height: 0;
}

`

module.exports = class Popover extends Component {
  constructor(id, state, emit, opts) {
    super(id, state, emit, opts)
    this.opts = Object.assign({
      classes: [baseStyle],
      style: '',
      content: null
    }, opts)
  }

  createElement () {
    return html `
    
    <div class="${this.opts.classes.join(' ')}" style="${this.opts.style}">
      ${this.opts.content}
    </div>
    
    `
  }

  update () {
    return false
  }

  show (opts) {
    Object.assign(this.opts, opts)
    if (!opts.style) {
      this.opts.style += 'height: 200px;'
    }
    this.rerender()
  }

  hide() {
    // TODO: make this less messy
    this.opts.style += 'height: 0;'
    this.rerender()
  }
}
