// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDsLIHZvpMw5DtPr-PFda7BKIEyDW6VN6o",
    authDomain: "whatsapp-clone-2b776.firebaseapp.com",
    projectId: "whatsapp-clone-2b776",
    storageBucket: "whatsapp-clone-2b776.appspot.com",
    messagingSenderId: "578863487350",
    appId: "1:578863487350:web:059e1db70171df771f4257",
    measurementId: "G-X2R0X54YBH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;