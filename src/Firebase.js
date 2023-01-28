// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
// If using Firebase database

// import 'firebase/compat/auth
const firebaseConfig = {
  apiKey: "AIzaSyA2TFhHGpGr2nYEAysdAVOEB1Ro5ZpHQZk",
  authDomain: "fir-c91c8.firebaseapp.com",
  projectId: "fir-c91c8",
  storageBucket: "fir-c91c8.appspot.com",
  messagingSenderId: "175248824092",
  appId: "1:175248824092:web:191bf5227c7d68d1e94cd9",
  measurementId: "G-S7E5HH2YVB"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

 export const db = firebaseApp.firestore();
const auth = firebase.auth();


export default auth;