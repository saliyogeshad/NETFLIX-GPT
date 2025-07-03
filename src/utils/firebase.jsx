// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfFzveVIHHGH31RNFsgdjJyD4uKq-Ne5w",
  authDomain: "netflixgpt-cb7cd.firebaseapp.com",
  projectId: "netflixgpt-cb7cd",
  storageBucket: "netflixgpt-cb7cd.firebasestorage.app",
  messagingSenderId: "648413735386",
  appId: "1:648413735386:web:bb4cffa3b938c368bbb8e3",
  measurementId: "G-6EK52N25V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//edited from down here
export const auth = getAuth()