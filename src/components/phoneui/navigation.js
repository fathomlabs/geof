var html = require('choo/html')

module.exports = navigation

function navigation(state, emit, opts) {
                  
  var left = html`<div class="fl w-30 f4 ph2">${opts.left}</div>`
  var middle = html`<div class="fl w-50 f3 tc justify-center">${opts.middle}</div>`
  var right = html`<div class="f4 ph2 tr">${opts.right}</div>`
  var search = html`<div style="display: flex; align-items: center"> 
                    <input style="padding: 10px;
                    font-size: 13px;
                    border: 1px solid grey;
                    float: left;
                    width: 60%;
                    background: #f1f1f1;" 
                    type="text" placeholder="Find the fish..." 
                    name="search">
                    <button style="height:100%; float: left;
                      width: 17%;                  
                      margin-left: 5px;
                      background: #2196F3;
                      color: blue;
                      font-size: 15px;
                      border: 1px solid blue;
                      border-left: none; /* Prevent double borders */
                      cursor: pointer;" type="submit">
                      <img src="/assets/svg/fish2.png">
                    </button>
                    </div>
                    
                      `
                    
   return html`
  <div class="flex w-100 ma0 pa0 f2 white items-center ${opts.classes || ''}" style="position: absolute; top: 0; left: 0; height: 48px; ${opts.style || ''}">
    ${left}
    ${middle}
    ${search}
    ${right}
  </div>
    `
}
