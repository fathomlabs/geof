!function(){var s=["c360e067632eb1a1/bundle.js","1a81b9b2d77305fc/bundle.css","assets/icon.png","assets/splash.png","assets/data/adv.json.bz2","assets/data/causes.json.bz2","assets/data/data.json.bz2","assets/data/geof.json.bz2","assets/data/pops.json.bz2","assets/data/spp.json.bz2","assets/data/wb.json.bz2","assets/svg/back.svg","assets/svg/MultiLake.svg","assets/svg/catch.svg","assets/svg/close.svg","assets/svg/exclamation.svg","assets/svg/fish.svg","assets/svg/meal.svg","assets/svg/settings.svg","assets/svg/waterbody.svg","assets/svg/waterbody_blank.svg","assets/leaflet/leaflet-src.esm.js.map","assets/leaflet/leaflet-src.esm.js","assets/leaflet/leaflet-src.js","assets/leaflet/leaflet.css","assets/leaflet/leaflet-src.js.map","assets/leaflet/leaflet.js.map","assets/leaflet/leaflet.js","assets/leaflet/leaflet.zip","assets/leaflet/images/layers-2x.png","assets/leaflet/images/layers.png","assets/leaflet/images/marker-icon-2x.png","assets/leaflet/images/marker-icon.png","assets/leaflet/images/marker-shadow.png","manifest.json"];self.addEventListener("fetch",function(s){s.respondWith(self.caches.match(s.request).then(function(e){return e||self.fetch(s.request)}))}),self.addEventListener("install",function(e){e.waitUntil(self.caches.open("1.0.0").then(function(e){return e.addAll(s)}))}),self.addEventListener("activate",function(s){s.waitUntil(self.caches.keys().then(function(s){return Promise.all(s.map(function(e,a){if("1.0.0"!==s[a])return self.caches.delete(s[a])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map