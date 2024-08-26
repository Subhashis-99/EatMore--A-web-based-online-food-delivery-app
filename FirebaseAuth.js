// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTFWYdHi2eby9xqnXkh0wbChJ7zI1Z22Y",
  authDomain: "eatmore-onlinefood-delivery.firebaseapp.com",
  projectId: "eatmore-onlinefood-delivery",
  storageBucket: "eatmore-onlinefood-delivery.appspot.com",
  messagingSenderId: "664142530097",
  appId: "1:664142530097:web:0cf4cacf79330fd27c3710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
