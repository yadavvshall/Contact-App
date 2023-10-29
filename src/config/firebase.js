// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPX53KFM1kAWhhE8r7wyHwNDfqREN0WNE",
  authDomain: "vite-contact-21a15.firebaseapp.com",
  projectId: "vite-contact-21a15",
  storageBucket: "vite-contact-21a15.appspot.com",
  messagingSenderId: "864603208554",
  appId: "1:864603208554:web:f62b2ee3429b7a69a70313",
  measurementId: "G-773HXECTQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);