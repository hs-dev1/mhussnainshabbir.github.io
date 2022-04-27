'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b7ddc2974d0604dd42ae27e1ebd61e98",
"assets/assets/fonts/BebasNeue.ttf": "54413459a5adf3f82686db50595cba5a",
"assets/assets/images/aboutApplication.png": "2bc921430c3ed1a8dfd710c0bee41e80",
"assets/assets/images/barbeque_logo.png": "b797dd610ed749004d13d9ee4d3b2cfe",
"assets/assets/images/bar_location.png": "f7f28c0f601bc971600c3eca5404482e",
"assets/assets/images/camera_bg.png": "b2f7b318cf73e8f4a553488c4f736db1",
"assets/assets/images/change_password_image.png": "859c747394747ba130047e5e02ed0230",
"assets/assets/images/confetti.png": "0b45b2bccfb1a88cd5858cccfd12b559",
"assets/assets/images/congratulationLogo.png": "8bfe269fcb70bd7be8fe39b2937ff6bd",
"assets/assets/images/crewluv_logo_transparent.png": "497a1844582ef64d7536f9d75e165ec1",
"assets/assets/images/crew_luv.png": "b86e1852fc327714e48102a974e3f17b",
"assets/assets/images/dash_board.png": "5f8cafcdc4fbfa793451f1e0f0469f60",
"assets/assets/images/email_icon.png": "bad500082ffc729ae180d75b17a0218b",
"assets/assets/images/eye_icon.png": "9d8c669ccc7edcff82106547b64507f1",
"assets/assets/images/forgot_password_image.png": "b423e1e74ed18f9dd0db3201e6ad82ef",
"assets/assets/images/fullNameIcon.png": "7ef591c63c7ebead9f4df8fe284aac44",
"assets/assets/images/gathering.png": "3c96e331e6534a7882a4453e20705e28",
"assets/assets/images/icon_event.png": "76c2f1b6d796a9b0c623e998ebc47c66",
"assets/assets/images/icon_event_2.png": "6521920958772ed048103bf9e5df675d",
"assets/assets/images/icon_people.png": "e3b4bd5a989ebc106a6cd6b3db4d2290",
"assets/assets/images/image_1.png": "71d165991602d711422ac9bcf2f99983",
"assets/assets/images/info_button.png": "1df62018c2d01219b28abddd19f6013a",
"assets/assets/images/logout.png": "f12d391b17e0412a5e2f42dca9fa984a",
"assets/assets/images/logout2.png": "a9ec894df6396349ce13b4a8ba5a6419",
"assets/assets/images/logout_1.png": "e832fe6e1002674047d4430cb1152384",
"assets/assets/images/minimize.png": "ec11f93efcaa9ca237b367495cd37921",
"assets/assets/images/no_event.png": "9b821a19b8112df563c3e23a33c49848",
"assets/assets/images/no_ticket.png": "f7d02036dec937e0a666d680b9981460",
"assets/assets/images/otp_image.png": "7398cbe7295eabedb269a93af682dc80",
"assets/assets/images/people.png": "172a1b8953abb618b84157ee1e378b8a",
"assets/assets/images/plus.png": "0ea88cac9063e5ca69d67bb33e20beb6",
"assets/assets/images/premium_sub_logo.png": "5b851c4478a5dd3ae60cb4ffa99a6a84",
"assets/assets/images/private.png": "288e23bb3e207efeee2c13b905112c67",
"assets/assets/images/quit.png": "317495fe8a088de55f355af84b0de7d3",
"assets/assets/images/receipt.png": "3bb4cd8742d2ff8b59c2a847bfb4376d",
"assets/assets/images/res_location.png": "cf65caa1800344d651f9762f75c01dfc",
"assets/assets/images/settings.png": "2e57052b3b9a214df2f2fef1eff6248b",
"assets/assets/images/splash.gif": "1ef18e8e6ee61c9422632efc41024214",
"assets/assets/images/splashLogo.png": "8acac7587b01bd915dcc35d4901ca1c0",
"assets/assets/images/subscription.png": "c3d190dc6c8d9dd41b2e56d4cc1e0365",
"assets/assets/images/tick.png": "e52f66ce652c5647584715958e239052",
"assets/assets/images/tickets.png": "b7a2b6363fb101ce15df0939010474a1",
"assets/assets/translations/en.json": "41dd64d8393e3528e6749b5af408ff98",
"assets/FontManifest.json": "2925f17b036f844d8e42ff3efb302520",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "102980e61c46fe9d545ade8f9f66c459",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "42e6d69fca2b8bcfda6efcba71da1407",
"icons/Icon-192.png": "4366635dfa11e4bb0421bed830241f26",
"icons/Icon-512.png": "95859894edcd5ddac008dfd9f3c2c8a3",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b95d70751967d2a26c0340effa2da76a",
"/": "b95d70751967d2a26c0340effa2da76a",
"main.dart.js": "1e0ce5f7cbd3a3ca4af6dbebddd735a2",
"manifest.json": "63afffcc89088ce2d7352f8f2d5545b0",
"version.json": "f741e04b53e42865dfd0c82343a39873"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
