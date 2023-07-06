// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAc2iCvfa4Kx2aC0MmQZjUaGj5YH8RTvjY",
    authDomain: "netflix-clone-687dd.firebaseapp.com",
    projectId: "netflix-clone-687dd",
    storageBucket: "netflix-clone-687dd.appspot.com",
    messagingSenderId: "452317239922",
    appId: "1:452317239922:web:6eef9304c3e8c31b3c40eb",
    measurementId: "G-9QBXFPYE72"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

