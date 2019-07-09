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


// create an async function which catch the auth data of user and create an user document
//to firestore
export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //userRef is just a location we try to reach,it doesnt vertify it's exist or not
    const snapshot = await userRef.get();
    //let snapshot ;firestore.doc('users/12edejiefmei').get().then(user=> snapshot=user);
    //snapshot is an actual user data we just retrived from firestore.
    //if a new user just signin snapshot should be null

    if (!snapshot.exist) {
        //!snapshot.exist if user not exist in firestore create one
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;