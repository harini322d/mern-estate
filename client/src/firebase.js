// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIRAEBASE_API_KEY,
  authDomain: "mern-estate-4e781.firebaseapp.com",
  projectId: "mern-estate-4e781",
  storageBucket: "mern-estate-4e781.firebasestorage.app",
  messagingSenderId: "784531707263",
  appId: "1:784531707263:web:ccee01a7379a8ad3dcb64a"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);