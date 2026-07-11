const CACHE_NAME = 'sgm-purple-v3';
const ASSETS = [
  'index.html',
  'manifest.json',
  'https://cdn.tailwindcss.com'
];

// Uygulama yüklenirken dosyaları önbelleğe al
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// İnternet yoksa önbellekten dosyaları getir
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
