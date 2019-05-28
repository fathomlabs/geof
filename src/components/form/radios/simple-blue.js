var html = require('choo/html')
var css = require('sheetify')

css`

.radio {
  margin: 0.5rem;
}
.radio input[type="radio"] {
  position: absolute;
  opacity: 0;
}
.radio input[type="radio"] + .radio-label:before {
  content: '';
  background: #f4f4f4;
  border-radius: 100%;
  border: 1px solid #b4b4b4;
  display: inline-block;
  width: 1.4em;
  height: 1.4em;
  position: relative;
  top: -0.2em;
  margin-right: 1em;
  vertical-align: top;
  cursor: pointer;
  text-align: center;
  transition: all 250ms ease;
}
.radio input[type="radio"]:checked + .radio-label:before {
  background-color: #3197ee;
  box-shadow: inset 0 0 0 4px #f4f4f4;
}
.radio input[type="radio"]:focus + .radio-label:before {
  outline: none;
  border-color: #3197ee;
}
.radio input[type="radio"]:disabled + .radio-label:before {
  box-shadow: inset 0 0 0 4px #f4f4f4;
  border-color: #b4b4b4;
  background: #b4b4b4;
}
.radio input[type="radio"] + .radio-label:empty:before {
  margin-right: 0;
}


`

html`
<div class="container">
  <div class="radio">
    <input id="radio-1" name="radio" type="radio" checked>
    <label for="radio-1" class="radio-label">Checked</label>
  </div>

  <div class="radio">
    <input id="radio-2" name="radio" type="radio">
    <label  for="radio-2" class="radio-label">Unchecked</label>
  </div>

  <div class="radio">
    <input id="radio-3" name="radio" type="radio" disabled>
    <label for="radio-3" class="radio-label">Disabled</label>
  </div>
</div>
`

module.exports = function (state, emit, opts) {
 
}