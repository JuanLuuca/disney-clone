import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxVTu7j7RcA3z0bL1OU7e9AwzHyuIX1bQ",
  authDomain: "disney-clone-f3a0b.firebaseapp.com",
  projectId: "disney-clone-f3a0b",
  storageBucket: "disney-clone-f3a0b.appspot.com",
  messagingSenderId: "639910240281",
  appId: "1:639910240281:web:a242b8d14743e4c69eca88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;