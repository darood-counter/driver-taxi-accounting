const CACHE_NAME = 'driver-taxi-pwa-v1';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// Keep the live website as the source of truth. We intentionally do not
// cache the application's HTML/JS/Firebase data so website updates can
// appear without requiring a Play Store release.
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request));
});
