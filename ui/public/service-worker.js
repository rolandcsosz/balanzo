const CACHE_NAME = 'balanzo-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('Caching assets...');
        return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
          console.error('Failed to cache assets:', err);
        });
      })
    );
  });


  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached response if found, otherwise fetch from network
        return cachedResponse || fetch(event.request);
      })
    );
  });