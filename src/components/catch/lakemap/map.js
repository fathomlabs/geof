var Component = require('choo/component')
var html = require('choo/html')
var L = require('leaflet')
require('leaflet.markercluster')
var nanologger = require('nanologger')
var onIdle = require('on-idle')

var button = require('../../button')
var Popover = require('../../utils/popover')

var css = require('sheetify')

css('leaflet/dist/leaflet.css')
css('leaflet.markercluster/dist/MarkerCluster.css')
css('leaflet.markercluster/dist/MarkerCluster.Default.css')

var tooltipStyle = css`

:host {
  padding: 0;
  background-color: #222;
  border: none;
  user-select: unset;
  pointer-events: unset;
}

:host:hover {
  background: #333;
}

:host::before {
  border-bottom-color: #222;
  margin-left: -7px
}

`

var controlsStyle = css`

:host {
  margin-top: -48px;
  background: white;
  height: 0;
  padding: 0 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  -webkit-transition: height 0.5s; 
  -moz-transition: height 0.5s; 
  -ms-transition: height 0.5s; 
  -o-transition: height 0.5s; 
  transition: height 0.5s;  
}

`

// buttonStyle

css`

.leaflet-tooltip button {
  color: white;
	outline: currentcolor none medium;
	background: #333;
	border: 0;
	padding: 6px;
	border-radius: 2px;
}

`

var loadingStyle = css`

:host {
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  background: white;
  opacity: 1;
  padding: 20px;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1001;
  -webkit-transition: opacity 1s; 
  -moz-transition: opacity 1s; 
  -ms-transition: opacity 1s; 
  -o-transition: opacity 1s; 
  transition: opacity 1s;  
}

`

module.exports = class Map extends Component {
  constructor (id, state, emit, opts) {
    super(id, state, emit, opts)
    this._log = nanologger('Map')
    this.map = null // capture Map
    this.coords = [0, 0] // null island
    this.markerPrecache = []
    this.parent = {
      state,
      emit
    }
    this.next = opts.next
    this.points = opts.points
    this.location = opts.location || [45.329628, -78.800691]
    this.zoom = opts.zoom || 4.5
    this.bounds = opts.bounds || [
      [57.121, -96.366],
      [40.872, -73.424]
    ]
  }

  createElement () {
    this._createLoading()
    this._createControls()

    return html`
      <div style="position: relative; min-height: 100%; width: 100vw;">
        ${this.loading}
        ${this.controls.render()}
      </div>
    `
  }

  _createMap (el) {
    var corner1 = L.latLng(this.bounds[0])
    var corner2 = L.latLng(this.bounds[1])
    var bounds = L.latLngBounds(corner1, corner2)

    var map = L.map(el, {
      maxBounds: bounds,
      attributionControl: false,
      zoomSnap: 0.5,
      zoomDelta: 0.5
    }).setView(this.location, this.zoom)
    this.map = map

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      minZoom: 4,
      id: 'mapbox.outdoors',
      accessToken: 'pk.eyJ1IjoiYmxhaGFoIiwiYSI6ImNqbjBnaDZxZTNtdnQza3BubmNvZTlpaWgifQ.ijxL23pYuzWJ0v6WEHVhvg'
    }).addTo(map)

    // function onMapClick(e) {
    //   console.log("You clicked the map at", e, map);
    // }

    // map.on('click', onMapClick);

    var icon = new L.Icon({
      iconUrl: './assets/svg/waterbody.svg',
      iconAnchor: [12, 36],
      tooltipAnchor: [0, -36],
      popupAnchor: [0, -36]
    })

    var markers = L.markerClusterGroup({
      iconCreateFunction: cluster => {
        return L.divIcon({
          className: 'bg-transparent bn',
          html: require('./lakeCluster')(cluster.getChildCount())
        })
      },
      maxClusterRadius: 130
    })

    this.markers = markers
    this.map.addLayer(this.markers)
    this.icon = icon

    // bounds and location
    map.fitBounds(bounds)
    map.locate({
      setView: true,
      timeout: 60000,
      maximumAge: 500000
    })
    map.on('locationfound', e => {
      var radius = e.accuracy
      L.marker(e.latlng).addTo(map)
      L.circle(e.latlng, radius).addTo(map)
    })
    map.on('locationerror', err => console.error('location failed', err))

    // controls
    L.control.scale().addTo(map)

    setTimeout(this._addMarkers.bind(this), 500)

    this.created = true
  }

  _addMarker (wb) {
    var select = () => {
      this.selected = wb
      this.parent.emit('catches:adding:update', { wb })
      this._showControls()
    }

    // create tooltip contents
    var tooltip = html`<button>${wb.name.en}</button>`
    tooltip.onclick = select

    // specify tooltip options
    var tooltipOpts = {
      className: tooltipStyle,
      maxWidth: 500,
      permanent: true,
      direction: 'bottom',
      offset: [9, 22]
    }

    var marker = L.marker(wb.loc, {
      icon: this.icon
    }).bindTooltip(tooltip, tooltipOpts)
    this.markerPrecache.push(marker)
  }

  _loadPoints () {
    var self = this
    return new Promise(resolve => {
      var tryLoading = () => {
        var points = self.points
        if (!points && self.parent.state.data) points = self.parent.state.data.wb
        if (points) {
          self.points = points
          return resolve(points)
        } else {
          setTimeout(100, tryLoading)
        }
      }
      tryLoading()
    })
  }

  _addMarkers () {
    var self = this
    self._loadPoints().then(() => {
      Object.keys(self.points).forEach(wbid => {
        var wb = self.points[wbid]
        wb.id = wbid
        self._addMarker(wb)
      })
      self.markers.addLayers(self.markerPrecache, {
        chunkedLoading: true
      })
      self.map.invalidateSize(true)
      setTimeout(() => self._dismissLoading(), 300)
    })
  }

  _createLoading () {
    var loading = html`
    
    <div class="${loadingStyle}">
      <h3>loading map data</h3>
      ${require('../../utils/loading')()}
    </div>
    
    `
    this.loading = loading
  }

  _dismissLoading () {
    this.loading.style.opacity = 0
    setTimeout(() => {
      this.loading.remove()
    }, 1050)
  }

  _createControls () {
    this.controls = this.parent.state.cache(Popover, 'lakemap-controls-popover')
    if (this.element && !this.controls.element) {
      this.controls.hide()
      this.element.appendChild(this.controls.render())
    }
  }

  _showControls () {
    if (!this.selected) return
    this._createControls()
    var self = this
    var confirm = button(self.parent.state, self.parent.emit, {
      label: 'yes',
      classes: 'w-40',
      onclick: () => {
        self.next({
          wb: self.selected
        })
        self._dismissControls()
      }
    })
    var cancel = button(self.parent.state, self.parent.emit, {
      label: 'no',
      classes: 'w-40',
      onclick: () => self._dismissControls()
    })
    var controlcontent = html`
    
    <div class="flex flex-column f3" style="justify-content: center;">
      <div><p class="pv1">Did you fish at ${this.selected.name.en}?</p></div>
      <div class="flex flex-row" style="justify-content: space-evenly; margin-bottom: 20px;">${confirm}${cancel}</div>
    </div>

    `
    this.controls.show({ content: controlcontent })
  }

  _dismissControls () {
    this.selected = null
    this.controls.hide()
  }

  update () {
    return !(this.map)
  }

  beforerender (el) {
    this._createMap(el)
  }
}