// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZzuRO1ahnmNwqGrJgT03CS60-vyPQ44E",
  authDomain: "blog-site-27a58.firebaseapp.com",
  projectId: "blog-site-27a58",
  storageBucket: "blog-site-27a58.appspot.com",
  messagingSenderId: "121212199434",
  appId: "1:121212199434:web:959f57c23a96ea998f35f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth