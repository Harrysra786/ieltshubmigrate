import { initializeApp } from "firebase/app";
import { getFirestore, doc as docRef, addDoc, updateDoc, deleteDoc, setDoc, getDoc } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
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

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const doc = docRef;
export { addDoc, updateDoc, deleteDoc, setDoc, getDoc }; // Export the addDoc, updateDoc, deleteDoc, setDoc, and getDoc functions
