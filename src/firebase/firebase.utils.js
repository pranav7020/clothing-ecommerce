import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApk46O8bKChihf_1h1AqoyO22mlN5ZCGg",
    authDomain: "crown-db-87adc.firebaseapp.com",
    projectId: "crown-db-87adc",
    storageBucket: "crown-db-87adc.appspot.com",
    messagingSenderId: "174871631476",
    appId: "1:174871631476:web:3b6af8e30d55c1b9152321"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;