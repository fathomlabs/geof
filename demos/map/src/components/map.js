var html = require('choo/html')
var Component = require('choo/component')

module.exports = class Map extends Component {
  constructor (id, state, emit) {
    super(id)
    this.local = state.components[id] = {}
    this.lakes = {}
    this.updatedAt = 0
    this.emit = emit
  }

  load (element) {
    this.created = false
  }

  _createMap () {
    var corner1 = L.latLng(57.121, -96.366)
    var corner2 = L.latLng(40.872, -73.424)
    var bounds = L.latLngBounds(corner1, corner2);

    var map = L.map('map', {
      maxBounds: bounds,
      attributionControl: false
    }).setView([45.329628, -78.800691], 11);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      minZoom: 5,
      id: 'mapbox.outdoors',
      accessToken: 'pk.eyJ1IjoiYmxhaGFoIiwiYSI6ImNqbjBnaDZxZTNtdnQza3BubmNvZTlpaWgifQ.ijxL23pYuzWJ0v6WEHVhvg'
    }).addTo(map);

    // function onMapClick(e) {
    //   console.log("You clicked the map at", e, map);
    // }

    // map.on('click', onMapClick);

    var icon = new L.Icon({
      iconUrl: './assets/waterbody.svg',
      iconAnchor: [12, 36],
      tooltipAnchor: [0, -36],
      popupAnchor: [0, -36]
    })

    var markers = L.markerClusterGroup({
      iconCreateFunction: function (cluster) {
        return L.divIcon({
          html: require('./lakeCluster')(cluster.getChildCount())
        });
      },
      maxClusterRadius: 130
    });

    this.icon = icon
    this.markers = markers
    this.map = map

    map.addLayer(markers);
    map.setView([50.000, -85.000], 6);
    map.fitBounds(bounds);
    this.created = true
  }

  _addmarker (lake) {
    var select = () => {
      console.log('lake clicked:', lake)
      this.emit('lake:select', lake)
    }

    // create tooltip contents
    var tooltip = html `<button>${lake.en}</button>`

    tooltip.onclick = select

    // specify tooltip options
    var tooltipOpts = {
      className: 'waterbody-tooltip',
      maxWidth: 500,
      permanent: true,
      direction: 'bottom',
      offset: [9, 22]
    }

    var marker = L.marker([lake.lat, lake.long], {
      icon: this.icon
    }).bindTooltip(tooltip, tooltipOpts)

    this.markers.addLayer(marker)
  }

  update (state) {
    if (state.map.show &! this.created) {
      this._createMap()
    }

    var lakes = state.lakes
    if (lakes.data && lakes.updatedAt && lakes.updatedAt > this.updatedAt) {
      Object.keys(lakes.data).forEach(lakeid => {
        if (this.lakes[lakeid]) return

        this.lakes[lakeid] = true
        this._addmarker(lakes.data[lakeid])
      })
      this.updatedAt = Date.now()
    }
    
    return false
  }

  createElement () {
    return html`
    
    <div style="height: 100%; width: 100%;">
      <div id="map" class="flex items-center justify-center">
        <h1>Map loading...</h1>
      </div>
    </div>
    
    `
  }
}