// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi6wZSQMrzA4BApyh0jTCL0-8YVGXESq4",
  authDomain: "pantry-tracker-c2c7c.firebaseapp.com",
  projectId: "pantry-tracker-c2c7c",
  storageBucket: "pantry-tracker-c2c7c.appspot.com",
  messagingSenderId: "1069476432087",
  appId: "1:1069476432087:web:566c9089c3d26a6d844892",
  measurementId: "G-Q1WKWJEP9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export {firestore};