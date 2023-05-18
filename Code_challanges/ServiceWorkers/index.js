if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw_caching.js");
  console.log("Service Worker: Registered");
}
