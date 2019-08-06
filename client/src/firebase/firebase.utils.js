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




// create an async function which catch the auth data of user and create an user document
//to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    //userRef is just a location we try to reach,it doesnt vertify it's exist or not

    const snapshot = await userRef.get();
    //let snapshot ;firestore.doc('users/12edejiefmei').get().then(user=> snapshot=user);
    //snapshot is an actual user data we just retrived from firestore.
    //if a new user just signin snapshot should be null

    if (!snapshot.exists) {
        //!snapshot.exist if user not exist in firestore create one
        const { displayName, email } = userAuth;
        //displayName only exists if user sign in as google
        const createAt = new Date();
        try {
            await userRef.set(
                {
                    displayName,
                    email,
                    createAt,
                    ...additionalData
                }
            )
            //add doc to user collection with id =uid and doc , addtionalData ={displName}
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


export const convertCollectionsSnapshotToMap = (snapshot) => {
    const transformedCollections = snapshot.docs.map(doc => {
        const { title, items } = doc.data()
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((acc, curr) => {
        acc[curr.title.toLowerCase()] = curr;
        //create a key in obj and assign a value
        return acc;
    }, {});
}

// export const addCollectionAndDocuments = async (collectionKey, docArrayToAdd) => {
//     const collectionRef = firestore.collection(collectionKey);
//     const batch = firestore.batch();
//     //batch allow us to do all the code at once,in case any code are failed

//     try {
//         docArrayToAdd.forEach(doc => {
//             const docRef = collectionRef.doc();
//             //one item in array create one docRef
//             batch.set(docRef, doc);
//             //1st argument is docRef ,2nd is doc obj
//         })
//         return await batch.commit()//fire the batch codes,if success return null
//     } catch (error) {
//         console.log('error create collection', error.message)
//     }
// }


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            unsubscribe();
            resolve(userAuth)
        }, err => reject(err))
    })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//auth for email and password authentication 
//firestore for firebase database
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;