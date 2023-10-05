// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIETPEAI5_0-8LOQIyvIvE2qiiQaEskmY",
  authDomain: "travel-goru-practice.firebaseapp.com",
  projectId: "travel-goru-practice",
  storageBucket: "travel-goru-practice.appspot.com",
  messagingSenderId: "227721248861",
  appId: "1:227721248861:web:beffae92ea698d99638db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);