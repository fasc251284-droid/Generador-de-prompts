/* Generador de Prompts · Colegio Juan Pablo II
   Guarda la app en el teléfono para que abra sin conexión.
   Al publicar una versión nueva, sube el número de VERSION. */
const VERSION = 'prompts-jp2-v2';
const ARCHIVOS = ['./', './index.html', './manifest.json', './apple-touch-icon.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(claves => Promise.all(claves.filter(k => k.startsWith('prompts-jp2-') && k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // La página: primero la red (para recibir actualizaciones); sin señal, la copia guardada.
  if (req.mode === 'navigate'){
    e.respondWith(
      fetch(req)
        .then(r => { const copia = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copia)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Íconos y manifest: primero la copia guardada.
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
