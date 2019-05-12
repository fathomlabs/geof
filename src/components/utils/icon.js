var {
  library,
  icon
} = require('@fortawesome/fontawesome-svg-core')

var faChevronDown = require('@fortawesome/free-solid-svg-icons/faChevronDown').definition
var faSearch = require('@fortawesome/free-solid-svg-icons/faSearch').definition
library.add(faChevronDown)
library.add(faSearch)

module.exports = {
  library, icon
}
