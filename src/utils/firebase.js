// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyD2XljXTT0jAH36PIgnrbgUjaFmyVP3ftI",
     authDomain: "sohithfolio.firebaseapp.com",
     projectId: "sohithfolio",
     storageBucket: "sohithfolio.appspot.com",
     messagingSenderId: "830942047557",
     appId: "1:830942047557:web:151120faffd147d7dde22c",
     measurementId: "G-J0V5Y4K1X2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);