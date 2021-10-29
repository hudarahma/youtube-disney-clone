
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCnGBbcmt3xAGkKBtW3tpqQzr6P7XC-Wow",
    authDomain: "disney-clone-72183.firebaseapp.com",
    projectId: "disney-clone-72183",
    storageBucket: "disney-clone-72183.appspot.com",
    messagingSenderId: "501590686000",
    appId: "1:501590686000:web:7947a21cb0f811809470f5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db  = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;