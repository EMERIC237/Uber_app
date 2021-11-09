// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf-G2xG-mw02NqMz1rMfpnrrI1L8MKG5U",
  authDomain: "uber-clone-76fa8.firebaseapp.com",
  projectId: "uber-clone-76fa8",
  storageBucket: "uber-clone-76fa8.appspot.com",
  messagingSenderId: "130371309791",
  appId: "1:130371309791:web:42234584c508dafce5596a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
