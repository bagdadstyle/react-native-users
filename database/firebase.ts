// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDzqJJ6UqjdSiaJq03_iUgEQr-lJBDH7w0",

  authDomain: "react-native-users-2b0fb.firebaseapp.com",

  projectId: "react-native-users-2b0fb",

  storageBucket: "react-native-users-2b0fb.appspot.com",

  messagingSenderId: "550556818566",

  appId: "1:550556818566:web:8337ecddd513782cba8507",
};

// Initialize Firebase

initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
