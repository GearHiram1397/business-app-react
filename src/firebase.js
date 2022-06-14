// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCAF706w4l4PqaH5y3o-Rgs5fOnBCqN8Mc",
    authDomain: "bussiness-3c0cf.firebaseapp.com",
    projectId: "bussiness-3c0cf",
    storageBucket: "bussiness-3c0cf.appspot.com",
    messagingSenderId: "438818444737",
    appId: "1:438818444737:web:5b1012c70621614f5c8b40"
});




// Initialize Firebase
const db = getFirestore(firebaseApp)
export {db}