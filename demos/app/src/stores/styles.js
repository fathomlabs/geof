module.exports = styles

var css = require('sheetify')

var main = css`

:host {
  background: #a9e4f7;
  background: -moz-linear-gradient(-45deg, #a9e4f7 34%, #0fb4e7 59%);
  background: -webkit-linear-gradient(-45deg, #a9e4f7 34%,#0fb4e7 59%);
  background: linear-gradient(135deg, #a9e4f7 34%,#0fb4e7 59%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a9e4f7', endColorstr='#0fb4e7',GradientType=1 );
}

`

var section = css`

:host {
  background: -moz-linear-gradient(top, rgba(255,255,255,0.6) 0%, rgba(246,246,246,0.6) 44%, rgba(237,237,237,0.6) 100%);
  background: -webkit-linear-gradient(top, rgba(255,255,255,0.6) 0%,rgba(246,246,246,0.6) 44%,rgba(237,237,237,0.6) 100%);
  background: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(246,246,246,0.6) 44%,rgba(237,237,237,0.6) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4dffffff', endColorstr='#4dededed',GradientType=0 );
}

`


function styles (state, emitter) {
  var opts = state.styleOpts = {
    primary: 'green',
    secondary: 'light-green'
  }

  state.style = {
    styles: {},
    classes: {}
  }

  const updateStyles = () => {
    state.style = {
      classes: {
        main: `${main}`,
        section: `flex flex-column mv2 pa4 br0 bbgray hover-mid-gray ${section}`,
        title: `roboto fw4 f4 tl mv1`,
        footer: `flex h4 w-100 absolute bottom-0 bg-${opts.primary}`,
        tab: `w-third pa3 h-100 tc white b f2 link dim`,
        icon: `white`,
        label: `f4 tc normal mt1`,
        button: `border-box br2 bn pa3 white bg-${opts.primary} link dim`,
        navbutton: `border-box dib bn pa1 white bg-${opts.primary} link dim`,
        secondary: `bg-${opts.secondary}`
      }
    }
  }

  updateStyles()
}
