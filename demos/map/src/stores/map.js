module.exports = store

function store (state, emitter) {
  emitter.on('DOMContentLoaded', function () {
    async function loadLakes() {
      var corner1 = L.latLng(57.121, -96.366)
      var corner2 = L.latLng(40.872, -73.424)
      var bounds = L.latLngBounds(corner1, corner2);

      var map = L.map('map', {
        maxBounds: bounds
      }).setView([45.329628, -78.800691], 11);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '',
        maxZoom: 18,
        minZoom: 5,
        id: 'mapbox.outdoors',
        accessToken: 'pk.eyJ1IjoiYmxhaGFoIiwiYSI6ImNqbjBnaDZxZTNtdnQza3BubmNvZTlpaWgifQ.ijxL23pYuzWJ0v6WEHVhvg'
      }).addTo(map);

      function onMapClick(e) {
        console.log("You clicked the map at", e, map);
      }

      map.on('click', onMapClick);

      var Icon = new L.Icon({
        iconUrl: './assets/waterbody.svg',
        iconAnchor: [12, 36],
        tooltipAnchor: [0, -36],
        popupAnchor: [0, -36]
      })

      function status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else {
          return Promise.reject(new Error(response.statusText))
        }
      }

      function json(response) {
        return response.json()
      }

      var lakes = await fetch('./assets/wbs.json').then(status).then(json)

      var markers = L.markerClusterGroup({
        iconCreateFunction: function (cluster) {
          return L.divIcon({
            html: require('../components/lakeCluster')(cluster.getChildCount())
          });
        },
        maxClusterRadius: 130
      });

      var addmarker = lakeid => {
        var lake = lakes[lakeid]

        // create popup contents
        var popup = `${lake.en}`

        // specify popup options
        var popupOpts = {
          'maxWidth': '500',
          'className': 'waterbody-popup'
        }

        var marker = L.marker([lake.lat, lake.long], {
          icon: Icon
        }).bindPopup(popup, popupOpts)

        markers.addLayer(marker)
      }

      Object.keys(lakes).forEach(addmarker)
      map.addLayer(markers);
    }

    loadLakes()
  })
}
