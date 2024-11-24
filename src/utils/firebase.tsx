import { initializeApp, getApps, getApp } from "firebase/app";
import { getMessaging, Messaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyCs6KQ3EExh9eIA7GfuA_FMycn50iUCDWk",
  authDomain: "gmate-8e2fc.firebaseapp.com",
  projectId: "gmate-8e2fc",
  storageBucket: "gmate-8e2fc.firebasestorage.app",
  messagingSenderId: "789893486428",
  appId: "1:789893486428:web:610d371e7157d8dd98d399",
  measurementId: "G-D6T3K0WDFE",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
let messaging: Messaging;
messaging = getMessaging(app);

export const fetchToken = (setTokenFound: (arg0: boolean) => void) => {
  return getToken(messaging, {
    vapidKey:
      "BAvZFFZAYXsXWsuwYeiOahuBLOw-VudvwPyAy9sT0FCuDOnq0UZro1Z0tk_6_NlGlm_ydFjnC1wchuwgm2yQYvw",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
