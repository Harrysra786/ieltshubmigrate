import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDQI78vVmYiUvMeRpPA6oRFOcsmoYLKQ6A",
    authDomain: "ieltshubnew.firebaseapp.com",
    projectId: "ieltshubnew",
    storageBucket: "ieltshubnew.appspot.com",
    messagingSenderId: "550500003795",
    appId: "1:550500003795:web:809943e1d84f90b10ec926",
    measurementId: "G-S7NV4G56ZS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
