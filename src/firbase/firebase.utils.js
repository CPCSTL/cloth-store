import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGwZ3MqUIOHMii5wNOOAl2EPSXwfw442I",
    authDomain: "clothes-store-db-e729a.firebaseapp.com",
    projectId: "clothes-store-db-e729a",
    storageBucket: "clothes-store-db-e729a.appspot.com",
    messagingSenderId: "902570727288",
    appId: "1:902570727288:web:6e12e6a92af96959d3da8d",
    measurementId: "G-ECE335YHD5"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName , email} = userAuth;
      const createdAt = new Date();

      try { 
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch (error){
        console.log('error creating user', error.message)
      }
    }
    return userRef;

  }

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;