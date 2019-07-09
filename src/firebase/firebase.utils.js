import firebase from 'firebase/app';
//import firebase core as firebase
import 'firebase/auth';
import 'firebase/firestore';
//import auth and firestore


const firebaseConfig = {
    apiKey: "AIzaSyAJVstxl4cbCJANj3rFP39IdQ_ZRmtxfiU",
    authDomain: "shopshop-cool.firebaseapp.com",
    databaseURL: "https://shopshop-cool.firebaseio.com",
    projectId: "shopshop-cool",
    storageBucket: "",
    messagingSenderId: "885544228667",
    appId: "1:885544228667:web:0668defa1df1747d"
};

//project config
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//auth for email and password authentication 
//firestore for firebase database

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;