// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChl1yTnnBXLZehIYrIpUQ2IfWKn-T0k3Y",
  authDomain: "whatbro-40613.firebaseapp.com",
  projectId: "whatbro-40613",
  storageBucket: "whatbro-40613.firebasestorage.app",
  messagingSenderId: "749624114326",
  appId: "1:749624114326:web:f6310be55e7a9b983396b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithPhoneNumber, RecaptchaVerifier };
