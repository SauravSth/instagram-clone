import firebase from "firebase/compat"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEDcDAIbRX8utxGaq9aPrLfxEV5y75An0",
    authDomain: "instagram-clone-c5fe0.firebaseapp.com",
    projectId: "instagram-clone-c5fe0",
    storageBucket: "instagram-clone-c5fe0.appspot.com",
    messagingSenderId: "36260882203",
    appId: "1:36260882203:web:3fa37b3bcffc738a6915be",
    measurementId: "G-TVYGLFV33G"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  export { db, auth, storage };