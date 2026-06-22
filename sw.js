const CACHE_NAME = 'sache-v1';
const urlsToCache = [
  '/DATE1/',
  '/DATE1/index.html',
  '/DATE1/manifest.json',
  '/DATE1/IMG_20260623_013436.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
