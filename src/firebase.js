// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// You can find this in your Firebase project settings (Project Overview > Web App)
const firebaseConfig = {
    apiKey: "AIzaSyC2NbgzvvXV0Kubu7AGToAvxaPhxBOdEZo",
    authDomain: "freshpick-736fb.firebaseapp.com",
    projectId: "freshpick-736fb",
    storageBucket: "freshpick-736fb.firebasestorage.app",
    messagingSenderId: "717463079214",
    appId: "1:717463079214:web:3f98a129d81fa77df892bf",
    measurementId: "G-M5C76MCCHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
