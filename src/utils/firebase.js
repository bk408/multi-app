// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCURu_PVwsnMORzdkefdJpNmasWQcVAfYs",
  authDomain: "multiapp-68763.firebaseapp.com",
  projectId: "multiapp-68763",
  storageBucket: "multiapp-68763.appspot.com",
  messagingSenderId: "740999494047",
  appId: "1:740999494047:web:c2bac3a00920cddcee65aa",
  measurementId: "G-J4YQY3QNCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
