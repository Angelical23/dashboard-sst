// Service worker mínimo: não guarda nada em cache (o sistema sempre abre a versão mais nova e os dados vêm do Supabase).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
