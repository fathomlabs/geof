var html = require('choo/html')
var phoneify = require('../components/phoneify')

var TITLE = 'src - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  var content = html`
  
  <div>
    ${statusbar(`bg-${state.styleOpts.primary}`)}
    ${navigation(state, emit, {
      classes: `bg-${state.styleOpts.primary}`,
      left: navbutton(state, {
          label: 'back',
          onclick: () => emit('pushState', '/')
      }),
      middle: 'Title',
      right: 'settings'
    })}
    <div class="${state.styles.mapcontainer}">
      map
    </div>
    <div class="mh2">
      ${button(state, { classes: "w-100", label: 'Next: which fish?', onclick: () => emit('navigate:catch') })}
    </div>
    ${footer(state, emit)}
  </div>
  
  `

  return phoneify(content)
}

function button (state, opts) {
  var el = html`
  
  <button class="${state.styles.button} ${opts.classes}">${opts.label}</button>
  
  `

  el.onclick = opts.onclick
  return el
}

function navbutton(state, opts) {
    var el = html `
  
  <button class="${state.styles.navbutton} ${opts.classes}">${opts.label}</button>
  
  `

    el.onclick = opts.onclick
    return el
}

function footer (state, emit) {
  return html`
  
  <div class="${state.styles.footer}">
    ${tab(state, emit, { icon: ':)', label: 'smile' })}
    ${tab(state, emit, { icon: ':|', label: 'meh' })}
    ${tab(state, emit, { icon: ':(', label: 'waaah' })}
  </div>
  
  `
}

function tab (state, emit, opts) {
  return html`
  
  <div class="${state.styles.tab}">
    <div class="${state.styles.icon}">${opts.icon}</div>
    <div class="${state.styles.label}">${opts.label}</div>
  </div>

  `
}

function navigation (state, emit, opts) {
  var left = html`<div class="w-30 f4 ph2">${opts.left}</div>`
  var middle = html`<div class="w-40 tc justify-center">${opts.middle}</div>`
  var right = html `<div class="w-30 f4 ph2 tr">${opts.right}</div>`

  return html`
  
  <div class="flex w-100 ma0 pa0 f2 white items-center ${opts.classes}" style="height: 48px; margin-top: -3px;">
    ${left}
    ${middle}
    ${right}
  </div>
  
  `
}

function statusbar (classes) {
  return html`
  
  <svg class="${classes}" xmlns="http://www.w3.org/2000/svg" width="375" height="44" fill="none">
    <rect width="21" height="10.333" x="336.5" y="17.833" stroke="#fff" opacity=".35" rx="2.167"/>
    <path fill="#fff" d="M359 21v4a2.17 2.17 0 0 0 0-4z" opacity=".4"/>
    <rect width="18" height="7.333" x="338" y="19.333" fill="#fff" rx="1.333"/>
    <path fill="#fff" fill-rule="evenodd" d="M323.33 19.608a8.64 8.64 0 0 1 5.953 2.378.309.309 0 0 0 .434-.003l1.156-1.167a.32.32 0 0 0-.003-.456 10.897 10.897 0 0 0-15.08 0 .32.32 0 0 0-.003.456l1.156 1.167c.119.12.313.121.434.003a8.64 8.64 0 0 1 5.953-2.378zm0 3.796c1.218 0 2.392.452 3.294 1.27a.311.311 0 0 0 .434-.006l1.154-1.167a.321.321 0 0 0-.004-.459 7.16 7.16 0 0 0-9.753 0 .322.322 0 0 0-.004.459l1.154 1.167c.119.119.312.121.434.005a4.907 4.907 0 0 1 3.291-1.27zm2.313 2.553a.312.312 0 0 1-.094.231l-1.997 2.016a.312.312 0 0 1-.443 0l-1.998-2.016a.312.312 0 0 1 .01-.457 3.421 3.421 0 0 1 4.419 0c.064.058.102.14.103.226zM309.667 17.667h-1a1 1 0 0 0-1 1v8.666a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8.666a1 1 0 0 0-1-1zM304 20h1a1 1 0 0 1 1 1v6.333a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V21a1 1 0 0 1 1-1zm-3.667 2.333h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-4.666 2h-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" clip-rule="evenodd"/>
    <path fill="#fff" d="M37.776 28.74c2.51 0 4-1.963 4-5.285 0-3.26-1.587-5.065-3.945-5.065-2.146 0-3.664 1.442-3.664 3.465 0 1.894 1.367 3.275 3.247 3.275 1.155 0 2.092-.533 2.557-1.47h.116c-.02 2.283-.848 3.603-2.29 3.603-.848 0-1.524-.458-1.736-1.197h-1.757c.287 1.614 1.668 2.673 3.472 2.673zm.062-5.005c-1.148 0-1.941-.793-1.941-1.934 0-1.1.834-1.942 1.948-1.942 1.114 0 1.948.855 1.948 1.976 0 1.1-.813 1.9-1.955 1.9zm6.754 3.405c.65 0 1.094-.465 1.094-1.08 0-.622-.444-1.08-1.094-1.08-.642 0-1.094.457-1.094 1.08 0 .615.452 1.08 1.094 1.08zm0-4.99c.65 0 1.094-.459 1.094-1.074 0-.622-.444-1.08-1.094-1.08-.642 0-1.094.458-1.094 1.08 0 .615.452 1.073 1.094 1.073zm7.63 6.35h1.688v-1.88h1.333v-1.49H53.91v-6.494h-2.488a127.848 127.848 0 0 0-4.02 6.514v1.47h4.82v1.88zm-3.186-3.425a105.964 105.964 0 0 1 3.117-5.004h.096v5.1h-3.213v-.096zm10.13 3.425h1.765v-9.864h-1.757l-2.577 1.804v1.696l2.454-1.723h.116V28.5z"/>
  </svg>
  
  `
}