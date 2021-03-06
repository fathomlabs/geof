var html = require('choo/html')

module.exports = section

function section (state, emit, opts) {
  var styles = opts.styles || state.style.classes || {
    section: 'mv3 pa4 pb0 br0 shadow-4 black bg-white'
  }
  var title = opts.title ? html`
  
  <h1 class="${styles.title}">
    ${opts.title}
  </h1>
  
  ` : null

  return html`

  <div class="${styles.section}">
    ${opts.content}
  </div>

  `
}