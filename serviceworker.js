const version = "0.0.2",
    preCache = "PRECACHE-" + version,
    cacheList = [
        "/",
        "style/default.css",
        "style/cards.css",
        "js/application.js",
        "js/github.js",
        "js/storage.js",
        "js/templates.js",
        "js/serviceworker-register.js"
    ];

/*  Service Worker Event Handlers */
self.addEventListener("install", function(event) {
    console.log("Installing the service worker!");
    self.skipWaiting();
    caches.open(preCache)
        .then(cache => {
            cache.addAll(cacheList);
        });
});

self.addEventListener("activate", function(event) {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                cacheNames.forEach(value => {
                    if(value.indexOf(version) < 0 ) {
                        caches.delete(value);
                    }
                });
                console.log("service worker activated");
                return;
            })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
