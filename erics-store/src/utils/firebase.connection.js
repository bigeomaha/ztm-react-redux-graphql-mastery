import { initializeApp } from 'firebase/app';

// In real app, this should be in a .env file
const FIREBASECONFIG = {
    apiKey: "AIzaSyD1UEuZ479zaMroyvjOpDRzkpPXp8w33Q4",
    authDomain: "ztm-erics-store.firebaseapp.com",
    projectId: "ztm-erics-store",
    storageBucket: "ztm-erics-store.appspot.com",
    messagingSenderId: "12395378959",
    appId: "1:12395378959:web:90e04ccb4abce5eab2e67a"
};

//  Initialize Firebase and share to all modules
//  While never directly used, this is the connection to the database
//  and is required for all other firebase modules to work.
const FIREBASEAPP = initializeApp(FIREBASECONFIG);
export default FIREBASEAPP;