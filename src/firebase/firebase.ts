// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAS5CIwKl0_UgDhzSqyUHFCtqeT3WRrdIU',
  authDomain: 'horizontech-f1886.firebaseapp.com',
  projectId: 'horizontech-f1886',
  storageBucket: 'horizontech-f1886.appspot.com',
  messagingSenderId: '426903103314',
  appId: '1:426903103314:web:a2b62999262bc7a684bc8b',
  measurementId: 'G-Y5K6BKD8CR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
