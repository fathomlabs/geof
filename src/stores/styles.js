module.exports = styles

var css = require('sheetify')

var main = css`

:host {
  background: #0062cc;
  margin-top: 48px;
}

`

var section = css`

:host {
  background: none;
}

`

function styles (state, emitter) {
  var opts = state.styleOpts = {
    primary: 'dark-gray',
    secondary: 'light-blue'
  }

  state.style = {
    styles: {},
    classes: {}
  }

  const updateStyles = () => {
    state.style = {
      classes: {
        main: `${main}`,
        section: `flex flex-column pa4 light-gray br0 bbgray ${section}`,
        title: `roboto fw4 f4 tl mv1 light-gray`,
        footer: `flex h4 w-100 absolute bottom-0 bg-${opts.primary}`,
        tab: `w-third pa3 h-100 tc light-gray b f2 link dim`,
        icon: `light-gray`,
        label: `f4 tc normal mt1 light-gray`,
        button: `border-box br2 bn pa3 light-gray bg-${opts.primary} link dim`,
        navbutton: `border-box dib bn pa1 white bg-${opts.primary} link dim`,
        secondary: `bg-${opts.secondary}`
      }
    }
  }

  updateStyles()
}
