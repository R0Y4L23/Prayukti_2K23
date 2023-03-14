import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc5y7WxVKuT3WgDqE6MI_uNfnVTHIeHY8",
  authDomain: "prayukti-2k23.firebaseapp.com",
  projectId: "prayukti-2k23",
  storageBucket: "prayukti-2k23.appspot.com",
  messagingSenderId: "894564617117",
  appId: "1:894564617117:web:197fecccf36f2ca4743d74",
  measurementId: "G-V10S114JSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {  storage, firestore, auth }