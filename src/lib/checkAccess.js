import { doc, getDoc } from "firebase/firestore";
import { db } from '$lib/firebase.js'; // Import your initialized Firebase app

export async function checkAccess(emailid, productname) {
  const docRef = doc(db, '1users', emailid, 'Purchases', productname);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    
    return false;
  }
}
