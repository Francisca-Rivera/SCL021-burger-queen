// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOd7Iy7ma0DYutsprqTcSlX-uYF1fLBjo",
  authDomain: "burger-cat-s.firebaseapp.com",
  projectId: "burger-cat-s",
  storageBucket: "burger-cat-s.appspot.com",
  messagingSenderId: "217223723501",
  appId: "1:217223723501:web:6f760a97dbb9ae9f014fe4",
  measurementId: "G-Z6FXPFW579",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
