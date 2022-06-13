import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCaOvMHtZpRvmcL6lQMj7RKGMulx3BclL8",
    authDomain: "mobilechat-d6f47.firebaseapp.com",
    projectId: "mobilechat-d6f47",
    storageBucket: "mobilechat-d6f47.appspot.com",
    messagingSenderId: "457110669601",
    appId: "1:457110669601:web:4dcb9acf489f545c849660"
};

const fb = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export {fb as default, db, auth};