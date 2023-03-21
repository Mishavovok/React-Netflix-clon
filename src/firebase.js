import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB5Pn6bD0qeFWNBs2_DW6CEshB_cUEPO64',
  authDomain: 'netflix-clone-react-f1738.firebaseapp.com',
  projectId: 'netflix-clone-react-f1738',
  storageBucket: 'netflix-clone-react-f1738.appspot.com',
  messagingSenderId: '632845393280',
  appId: '1:632845393280:web:011ff9711073855d4db565',
};

const app = initializeApp(firebaseConfig);

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(getAuth(app), email, password);
};

export const signInUser = async (email, password) => {
  return signInWithEmailAndPassword(getAuth(app), email, password);
};
