import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZuWs23yU1ZITXuYyEwbK3kp-Yuo1WrcY',
  authDomain: 'photo-tagging-app-6b8cf.firebaseapp.com',
  projectId: 'photo-tagging-app-6b8cf',
  storageBucket: 'photo-tagging-app-6b8cf.appspot.com',
  messagingSenderId: '128658462085',
  appId: '1:128658462085:web:9e8562e880e457550e20ec',
  measurementId: 'G-MSDS2VZK0E',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
