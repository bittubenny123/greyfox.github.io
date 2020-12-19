
const cacheName = 'v1';
const cacheAssets = ['index.html',
'customers.js',
'app.js',
'footer.html',
'nav.html',
'style.css',
'./bootstrap.bundle.min.js',
'./appml.js',
'./bootstrap.min.css'
            ];


//install event
self.addEventListener('install', e => {
    console.log("install event triggered");
    
    e.waitUntil(

        caches.open(cacheName)
        .then( cache => {
            console.log("service worker : caching files");
            cache.addAll(cacheAssets);
        })
        .then( ()=> self.skipWaiting())
    );

});

//activate event
self.addEventListener('activate', e => {

    console.log("activate event triggered");


    e.waitUntil(

        caches.keys()
        .then(cacheNames => {

            return Promise.all(
                cacheNames.map( cache => {
                
                    if(cache !== cacheName){
                        console.log("clearing old cache");
                        caches.delete(cache);
                    }
            })
            );

        })
    );
});


//fetch event
self.addEventListener('fetch', e => {

    console.log("fetch event")

    e.respondWith(
        fetch(e.request)
        .catch( () => {

            caches.match(e.request);
        })
    );
})