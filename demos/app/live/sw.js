!function(){var s=["5134dde8632a48a8/bundle.js","4c1fd676ad8759be/bundle.css","assets/data/causes.json.bz2","assets/icon.png","assets/data/adv.json.bz2","assets/data/data.json.bz2","assets/data/pops.json.bz2","assets/data/geof.json.bz2","assets/data/spp.json.bz2","assets/data/wb.json.bz2","assets/svg/MultiLake.svg","assets/svg/back.svg","assets/svg/catch.svg","assets/svg/close.svg","assets/svg/exclamation.svg","assets/svg/fish.svg","assets/svg/meal.svg","assets/svg/settings.svg","assets/svg/waterbody.svg","assets/svg/waterbody_blank.svg","manifest.json"];self.addEventListener("fetch",function(s){s.respondWith(self.caches.match(s.request).then(function(e){return e||self.fetch(s.request)}))}),self.addEventListener("install",function(e){e.waitUntil(self.caches.open("1.0.0").then(function(e){return e.addAll(s)}))}),self.addEventListener("activate",function(s){s.waitUntil(self.caches.keys().then(function(s){return Promise.all(s.map(function(e,t){if("1.0.0"!==s[t])return self.caches.delete(s[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map