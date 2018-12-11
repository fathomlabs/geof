module.exports = phone

var html = require('choo/html')

var iosStatus = html`

<svg style="display: block; position: absolute; top: 0; left: 0; z-index: 999; pointer-events: none;" xmlns="http://www.w3.org/2000/svg" width="375" height="812" fill="none">
  <path fill="#000" fill-rule="evenodd" d="M0 0h40C17.909 0 0 17.909 0 40V0zm375 40c0-22.091-17.909-40-40-40h40v40zm-40 772c22.091 0 40-17.909 40-40v40h-40zM0 772c0 22.091 17.909 40 40 40H0v-40zM268.961 31H106.039c-12.703 0-23-10.297-23-23.039l.006-3.78a.797.797 0 0 0-.04-.281C82.332 2.086 80.78.674 78.891.216L78 0h219l-.892.216a5.859 5.859 0 0 0-4.106 3.684.79.79 0 0 0-.047.28l.006 3.82c0 12.703-10.297 23-23 23z" clip-rule="evenodd"/>
</svg>

`

function phone (content) {
  return html`
    <body class="roboto fw4 mid-gray" style="height: 100vh; background: black;">
      <div class="flex items-center justify-center w-100 h-100">
        <div style="position: relative; width: 100%; height: 100%; background: white;">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 1px #333 solid" class="sans-serif">
            ${content}
          </div>
        </div>
      </div>
    </body>
  `
}