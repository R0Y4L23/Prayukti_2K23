import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSENGER_ID,
//   appId:process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCfoD3VWyU3vgkg-i4vgJ3stkvKwH4S1cE",
  authDomain: "prayukti-2k23-a10c0.firebaseapp.com",
  projectId: "prayukti-2k23-a10c0",
  storageBucket: "prayukti-2k23-a10c0.appspot.com",
  messagingSenderId: "892711557472",
  appId: "1:892711557472:web:27480709cca10188556605",
  measurementId: "G-4T6ETC0WDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {  storage, firestore, auth }