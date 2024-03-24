// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDwNZgyMOyGNCuHenkO0WBwJghCSW8_Q",
  authDomain: "bdecorecycle.firebaseapp.com",
  databaseURL: "https://bdecorecycle-default-rtdb.firebaseio.com",
  projectId: "bdecorecycle",
  storageBucket: "bdecorecycle.appspot.com",
  messagingSenderId: "673965097589",
  appId: "1:673965097589:web:042f301de2cb2ead31ae3c",
  measurementId: "G-1W9YLJNZQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;
