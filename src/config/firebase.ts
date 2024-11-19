import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCSF24HNdk34o1HijpPUbj5p-s9cp4QxMA',
  authDomain: 'nannies-532f7.firebaseapp.com',
  projectId: 'nannies-532f7',
  storageBucket: 'nannies-532f7.firebasestorage.app',
  messagingSenderId: '920318158196',
  appId: '1:920318158196:web:b26ff84520e8a98ea77821',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
