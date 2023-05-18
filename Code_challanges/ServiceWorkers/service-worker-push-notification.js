// service-worker.js

// Listen for push notification events
self.addEventListener("push", function (event) {
  var data = event.data.json();
  var title = data.title;
  var options = {
    body: data.message,
    icon: "/images/notification-icon.png",
    // Additional options...
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
