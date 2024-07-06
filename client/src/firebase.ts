// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "quiz-app-akash.firebaseapp.com",
  projectId: "quiz-app-akash",
  storageBucket: "quiz-app-akash.appspot.com",
  messagingSenderId: "941126663028",
  appId: "1:941126663028:web:1b25ca94812aa422a94a21",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
