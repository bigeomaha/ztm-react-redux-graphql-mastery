// THIS is not a component, it is a utility file but it required for the app to work.
import { FIREBASEAPP } from './firebase.connection';
// Do Not Remove the above line. It is required for the app to work.
import { getFirestore, doc, collection, writeBatch, query, getDocs } from "firebase/firestore";

export const db = getFirestore();
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const newDocRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(newDocRef, obj);
    });

    return await batch.commit();

}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs
    return categoryMap;
}
