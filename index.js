setInterval(function notify() {
  Notification.requestPermission(function () {
    var notification = new Notification("Melhore sua Postura", {
      body: "Hora de arrumar a postura",
    });
    notification.onclick = function () {
      window.open("https://www.youtube.com/watch?v=6-Mxh62G7a4");
    };
  });
}, 900000);
