// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqbTodXVesm8Ny56cMH0s3uyO9MVWRD1s",
  authDomain: "test1-bdd05.firebaseapp.com",
  databaseURL: "https://test1-bdd05-default-rtdb.firebaseio.com",
  projectId: "test1-bdd05",
  storageBucket: "test1-bdd05.appspot.com",
  messagingSenderId: "473637286201",
  appId: "1:473637286201:web:ac149e41e0fc43080078e8",
  measurementId: "G-4NJ70HW7H1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);