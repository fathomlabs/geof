var html = require('choo/html')
const Chartist = require('chartist')
require('chartist-plugin-fill-donut')
const css = require('sheetify')

var style = css('chartist')

var containerstyle = css`

:host {
  height: 180px;
}

:host g {
  transform: translate(50%, 50%) rotate(180deg);
}

:host text {
  display: none;
}

:host svg {
  overflow: visible;
}

:host .ct-series-a .ct-slice-donut {
  stroke: #FF725C;
  stroke-width: 10px !important;
  stroke-linecap: round;
}

:host .ct-series-b .ct-slice-donut {
  stroke: #19A974;
  stroke-width: 10px !important;
  stroke-linecap: round;
}

:host .ct-fill-donut-label {
  width: 100%;
}

`

// defaultOptions = {
//   fillClass: 'ct-fill-donut',
//   label: {
//     html: '<div class="ct-fill-donut-label"></div>',
//   },
//   items: [{
//     class: '',
//     id: '',
//     content: 'fillText',
//     position: 'center', //bottom, top, left, right
//     offsetY: 0, //top, bottom in px
//     offsetX: 0 //left, right in px
//   }]
// }

module.exports = function chart(state, emit, opts) {
  var data = {
    labels: ['Eaten', 'Available'],
    series: [
      state.allowance.percent, 100 - state.allowance.percent
    ]
  }
  var opts = {
    donut: true,
    donutWidth: 150,
    startAngle: 210,
    total: 120,
    plugins: [
      Chartist.plugins.fillDonut({
        items: [{
          position: 'center',
          offsetY: 24,
          offsetX: -4,
          content: `<h4 class="tc">${Math.round(state.allowance.percent)}% of<br><span class="small">safe<br>allowance<br>used</span></h3>`
        }]
      })
    ]
  }
  var el = html`<div class="flex justify-center items-center tc ${style} ${containerstyle}"></div>`
  var plot = new Chartist.Pie(el, data, opts)

  // plot.on('draw', function (data) {
  //   if (data.type === 'slice' && data.index == 0) {
  //     var pathLength = data.element._node.getTotalLength()

  //     data.element.attr({
  //       'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
  //     })

  //     var animationDefinition = {
  //       'stroke-dashoffset': {
  //         id: 'anim' + data.index,
  //         dur: 1200,
  //         from: -pathLength + 'px',
  //         to: '0px',
  //         easing: Chartist.Svg.Easing.easeOutQuint,
  //         fill: 'freeze'
  //       }
  //     }
  //     data.element.attr({
  //       'stroke-dashoffset': -pathLength + 'px'
  //     })
  //     data.element.animate(animationDefinition, true)
  //   }
  // })

  return el
}