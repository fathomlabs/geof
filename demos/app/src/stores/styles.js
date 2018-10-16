module.exports = styles

function styles (state, emitter) {
  var opts = state.styleOpts = {
    primary: 'green',
    secondary: 'light-green'
  }

  state.styles = {}

  const updateStyles = () => {
    state.styles = {
      section: `mv3 pa4 br0 shadow-4 black bg-white`,
      title: `dark-gray f4 tl b i mv1`,
      footer: `flex h4 w-100 absolute bottom-0 bg-${opts.primary}`,
      tab: `w-third pa3 h-100 tc white b f2 link dim`,
      icon: `white`,
      label: `f4 tc normal mt1`,
      button: `border-box br2 pa3 white bg-${opts.primary} link dim`,
      navbutton: `border-box dib bn pa1 white bg-${opts.primary} link dim`,
      secondary: `bg-${opts.secondary}`,
      mapcontainer: `h-75`
    }
  }

  updateStyles()
}
