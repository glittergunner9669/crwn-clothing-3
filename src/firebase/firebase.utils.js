import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1Yux8qmwju63-VMX4WqHCrsOp8vRmxMg',
  authDomain: 'crwn-clothing-3-db.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-3-db.firebaseio.com',
  projectId: 'crwn-clothing-3-db',
  storageBucket: 'crwn-clothing-3-db.appspot.com',
  messagingSenderId: '834478342925',
  appId: '1:834478342925:web:5507080b2b5f003e002644',
  measurementId: 'G-607EL5QDMN'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
