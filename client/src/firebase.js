// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-estate-f50ec.firebaseapp.com",
  projectId: "mern-estate-f50ec",
  storageBucket: "mern-estate-f50ec.appspot.com",
  messagingSenderId: "666519103883",
  appId: "1:666519103883:web:3b8a247074ec28b212278e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
