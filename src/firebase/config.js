// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAExElPogtryia6cQohB1tBj1eXhhV2eW4",
  authDomain: "user-contact-edit-delete.firebaseapp.com",
  projectId: "user-contact-edit-delete",
  storageBucket: "user-contact-edit-delete.appspot.com",
  messagingSenderId: "787818721628",
  appId: "1:787818721628:web:eebaea6ea75908bb961199",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
