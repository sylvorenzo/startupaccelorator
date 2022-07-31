// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVnMn9XWuQsM-2jkjzZanVJfLWGQpCqL8",
  authDomain: "startupaccelorator.firebaseapp.com",
  projectId: "startupaccelorator",
  storageBucket: "startupaccelorator.appspot.com",
  messagingSenderId: "690958363788",
  appId: "1:690958363788:web:42c618926c9367181c9fa9",
  measurementId: "G-G8BD6T009K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}