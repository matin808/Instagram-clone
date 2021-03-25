import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAS7G8CudzAJjvLpgK5n_PfKPTNKwEKQhQ",
  authDomain: "instagram-clone-reactbyamk.firebaseapp.com",
  databaseURL: "https://instagram-clone-reactbyamk.firebaseio.com",
  projectId: "instagram-clone-reactbyamk",
  storageBucket: "instagram-clone-reactbyamk.appspot.com",
  messagingSenderId: "267663712502",
  appId: "1:267663712502:web:aa25059386767b9b8f4cd7",
  measurementId: "G-C1FK54RGF3",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
