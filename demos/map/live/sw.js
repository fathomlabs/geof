!function(){var e=["9b579b2a8e10609e/bundle.js","e2cb6fd92adb34f1/bundle.css","assets/MultiLake.svg","assets/icon.png","assets/wbs.json","assets/waterbody.svg","manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.0.0").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,t){if("1.0.0"!==e[t])return self.caches.delete(e[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map