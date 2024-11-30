// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyCs6KQ3EExh9eIA7GfuA_FMycn50iUCDWk",
    authDomain: "gmate-8e2fc.firebaseapp.com",
    projectId: "gmate-8e2fc",
    storageBucket: "gmate-8e2fc.firebasestorage.app",
    messagingSenderId: "789893486428",
    appId: "1:789893486428:web:610d371e7157d8dd98d399",
    measurementId: "G-D6T3K0WDFE",
  };

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});