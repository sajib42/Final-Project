// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9iohBcLAJUPNglIoBSlXIxvg46nj1amo",
    authDomain: "gamerhub-a999a.firebaseapp.com",
    projectId: "gamerhub-a999a",
    storageBucket: "gamerhub-a999a.appspot.com",
    messagingSenderId: "390590960908",
    appId: "1:390590960908:web:5f6685d4aa3c5a34a36529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
