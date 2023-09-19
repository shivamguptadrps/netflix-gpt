// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT1IWRrH3vagjcXkL0Gwh_J3bbXP3QNuQ",
  authDomain: "netflixgpt-471cd.firebaseapp.com",
  projectId: "netflixgpt-471cd",
  storageBucket: "netflixgpt-471cd.appspot.com",
  messagingSenderId: "763745329140",
  appId: "1:763745329140:web:54aa54ab38027dfdaf23a1",
  measurementId: "G-FF5ZJMTGMK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth();