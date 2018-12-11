var tinygradient = require('tinygradient')
var stylise = require('./stylise')
var html = require('choo/html/raw')

// cool
// background-image: linear-gradient(90deg, #6e40aa, #6154c8, #4c6edb, #368ce1, #24aad8, #1ac7c2, #1ddea3, #30ee83, #52f667, #7ef658, #7ef658);
// background-image: linear-gradient(90deg, hsl(266,45%,45%), hsl(246,51%,55%), hsl(225,66%,57%), hsl(209,74%,54%), hsl(195,71%,49%), hsl(178,76%,44%), hsl(161,76%,49%), hsl(146,84%,56%), hsl(127,90%,64%), hsl(105,89%,65%), hsl(105,89%,65%));
// viridis
// background-image: linear-gradient(90deg, #440154, #482475, #414487, #355f8d, #2a788e, #21908d, #22a884, #42be71, #7ad151, #bddf26, #bddf26);
// background-image: linear-gradient(90deg, hsl(288,97%,16%), hsl(266,52%,30%), hsl(237,35%,39%), hsl(211,45%,38%), hsl(193,54%,36%), hsl(178,62%,34%), hsl(163,66%,39%), hsl(142,48%,50%), hsl(100,58%,56%), hsl(71,74%,51%), hsl(71,74%,51%));
// inferno
// background-image: linear-gradient(90deg, #000004, #160b39, #420a68, #6a176e, #932667, #ba3655, #dd513a, #f3761b, #fca50a, #f6d746, #f6d746);
// background-image: linear-gradient(90deg, hsl(240,100%,0%), hsl(254,67%,13%), hsl(275,82%,22%), hsl(297,65%,26%), hsl(324,58%,36%), hsl(345,54%,47%), hsl(8,70%,54%), hsl(25,89%,52%), hsl(38,97%,51%), hsl(49,90%,61%), hsl(49,90%,61%));
// magma
// background-image: linear-gradient(90deg, #000004, #140e36, #3b0f70, #641a80, #8c2981, #b5367a, #de4968, #f66e5c, #fe9f6d, #fecf92, #fecf92);
// background-image: linear-gradient(90deg, hsl(240,100%,0%), hsl(249,58%,13%), hsl(267,76%,24%), hsl(283,66%,30%), hsl(306,54%,35%), hsl(327,54%,46%), hsl(347,69%,57%), hsl(7,89%,66%), hsl(20,98%,71%), hsl(33,98%,78%), hsl(33,98%,78%));
// plasma
// background-image: linear-gradient(90deg, hsl(242,88%,28%), hsl(263,95%,31%), hsl(277,100%,32%), hsl(291,85%,34%), hsl(314,61%,42%), hsl(336,56%,53%), hsl(0,67%,63%), hsl(20,85%,62%), hsl(33,97%,60%), hsl(47,97%,56%), hsl(47,97%,56%));
// warm
// background-image: linear-gradient(90deg, hsl(266,45%,45%), hsl(285,49%,47%), hsl(307,52%,49%), hsl(325,74%,57%), hsl(341,98%,64%), hsl(357,100%,68%), hsl(15,100%,63%), hsl(29,96%,59%), hsl(45,75%,53%), hsl(65,65%,53%), hsl(65,65%,53%));
// spectral
// background: #c1a082;
// background-image: linear-gradient(90deg, #9e0142, #d13b4b, #f0704a, #fcab63, #fedc8c, #fbf8b0, #e0f3a1, #aadda2, #69bda9, #4288b5, #4288b5);
// background-image: linear-gradient(90deg, hsl(335,98%,31%), hsl(353,61%,52%), hsl(13,84%,61%), hsl(28,96%,68%), hsl(42,98%,77%), hsl(57,90%,83%), hsl(73,77%,79%), hsl(111,46%,75%), hsl(165,38%,57%), hsl(203,46%,48%), hsl(203,46%,48%));
// rainbow
// background-image: linear-gradient(90deg, hsl(266,45%,45%), hsl(306,51%,49%), hsl(341,98%,64%), hsl(15,100%,63%), hsl(45,76%,53%), hsl(85,82%,64%), hsl(126,90%,64%), hsl(161,76%,49%), hsl(194,72%,49%), hsl(225,67%,58%), hsl(225,67%,58%));
// cubehelix
// background-image: linear-gradient(90deg, hsl(0,0%,0%), hsl(251,39%,13%), hsl(198,55%,19%), hsl(149,53%,26%), hsl(90,44%,32%), hsl(33,37%,45%), hsl(344,46%,65%), hsl(291,44%,73%), hsl(229,67%,85%), hsl(182,47%,88%), hsl(182,47%,88%));

var scales = {
  spectral: {
    bg: {
      hex: 'c1a082'
    },
    bgimg: {
      hex: [
        '9e0142',
        'd13b4b',
        'f0704a',
        'fcab63',
        'fedc8c',
        'fbf8b0',
        'e0f3a1',
        'aadda2',
        '69bda9',
        '4288b5',
        '4288b5'
      ]
    }
  },
  inferno: {
    bg: {
      hex: '95483f'
    },
    bgimg: {
      hex: [
        '000004',
        '160b39',
        '420a68',
        '6a176e',
        '932667',
        'ba3655',
        'dd513a',
        'f3761b',
        'fca50a',
        'f6d746',
        'f6d746'
      ]
    }
  }
}

module.exports = function build (opts) {
  var ticks = opts.ticks || null
  var domain = opts.domain || (d => d)
  var name = opts.name || Object.keys(scales)[0]

  var raw = scales[name]
  if (!raw) throw new Error('there is no gradient style named', name)

  var bghex = '#' + raw.bg.hex
  var hexes = raw.bgimg.hex.map(c => '#' + c)

  // css
  var style = {
    background: bghex,
    backgroundImage: `linear-gradient(90deg, ${hexes.join(', ')})`
  }
  var inlinestyle = `background: ${style.background}; background-image: ${style.backgroundImage};`
  var css = {
    obj: style,
    str: inlinestyle
  }

  // legend HTML
  var legendhtml = `<div style="width: 100%; height: 100%; ${inlinestyle}"></div>`
  var legendel = html(legendhtml)
  var legend = {
    html: legendhtml,
    el: legendel
  }

  // gradient (see https://github.com/mistic100/tinygradient)
  // contains tinycolors (see https://github.com/bgrins/TinyColor/blob/master/README.md#methods)
  var gradient = tinygradient(hexes)

  var pointcolour = point => {
    return gradient.hsvAt(domain(point))
  }

  return {
    css, legend, gradient, pointcolour
  }
}
