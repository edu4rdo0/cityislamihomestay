// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Tambahkan Firestore!

const firebaseConfig = {
  apiKey: "AIzaSyA8L8t-XBFxY8vIQ4_NTWLYZ6Q4Z41vqfI",
  authDomain: "cityislami.firebaseapp.com",
  projectId: "cityislami",
  storageBucket: "cityislami.firebasestorage.app",
  messagingSenderId: "818400101018",
  appId: "1:818400101018:web:bcfeb19089568c23419523",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app); // ✅ Inisialisasi Firestore

export { auth, googleProvider, db }; // ✅ Export db juga!