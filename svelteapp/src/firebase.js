import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdtj0ZI1Jh0gRmI5z-v0JfbP05Z5lTrUg",
    authDomain: "listingreport-34603.firebaseapp.com",
    projectId: "listingreport-34603",
    storageBucket: "listingreport-34603.appspot.com",
    messagingSenderId: "104637850474",
    appId: "1:104637850474:web:2d5827232f2e2a12ef7b13",
    measurementId: "G-7C8JEW3PHN"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
