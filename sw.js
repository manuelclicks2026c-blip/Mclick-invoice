/* Update CACHE_VERSION when publishing a new version. */
const CACHE_VERSION = 'manuelclicks-invoice-v1';
const APP_FILES = ['./', './index.html', './manifest.json', './icon.svg', './logo.jpg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).then(response => {
    if (response && response.ok) { const copy = response.clone(); caches.open(CACHE_VERSION).then(cache => cache.put(event.request, copy)); }
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});
