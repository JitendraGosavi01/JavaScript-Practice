// Cache the application shell and assets during installation
const cacheName = "v1";
self.addEventListener("install", function (event) {
  console.log("Service Worker: Installed");
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching files");
        cache.addAll([
          "Home.html",
          "index.html",
          "About.html",
          "index.js",
          "style.css",
        ]);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            console.log("Service Worker: Clearing old cached versions");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Serve cached assets or fetch them from the network
// self.addEventListener("fetch", function (event) {
//   console.log("Service Worker: Fetched");

//   event.respondWith(fetch(event.request).catch(() => caches.match(e.request)));
// });
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
