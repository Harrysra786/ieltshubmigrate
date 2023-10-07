import { collection, getDocs, query } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export async function fetchVideos(type, module) {
  const firestore = getFirestore();
  const q = query(collection(firestore, `1data/${type}/${module}`));
  const querySnapshot = await getDocs(q);
  let videos = [];
  querySnapshot.forEach((doc) => {
    for (let field in doc.data()) {
      if (field.startsWith('video')) {
        let [name, id, src] = doc.data()[field].split('*');
        videos.push({ name, id, src });
      }
    }
  });
  return videos;
}
