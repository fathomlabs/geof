var html = require('choo/html')
var question = require('../form/question')
var button = require('../button')
var section = require('../phoneui/section')

var questions = [{
    question: 'Age of the youngest person eating the fish you catch',
    field: {
      type: 'choose',
      name: 'over16',
      choices: [{
          label: 'Under 16 years',
          id: 'no',
          checked: false
        },
        {
          label: 'Over 16 years',
          id: 'yes',
          checked: true
        }
      ]
    }
  },
  {
    question: 'Are there any pregnant women eating the fish caught?',
    field: {
      type: 'choose',
      name: 'pregnant',
      choices: [{
          label: 'Yes',
          id: 'yes',
          checked: false
        },
        {
          label: 'No',
          id: 'no',
          checked: true
        }
      ]
    }
  }
]

module.exports = function setup(state, emit) {
  var parts = questions.map(q => question(state, emit, q))
  var submit = button(state, emit, {
    classes: 'w-100',
    label: 'Save',
    onclick: () => {}
  })

  var form = html`
  
  <form class="measure center">
    ${parts.map(part => part.el)}
    ${submit}
    <small><em>you can change this information at any time by clicking on settings</em></small>
  </form>
  
  `

  form.onsubmit = e => {
    e.preventDefault()
    var data = {
      setupDone: true
    }
    parts.forEach(part => {
      var partdata = part.getAnswer()
      data[partdata.name] = partdata.answer === 'yes'
    })
    emit('user:setup', data)
  }

  var inner = html`

  <div class="">
    <p class="mb0">
      Please tell us a little about the people who will be eating the fish you catch.
      This helps us give accurate, safe advice.
    </p>
    ${form}
  </div>

  `

  var wrapper = section(state, emit, {
    title: 'Setup',
    content: inner
  })

  var outer = html`

  <div class="w-100 h-100 flex flex-column bg-gray" style="min-height: -webkit-min-content; align-content: center; justify-content: center;">
    ${wrapper}
  </div>
  
  `
  return outer
}