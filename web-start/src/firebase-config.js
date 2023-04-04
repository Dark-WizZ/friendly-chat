/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
    apiKey: "AIzaSyDxFhEczN12nKQB_BagEie0Wbs_Y1MpDPM",

    authDomain: "friendlychat-e7203.firebaseapp.com",

    projectId: "friendlychat-e7203",

    storageBucket: "friendlychat-e7203.appspot.com",

    messagingSenderId: "314757998911",

    appId: "1:314757998911:web:031c6736a4d222aa7b0b8a"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

import { initializeApp } from "firebase/app";

// const initializeApp = require("https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js");

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  const firebaseConfig = {

    apiKey: "AIzaSyDxFhEczN12nKQB_BagEie0Wbs_Y1MpDPM",

    authDomain: "friendlychat-e7203.firebaseapp.com",

    projectId: "friendlychat-e7203",

    storageBucket: "friendlychat-e7203.appspot.com",

    messagingSenderId: "314757998911",

    appId: "1:314757998911:web:031c6736a4d222aa7b0b8a"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);