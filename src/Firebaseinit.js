
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB9jSRBnRg4eVA-NeBmZ-uk7Xbbx7V-Kg",
  authDomain: "login-signup-2-20a5b.firebaseapp.com",
  projectId: "login-signup-2-20a5b",
  storageBucket: "login-signup-2-20a5b.firebasestorage.app",
  messagingSenderId: "130969303540",
  appId: "1:130969303540:web:09bca2a77058400f9be1a1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);