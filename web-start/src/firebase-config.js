// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';

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
  apiKey: "AIzaSyBnbEAMwX1PNg9j76HMH1YoSpc25Eosndc",
  authDomain: "friendlychat-434d8.firebaseapp.com",
  projectId: "friendlychat-434d8",
  storageBucket: "friendlychat-434d8.appspot.com",
  messagingSenderId: "1015608791166",
  appId: "1:1015608791166:web:38700aa7bc5081c876082f",
  measurementId: "G-HGYPTGPYPE"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
