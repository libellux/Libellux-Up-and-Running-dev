/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8a3d44db646c3188e72c05523b5f4bbe"
  },
  {
    "url": "assets/css/0.styles.6754bbb3.css",
    "revision": "2075a05b4690a599adfff22769d41349"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bf5d3006.js",
    "revision": "730d475ddf2da731a301c32f11507589"
  },
  {
    "url": "assets/js/11.1681cb7a.js",
    "revision": "454e76a7f2e21d6af3a7d6f42d04b723"
  },
  {
    "url": "assets/js/12.cad29bba.js",
    "revision": "043697989e61c1ab1ea132a4e336e9bf"
  },
  {
    "url": "assets/js/13.2050edbf.js",
    "revision": "e9c61e4fb563e3f3139b622981b653c7"
  },
  {
    "url": "assets/js/14.cab73569.js",
    "revision": "bf631f8b6e941f13ff7fe5a2d463c9b6"
  },
  {
    "url": "assets/js/15.14b94db6.js",
    "revision": "f65085bdcd5a0411310b645239607752"
  },
  {
    "url": "assets/js/16.09a79b79.js",
    "revision": "529ba12f8b852951ad4936ae1dbfe379"
  },
  {
    "url": "assets/js/17.4d97e6e8.js",
    "revision": "566f28ade4de112149e4233343ba5574"
  },
  {
    "url": "assets/js/18.c09cb1e7.js",
    "revision": "162c1be4fdef260ff7b7851fb577af54"
  },
  {
    "url": "assets/js/19.06783b9f.js",
    "revision": "cd4bbc91934fe31d214389e3eb372871"
  },
  {
    "url": "assets/js/2.a66976ed.js",
    "revision": "0f19688b7b7c9e2b4120772863afa670"
  },
  {
    "url": "assets/js/20.d51954bc.js",
    "revision": "46493be08719c3ba3bee1633c5c96973"
  },
  {
    "url": "assets/js/3.615db90f.js",
    "revision": "74deffc30ed7c40dce274d91f87f578d"
  },
  {
    "url": "assets/js/4.24a42f63.js",
    "revision": "0e708fed4b9a2d4618b81666d404f667"
  },
  {
    "url": "assets/js/5.4dd64674.js",
    "revision": "13c76b3b8eb80086c371afec64c1bd38"
  },
  {
    "url": "assets/js/6.964cf5dd.js",
    "revision": "9e3026a259ee8753a106a0f13e486257"
  },
  {
    "url": "assets/js/7.30923b80.js",
    "revision": "4f15c01a2aaf7d7ac39788fba75e3a59"
  },
  {
    "url": "assets/js/8.af53dab0.js",
    "revision": "8f60158d7f14286c87c7ec28917ae053"
  },
  {
    "url": "assets/js/9.1d8ef870.js",
    "revision": "54764e30e50f68d2e110c73e130867e1"
  },
  {
    "url": "assets/js/app.2804dd1a.js",
    "revision": "de9bf0d5c76889902fcc0171d41ed207"
  },
  {
    "url": "graylog/index.html",
    "revision": "f6ee997361ef623a10974418d0b09d34"
  },
  {
    "url": "img/centos.png",
    "revision": "eceb88fbdcfbb06c8ddcdcdbc0d9feb4"
  },
  {
    "url": "img/icons/1200x627.png",
    "revision": "4ed965ba2daf1f2907b5696f47949426"
  },
  {
    "url": "img/icons/144x144.png",
    "revision": "c5abed2721558a98cd5adb1b28d5f032"
  },
  {
    "url": "img/icons/1500x500.png",
    "revision": "cb77b3aa40b6fbdd9a25ecb8fed580d3"
  },
  {
    "url": "img/icons/192x192.png",
    "revision": "b8853a3b71b3a7e79c116d8d2dc8fe99"
  },
  {
    "url": "img/icons/256x256.png",
    "revision": "64014871dd4b25592423d91c4a007f3a"
  },
  {
    "url": "img/icons/384x384.png",
    "revision": "f5837cc63fdd26d96461a55d61fb1944"
  },
  {
    "url": "img/icons/4096x4096.png",
    "revision": "9e79bb6db785b2243380efb2546cf841"
  },
  {
    "url": "img/icons/48x48.png",
    "revision": "c1077dc498ae97b7f5209da9277579e3"
  },
  {
    "url": "img/icons/512x512.png",
    "revision": "0a91e0a9adeee05b4a0feeadd06574dd"
  },
  {
    "url": "img/icons/72x72.png",
    "revision": "b36cd3c87f00f07092b6442b7e00b0a6"
  },
  {
    "url": "img/icons/96x96.png",
    "revision": "2907ea3e33e14a352ba8d282e0f32cd5"
  },
  {
    "url": "img/mmonit/mmonit1.png",
    "revision": "1665c0ebb4ce463c59df456bda2e5ee5"
  },
  {
    "url": "img/ossec/512x512.png",
    "revision": "bee855a078b5cf7941dcc4c2838ddf1d"
  },
  {
    "url": "img/ossec/cloudflare_token.png",
    "revision": "c36576440c64fceb89e53cf4f8dd1921"
  },
  {
    "url": "img/ubuntu.png",
    "revision": "f53554b67ad3f94dfb78b2dbcd6630d3"
  },
  {
    "url": "img/win98/canopus.jpg",
    "revision": "713f202c27170220c11ed8dd8d8c1258"
  },
  {
    "url": "img/win98/harddrive.jpg",
    "revision": "a315cb29db3876a2105cc4cd2a3e25e9"
  },
  {
    "url": "img/win98/livedrive.jpg",
    "revision": "0fe14c326242e1d82bed8efb7f0725e3"
  },
  {
    "url": "img/win98/memory.jpg",
    "revision": "01314af32ed413b62944e236664cef20"
  },
  {
    "url": "img/win98/motherboard.jpg",
    "revision": "b0d4ebf37a37d9013ddb6ae1503b22dc"
  },
  {
    "url": "img/win98/newq.jpg",
    "revision": "081147848fc2d1e5202e545d544e07fd"
  },
  {
    "url": "img/win98/pcdvd.jpg",
    "revision": "c4e05a218ebaab64750da9fd4ef9ee73"
  },
  {
    "url": "img/win98/processor.jpg",
    "revision": "bb1250126cc6b2a90f944bde2ebb7d7e"
  },
  {
    "url": "img/win98/psu.jpg",
    "revision": "d5907d3d9e55849f9186daaaaa0964b2"
  },
  {
    "url": "img/win98/soundblaster.jpg",
    "revision": "dab0ec6f7aadd338ef4628e67dae025e"
  },
  {
    "url": "img/win98/voodoo2.jpg",
    "revision": "6d957763e3279acf4608a680f21068a8"
  },
  {
    "url": "img/win98/voodoo2fan.jpg",
    "revision": "2b9e1dc0054358c95026b7b7816a70b1"
  },
  {
    "url": "index.html",
    "revision": "d75a187c047e2cc0b10146621ea63319"
  },
  {
    "url": "intrusion/index.html",
    "revision": "05f8e317ead083eb8fb5f4ed20fbee0b"
  },
  {
    "url": "jira/index.html",
    "revision": "6e21eed0eea2efcc013bc92d59803e5d"
  },
  {
    "url": "mmonit/index.html",
    "revision": "6f12536479e9bdd221e7a3b66240b5d0"
  },
  {
    "url": "openvas/index.html",
    "revision": "feffd99bb6f4ceebbcabde4b63fda5f3"
  },
  {
    "url": "ossec/index.html",
    "revision": "4aacdc4a9cad3f53d86df38a2190c376"
  },
  {
    "url": "pcp/index.html",
    "revision": "9a668f64f3f4902a6bba3813a25fb424"
  },
  {
    "url": "psad/index.html",
    "revision": "5650f5a7986db878376bf8d6acd5094c"
  },
  {
    "url": "rsyslog/index.html",
    "revision": "dc46f3a20d7065c1adfe11f7904d10c8"
  },
  {
    "url": "tags.html",
    "revision": "e16abc9903bc50555297288c4b8b3d4b"
  },
  {
    "url": "wireguard/index.html",
    "revision": "746d0b8c22585e6c68527adef4d53c01"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
