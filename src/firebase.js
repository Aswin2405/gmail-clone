// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCx8CEY8-A3c8Qrz69j3cJkuErk-1bYhmE",
  authDomain: "aswin-mail.firebaseapp.com",
  projectId: "aswin-mail",
  storageBucket: "aswin-mail.appspot.com",
  messagingSenderId: "280929548819",
  appId: "1:280929548819:web:5e12c104d7c7fff1695de6",
  measurementId: "G-Q51VQVGXHV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
