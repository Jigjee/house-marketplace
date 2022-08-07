import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_b379HsHpIZA-y6YaZrV32qeiK9-FN_Y",
  authDomain: "house-marketplace-app-f374e.firebaseapp.com",
  projectId: "house-marketplace-app-f374e",
  storageBucket: "house-marketplace-app-f374e.appspot.com",
  messagingSenderId: "366814573997",
  appId: "1:366814573997:web:294fbaa80047d87b56dd24",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
