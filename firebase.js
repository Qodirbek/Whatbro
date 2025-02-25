import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyChl1yTnnBXLZehIYrIpUQ2IfWKn-T0k3Y",
  authDomain: "whatbro-40613.firebaseapp.com",
  projectId: "whatbro-40613",
  storageBucket: "whatbro-40613.firebasestorage.app",
  messagingSenderId: "749624114326",
  appId: "1:749624114326:web:f6310be55e7a9b983396b7"
};

// Firebase'ni boshlash
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification };
