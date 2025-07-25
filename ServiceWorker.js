
const CACHE_NAME = 'Golf Orbit';
const urlsToCache = [
    '/',
    '/index.html',
    '/Build/e92a539c567c0810cd0e349f019cf4ec.data.unityweb',
    '/Build/002dcfd148e9a8d775a223990dfec544.wasm.unityweb',
    '/Build/83401391d7620cf0e16fd2ee9a39ccd4.framework.js.unityweb',
    '/Build/9853637125e801e9aae48e78dbbdcfca.loader.js',
    '/TemplateData/style.css',
    '/icon-1920x1080.png',
    '/icon-512x512.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
