module.exports = styles

var css = require('sheetify')

var main = css`

:host {
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
    primary: 'light-gray',
    secondary: 'light-blue'
  }

  var theme = {
    primary: '#357edd',
    complement: '#dd9435',
    splitcomp: {
      left: '#d2dd35',
      mid: '#357edd',
      right: '#dd4035'
    },
    triatic: [
      '#7edd35',
      '#357edd',
      '#dd357e'
    ],
    tetradic: [
      '#35dd94',
      '#357edd',
      '#dd357e',
      '#dd9435'
    ]
  }

  const updateStyles = () => {
    state.style = {
      theme: theme,
      classes: {
        main: `bg-blue ${main}`,
        section: `flex flex-column pa4 light-gray br0 ${section}`,
        title: `roboto fw4 f4 tl mv1 dark-gray`,
        footer: `flex h4 w-100 absolute bottom-0 bg-${opts.primary}`,
        tab: `w-third pa3 h-100 tc light-gray b f2 link dim`,
        icon: `light-gray`,
        label: `f4 tc normal mt1 light-gray`,
        button: `border-box br2 bn pa3 dark-gray bg-${opts.primary} link dim`,
        navbutton: `border-box dib bn pa1 white bg-${opts.primary} link dim`,
        secondary: `bg-${opts.secondary}`
      }
    }
  }

  updateStyles()
}
