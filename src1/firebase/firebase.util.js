import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCAMUzFiSPUSBEg9WTGuzb5N81jCjgh03U",
    authDomain: "crwn-db-d3382.firebaseapp.com",
    databaseURL: "https://crwn-db-d3382.firebaseio.com",
    projectId: "crwn-db-d3382",
    storageBucket: "crwn-db-d3382.appspot.com",
    messagingSenderId: "257596426577",
    appId: "1:257596426577:web:21e1b2cf6fe72d3f4cab70",
    measurementId: "G-WCN8ZPD7VZ"
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_acount' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
