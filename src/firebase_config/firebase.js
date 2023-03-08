// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7zNcnRsJmoFhMEhe6zxbJdBdLcFMiE5Q",
    authDomain: "newprojecttavla.firebaseapp.com",
    projectId: "newprojecttavla",
    storageBucket: "newprojecttavla.appspot.com",
    messagingSenderId: "1033807454642",
    appId: "1:1033807454642:web:32a6a77fe5e576b5f144ab",
    measurementId: "G-R4RGPGP9N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);