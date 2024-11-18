import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_ICqH8MqkAPgWDraPV-scNXulDDc2edM",
  authDomain: "reactjsmillannicolai.firebaseapp.com",
  projectId: "reactjsmillannicolai",
  storageBucket: "reactjsmillannicolai.firebasestorage.app",
  messagingSenderId: "833953312568",
  appId: "1:833953312568:web:3a744b9cd3d853c7525bcd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)