// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{ getAuth } from'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU2_WwkTErdiTM3yidSx9NGdsjNj-dep0",
  authDomain: "your-car-inventory-2022.firebaseapp.com",
  projectId: "your-car-inventory-2022",
  storageBucket: "your-car-inventory-2022.appspot.com",
  messagingSenderId: "755427390009",
  appId: "1:755427390009:web:8e5cf1f5a9f432e2e0d3e8",
  measurementId: "G-HDLGYVV0CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;