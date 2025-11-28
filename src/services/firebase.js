// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChRFYG9mgpzZSMe79C_jjzaeomvrysHyk",
  authDomain: "coursecode-fbc07.firebaseapp.com",
  projectId: "coursecode-fbc07",
  storageBucket: "coursecode-fbc07.firebasestorage.app",
  messagingSenderId: "681599963604",
  appId: "1:681599963604:web:8b52d07cf07582ce188641",
  measurementId: "G-949QEFQM5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
