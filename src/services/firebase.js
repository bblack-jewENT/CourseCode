// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyChRFYG9mgpzZSMe79C_jjzaeomvrysHyk",
  authDomain: "coursecode-fbc07.firebaseapp.com",
  projectId: "coursecode-fbc07",
  storageBucket: "coursecode-fbc07.appspot.com",
  messagingSenderId: "681599963604",
  appId: "1:681599963604:web:8b52d07cf07582ce188641",
  measurementId: "G-949QEFQM5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Function to submit contact form data to Firestore
export const submitContactForm = async (contactData) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...contactData,
      timestamp: new Date(),
    });
    console.log("Contact form submitted with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    return { success: false, error: error.message };
  }
};

export default app;
