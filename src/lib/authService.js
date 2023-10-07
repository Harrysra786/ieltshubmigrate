import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged,  updatePassword as firebaseUpdatePassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, firestore } from "$lib/firebase"; // your Firestore instance

export const signUp = async (email, password, phone, firstName, lastName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    // Create a document in Firestore with the user's ID
    await setDoc(doc(firestore, "users", userCredential.user.uid), {
      phoneNumber: phone,
      firstName: firstName,
      lastName: lastName
    });
  };
  
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const updatePassword = (newPassword) => {
  if (auth.currentUser) {
    return firebaseUpdatePassword(auth.currentUser, newPassword);
  }
  throw new Error("No user is currently signed in.");
};

export const checkUserAuthentication = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};