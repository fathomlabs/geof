const { icon } = require('../utils/icon')
const html = require('choo/html')
const escapeHtml = require('escape-html')
const escapeCss = require('cssesc')
const { EventEmitter } = require('events')

const TAB_KEYCODE = 9
const ENTER_KEYCODE = 13
const ESC_KEYCODE = 27
const UP_KEYCODE = 38
const DOWN_KEYCODE = 40

const uniq = function(arr) {
  const ret = []
  let i = 0
  while (i < arr.length) {
    if (ret.indexOf(arr[i]) === -1) {
      ret.push(arr[i])
    }
    i++
  }
  return ret
}

class SearchableInput extends EventEmitter {
  constructor(_el, _items, options) {
    super()
    let initialItem

    this._handleKeydownSearchInput = this._handleKeydownSearchInput.bind(this)
    this._handleKeyupSearchInput = this._handleKeyupSearchInput.bind(this)
    this._handleClickListItem = this._handleClickListItem.bind(this)
    this._templateItems = this._templateItems.bind(this)
    this._templateSearchBox = this._templateSearchBox.bind(this)
    this._el = _el

    if (_items == null) { _items = [] }
    this._items = _items
    if (options == null) { options = {} }
    if (!(this._el instanceof HTMLElement)) {
      console.error('Invalid argument passed. First argument is not HTMLElement and might be jQuery object. ')
    } else if (this._el.tagName === 'SELECT') {
      this._items = SearchableInput.selectElementSerialize(this._el)
      options = SearchableInput.selectElementOptionSerialize(this._el)

      initialItem = {
        name: this._el.querySelector('option:checked').text.trim(),
        value: this._el.value
      }

      const newEl = document.createElement('div')
      newEl.id = this._el.id
      newEl.className = this._el.className
      this._el.parentNode.replaceChild(newEl, this._el)
      this._el = newEl
    }

    initialItem = initialItem || options.initialItem || SearchableInput._getInitialItem(this._items)

    // option values
    this._inputName = options.inputName || this._el.getAttribute('name') || 'name'
    this._inputValueKey = options.inputValueKey || 'name'

    this._inputValue = initialItem[this._inputValueKey]

    this._itemIndex = 0
    this._searchedItems = SearchableInput._searchItems(this._items, '')
    this._isListShown = true

    this._el.classList.add('searchable-input-container')
    this._render()
  }

  static _searchItems(items, searchwords) {
    let searchedItems = []
    let tmp = []
    const searchwords_ = searchwords.replace(new RegExp('　', 'g'), ' ').split(' ')

    items.forEach(function(item) {
      if (!item.items) {
        searchwords_.forEach(function(keyword_) {
          if ((keyword_ === '') && (searchwords_.length > 1)) { return }
          items.forEach(function(item_) {
            if (item_.name.toUpperCase().indexOf(keyword_.toUpperCase()) !== -1) {
              if (!item_.items) {
                tmp.push(item_)
              }
            }

            if (item_.keywords) {
              return item_.keywords.forEach(function(keyword) {
                if (keyword.toUpperCase().indexOf(keyword_.toUpperCase()) !== -1) {
                  return tmp.push(item_)
                }
              })
            }
          })

          searchedItems = tmp.concat()
          return tmp = []})
      } else {
        tmp = SearchableInput._searchItems(item.items, searchwords)

        if (tmp.length !== 0) {
          searchedItems.push({
            name: item.name,
            items: tmp
          })
        }
      }

      return searchedItems
    })
    return uniq(searchedItems)
  }

  static _getInitialItem(items) {
    if (items[0].items) {
      return SearchableInput._getInitialItem(items[0].items)
    } else {
      return items[0]
    }
  }

  static selectElementSerialize(selectElement) {
    const itemElements = selectElement.querySelectorAll('select > option, select > optgroup')
    const items = []
    const _retrieveKeywords = function(optionElement) {
      const keywords = optionElement.getAttribute('data-keywords')
      if (keywords) {
        return JSON.parse(keywords)
      } else {
        return []
      }
    }

    for (let itemElement of itemElements) {
      var item
      if (itemElement.tagName === 'OPTION') {
        item = {
          name: itemElement.text.trim(),
          value: itemElement.value
        }
        item.keywords = _retrieveKeywords(itemElement)
        items.push(item)
      }
      if (itemElement.tagName === 'OPTGROUP') {
        items.push({
          name: itemElement.label,
          items: []
        })
        const optionElements = itemElement.querySelectorAll('optgroup > option')
        for (let optionElement of optionElements) {
          item = {
            name: optionElement.text.trim(),
            value: optionElement.value
          }
          item.keywords = _retrieveKeywords(optionElement)
          items[items.length - 1].items.push(item)
        }
      }
    }
    return items
  }

  static selectElementOptionSerialize(selectElement) {
    return {
      inputName: selectElement.name,
      inputValueKey: 'value'
    }
  }

  // accesser
  _getItem() {
    const item =
      {name: this._labelValue}
    item[this._inputValueKey] = this._inputValue
    return item
  }

  _setItem(item) {
    this._labelValue = item.name
    return this._inputValue = item[this._inputValueKey]
  }


  _setItemIndex(itemIndex) {
    return this._itemIndex = itemIndex
  }

  _setSearchedItems(searchedItems) {
    return this._searchedItems = searchedItems
  }

  _isChange(prevItem) {
    return !((prevItem.name === this._labelValue) && (prevItem[this._inputValueKey] === this._inputValue))
  }

  _dispatchSelect(item) {
    return this.emit('select', {item})
  }

  _dispatchChange(item) {
    return this.emit('change', {item})
  }

  _dispatchChangeItems(item) {
    return this.emit('changeItems', {item})
  }

  _dispatchEvents(prevItem) {
    const item = this._getItem()
    this._dispatchSelect(item)
    if (this._isChange(prevItem)) {
      return this._dispatchChange(item)
    }
  }

  // private
  _setEventHandlers() {
    const searchInput = this._el.querySelector('.searchable-input-search-input')
    if (searchInput) {
      searchInput.addEventListener('keydown', this._handleKeydownSearchInput)
      searchInput.addEventListener('keyup', this._handleKeyupSearchInput)
    }
  }

  _removeEventHandlers() {
    const searchInput = this._el.querySelector('.searchable-input-search-input')
    if (searchInput) {
      searchInput.removeEventListener('keydown', this._handleKeydownSearchInput)
      searchInput.removeEventListener('keyup', this._handleKeyupSearchInput)
    }
  }

  _setListItemEventHandlers() {
    const listItems = this._el.querySelectorAll('.searchable-input-list-item')
    return Array.from(listItems).map(listItem => listItem.addEventListener('click', this._handleClickListItem))
  }

  _removeListItemEventHandlers() {
    const listItems = this._el.querySelectorAll('.searchable-input-list-item')
    return Array.from(listItems).map(listItem => listItem.removeEventListener('click', this._handleClickListItem))
  }

  // handlers
  _handleClickLabel() {
    this._show()
    this._render()
    return this._focusInput()
  }

  _handleKeydownSearchInput(event) {
    const { keyCode } = event
    const shift = event.shiftKey
    const ctrl = event.ctrlKey || event.metaKey

    switch (true) {
      case (keyCode === ENTER_KEYCODE) && shift && !ctrl:
        event.preventDefault()
        this._selectItemByKeydown()
        this._render()
        return label.focus()
      case (keyCode === ENTER_KEYCODE) && !shift && !ctrl:
        event.preventDefault()
        this._selectItemByKeydown()
        this._render()
        return label.focus()
      case (keyCode === TAB_KEYCODE) && !shift && !ctrl:
        this._selectItemByKeydown()
        return this._render()
      case (keyCode === TAB_KEYCODE) && shift && !ctrl:
        this._selectItemByKeydown()
        this._render()
        return label.focus()
      case (keyCode === ESC_KEYCODE) && !shift && !ctrl:
        return this._render()
      case (keyCode === UP_KEYCODE) && !shift && !ctrl:
        event.preventDefault()
        this._decreaseItemIndex()
        return this._renderList()
      case (keyCode === DOWN_KEYCODE) && !shift && !ctrl:
        event.preventDefault()
        this._increaseItemIndex()
        return this._renderList()
    }
  }

  _handleKeyupSearchInput(event) {
    this._setSearchedItems(SearchableInput._searchItems(this._items, event.target.value))
    return this._renderList()
  }

  _handleClickListItem(event) {
    const item = JSON.parse(event.target.getAttribute('data-item'))
    const prevItem = this._getItem()
    this._setItem(item)
    this._render()
    this._renderInput()
    return this._dispatchEvents(prevItem)
  }

  _selectItemByKeydown() {
    const { item } = this._findItemByIndex(this._items, this._itemIndex)
    const prevItem = this._getItem()
    this._setItem(item)
    this._renderInput()
    return this._dispatchEvents(prevItem)
  }

  _decreaseItemIndex() {
    let itemIndex = this._itemIndex - 1
    if (itemIndex < 0) {
      itemIndex = this._calcItemLength(this._items) - 1
    }
    return this._setItemIndex(itemIndex)
  }

  _increaseItemIndex() {
    let itemIndex = this._itemIndex + 1
    if (itemIndex > (this._calcItemLength(this._items) - 1)) {
      itemIndex = 0
    }
    return this._setItemIndex(itemIndex)
  }

  _calcItemLength(items) {
    let itemIndex = 0
    for (let item of items) {
      if (item.items) {
        itemIndex += this._calcItemLength(item.items)
      } else {
        itemIndex += 1
      }
    }
    return itemIndex
  }

  _calcItemIndex(items, item, key) {
    if (key == null) { key = 'name' }
    let itemIndex = 0
    for (let index = 0; index < items.length; index++) {
      const item_ = items[index]
      if (item_.items) {
        const result = this._calcItemIndex(item_.items, item, key)
        itemIndex += result
        if (result !== item_.items.length) {
          return itemIndex
        }
      } else {
        if ((item_.name === item.name) && (item_[key] === item[key])) {
          return itemIndex
        } else {
          itemIndex += 1
        }
      }
    }
    return itemIndex
  }

  _findItemByIndex(items, itemIndex) {
    let index, item
    let itemIndex_ = 0
    const item_ = null
    for (index = 0; index < items.length; index++) {
      item = items[index]
      if (item.items) {
        const result = this._findItemByIndex(item.items, itemIndex - itemIndex_)
        itemIndex_ += result.index
        if (result.item !== null) {
          return {index: itemIndex_, item: result.item}
        }
      } else {
        if (itemIndex_ === itemIndex) {
          return {index: itemIndex_, item}
        } else {
          itemIndex_ += 1
        }
      }
    }
    return {index: itemIndex_, item: null}
  }

  _focusInput() {
    return this._el.querySelector('.searchable-input-search-input').focus()
  }

  // public - getItem / getValue / updateItem / updateItems
  getSelectedItem() {
    const item = {}
    item.name = this._labelValue
    item[this._inputValueKey] = this._inputValue
    return item
  }

  getValue() {
    return this._inputValue
  }

  updateItem(item) {
    const prevItem = this._getItem()
    this._setItem(item)
    this._render()
    if (this._isChange(prevItem)) {
      return this._dispatchChange(item)
    }
  }

  updateItems(items) {
    this._items = items
    const initialItem = SearchableInput._getInitialItem(items)
    this.searchedItems = SearchableInput._searchItems(items, '')
    this._setItem(initialItem)
    this._render()
    return this._dispatchChangeItems()
  }

  // templates
  _templateItems(items, itemIndex) {
    if (itemIndex == null) { itemIndex = 0 }
    let html = ''
    if (items !== null) {
      for (let index = 0; index < items.length; index++) {
        const item = items[index]
        const escapeItem = escapeHtml(JSON.stringify(item))
        if (item.items) {
          html += `<div class="flex flex-column w-100"><span class="searchable-input-list-title">${escapeHtml(item.name)}</span><div class="flex flex-column w-100">${this._templateItems(item.items, itemIndex)}</div></div>`
          itemIndex += item.items.length
        } else {
          if (itemIndex === this._itemIndex) {
            html += `<div class='searchable-input-list-item flex w-100 pa3 is-selected' data-item='${ escapeItem }'>` + escapeHtml(item.name) + '</div>'
          } else {
            html += `<div class='searchable-input-list-item flex w-100 pa3' data-item='${ escapeItem }'>` + escapeHtml(item.name) + '</div>'
          }
          itemIndex += 1
        }
      }
    }
    return html
  }

  _templateSearchBox(searchedItems) {
    return `
<div class="searchable-input-search-box ${this._getPositionClassNames().join(' ')}">
  <div class="searchable-input-search-input-container">
    <input type="text" placeholder="type a fish name" class="searchable-input-search-input pa3 ba1 br1 w-100" />
  </div>
  <div class="searchable-input-list-container">
    <div class="searchable-input-list w-100">${ this._templateItems(searchedItems) }</div>
  </div>
</div>
`
  }

  _template(searchedItems) {
    return `\
<div class="searchable-input">
  <input type="hidden" name="${ this._inputName }" value="${ this._inputValue }" />
  ${this._templateSearchBox(searchedItems)}
</div>
`
  }

  // template helper
  _getPositionClassNames() {
    const maxLeftHeight = 400
    const maxLeftWidth = 100

    const screen_ = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const position = this._el.getBoundingClientRect()

    const bottomEnd = position.top + this._el.offsetHeight
    const rightEnd = position.left + this._el.offsetWidth

    const classNames = []
    if ((screen_.height - bottomEnd) < maxLeftHeight) {
      classNames.push('searchable-input-search-box__top')
    }
    if ((screen_.width - rightEnd) < maxLeftWidth) {
      classNames.push('searchable-input-search-box__right')
    }
    return classNames
  }

  // render
  _renderInput() {
    const inputA = this._el.querySelector('input[type="hidden"]')
    const inputB = this._el.querySelector('.searchable-input-search-input')
    inputA.value = this._inputValue
    return
  }

  _renderList() {
    this._removeListItemEventHandlers()
    this._el.querySelector('.searchable-input-list').innerHTML = this._templateItems(this._searchedItems)
    this._setListItemEventHandlers()
    return this._scrollListContainer()
  }

  _render() {
    this._removeEventHandlers()
    this._removeListItemEventHandlers()
    this._el.innerHTML = this._template(this._searchedItems)
    this._setEventHandlers()
    this._setListItemEventHandlers()
    return this._scrollListContainer()
  }

  // render helper
  _scrollListContainer() {
    const selectedItem = this._el.querySelector('.searchable-input-list-item.is-selected')
    if (selectedItem) {
      const itemTop = selectedItem.offsetTop
      const scrollBuffer = 110
      return this._el.querySelector('.searchable-input-list-container').scrollTop = itemTop - scrollBuffer
    }
  }
}


module.exports = SearchableInput
