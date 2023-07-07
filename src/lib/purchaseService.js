import { doc, setDoc, collection } from "firebase/firestore";
import { firestore } from "./firebase";

export const addPurchase = async (purchase) => {
  const purchaseRef = doc(collection(firestore, "purchases"));
  await setDoc(purchaseRef, purchase);
};
