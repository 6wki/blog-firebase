import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHYYGWludgvl2qefAuavQeuAob4b4NUQU",
  authDomain: "blog-a4fd3.firebaseapp.com",
  projectId: "blog-a4fd3",
  storageBucket: "blog-a4fd3.appspot.com",
  messagingSenderId: "401586200213",
  appId: "1:401586200213:web:af0404c61bc831f102c59c",
  measurementId: "G-WT3ZE9RL9X",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
