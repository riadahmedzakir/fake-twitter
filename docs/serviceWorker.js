const cachedName = "fake-twitter-version-1";

const urlToCache = [
  "https://raw.githubusercontent.com/riadahmedzakir/fake-twitter/master/docs/assets/background-01.jpg"
]

self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");

  e.waitUntil(
    caches.open(cachedName)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.add(urlToCache);
      })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service Worker Activated");

  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cachedName) {
            console.log("Cached Service worker is being cleared");
            return caches.delete(cache);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("fetching service worker");
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});
