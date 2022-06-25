import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCrVoAr-RG6lKVWq6Tm4rnz0XQdQr91eVs",
    authDomain: "game-store-f8b48.firebaseapp.com",
    projectId: "game-store-f8b48",
    storageBucket: "game-store-f8b48.appspot.com",
    messagingSenderId: "640777573319",
    appId: "1:640777573319:web:daf081535b613287ef7fe2",
    measurementId: "G-5CF4R554RM",
  };

  const firebaseapp=firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export {db,auth};
