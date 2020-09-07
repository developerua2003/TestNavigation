const DO_CACHE = true;
const CACHE_NAME = 'test-nav-pwa-cache-v1';

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
      caches.keys()
          .then(keyList =>
              Promise.all(keyList.map(key => {
                if (!cacheWhitelist.includes(key)) {
                  console.log('Deleting cache: ' + key)
                  return caches.delete(key);
                }
              }))
          )
  );
});

self.addEventListener('install', (event) => {
  if (DO_CACHE) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                const urlsToCache = [
                    "/opened",
                    "/closed"
                ];
                cache.addAll(urlsToCache)
            })
    );
  }
});

// This method is written in the future if we need to get some data from the API
self.addEventListener('fetch', (event) => {
  if (DO_CACHE) {
    event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
    );
  }
});