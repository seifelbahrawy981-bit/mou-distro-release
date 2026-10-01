const CACHE = 'mou-distro-v1';
const ASSETS = ['./', './index.html', './style.css', './app.js', './assets/mou-logo-pearl.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(found => found || fetch(event.request))));
