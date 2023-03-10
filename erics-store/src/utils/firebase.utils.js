import {initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup,
        GoogleAuthProvider, createUserWithEmailAndPassword,
        signInWithEmailAndPassword as firebaseEmailPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1UEuZ479zaMroyvjOpDRzkpPXp8w33Q4",
    authDomain: "ztm-erics-store.firebaseapp.com",
    projectId: "ztm-erics-store",
    storageBucket: "ztm-erics-store.appspot.com",
    messagingSenderId: "12395378959",
    appId: "1:12395378959:web:90e04ccb4abce5eab2e67a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider);
export const db = getFirestore();


export const signInWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    const userCredential = await firebaseEmailPassword(auth, email, password);
    return userCredential;
}


export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userDocSnapshot = await getDoc(userDocRef);

    // Create the user document if it doesn't exist
    if (!userDocSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
}
