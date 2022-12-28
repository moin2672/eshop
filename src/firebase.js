// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhZFtbTUX83NvR7JGXfnbzja1_nwKsPaQ",
  authDomain: "moin-eshop.firebaseapp.com",
  projectId: "moin-eshop",
  storageBucket: "moin-eshop.appspot.com",
  messagingSenderId: "827901561956",
  appId: "1:827901561956:web:398d4040d92ce674eda371",
  measurementId: "G-91F9W8DKMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export {db, auth}