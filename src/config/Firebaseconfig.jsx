import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyBJ8EsBdb303n0hfnCu7-dlYlJbh5nVbWQ",
    authDomain: "assignment-11-94718.firebaseapp.com",
    projectId: "assignment-11-94718",
    storageBucket: "assignment-11-94718.appspot.com",
    messagingSenderId: "920508475752",
    appId: "1:920508475752:web:bb0c755e8c9b4e36b40edd",
  };

  // Initialize Firebase
  const Userauth =  getAuth(initializeApp(firebaseConfig));

export default Userauth;
