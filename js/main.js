window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(swReg) {
    console.log('Service Worker is registered', swReg);

        swRegistration = swReg;
      });
  }

  function showNotification() {
      Notification.requestPermission(function(result) {
        if (result === 'granted') {
          /*navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification('Vibration Sample', {
              body: 'Buzz! Buzz!',
              icon: '../images/touch/chrome-touch-icon-192x192.png',
              vibrate: [200, 100, 200, 100, 200, 100, 200],
              tag: 'vibration-sample'
            });
            console.log('The service worker is serving the asset.');
          });
          window.alert("hahaha");*/
          navigator.serviceWorker.getRegistration()
         .then((reg) => {
                reg.showNotification('Vibration Sample', {
                  body: 'Buzz! Buzz!aa',
                  icon: '../images/touch/chrome-touch-icon-192x192.png',
                  vibrate: [200, 100, 200, 100, 200, 100, 200],
                  tag: 'vibration-sample'
                });
           });
        }
        /*this.worker.showNotification('Vibration Sample', {
          body: 'Buzz! Buzz!aa',
          icon: '../images/touch/chrome-touch-icon-192x192.png',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample'
        });*/
      });

    }

    document.getElementById("demo").addEventListener("click", showNotification);
}
