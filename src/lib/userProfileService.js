import { doc, setDoc, getDoc, updateDoc, deleteDoc, collection, getDocs, writeBatch } from "firebase/firestore";
import { firestore } from "./firebase";

export async function updateAllowedEmails(emails) {
  const batch = writeBatch(firestore);

  // Delete all existing allowed emails
  const querySnapshot = await getDocs(collection(firestore, "allowedEmails"));
  querySnapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  // Add new allowed emails
  emails.forEach((email) => {
    const docRef = doc(collection(firestore, "allowedEmails"), email);
    batch.set(docRef, { email });
  });

  await batch.commit();
}

export async function getAllowedEmails() {
  const querySnapshot = await getDocs(collection(firestore, "allowedEmails"));
  return querySnapshot.docs.map((doc) => doc.data().email);
}

export const createUserProfile = async (uid, data) => {
    const userRef = doc(firestore, "users", uid);
    await setDoc(userRef, data);
};

export const getUserProfile = async (uid) => {
    const userRef = doc(firestore, "users", uid);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
};

export const updateUserProfile = async (uid, data) => {
    const userRef = doc(firestore, "users", uid);
    await updateDoc(userRef, data);
};

export const deleteUserProfile = async (uid) => {
    const userRef = doc(firestore, "users", uid);
    await deleteDoc(userRef);
};

export async function getAllUserProfiles() {
  const response = await fetch("https://REGION-PROJECT_ID.cloudfunctions.net/getAllUsers");
  const data = await response.json();
  const users = data.users;
  return users;
}
