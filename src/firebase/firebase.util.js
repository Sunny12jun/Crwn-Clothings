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
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_acount' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
