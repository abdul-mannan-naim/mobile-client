
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyD4ZOpnfR_PIf9cTLOXhBhf2bnUtzs7TKI",
  authDomain: "mobile-e232d.firebaseapp.com",
  projectId: "mobile-e232d",
  storageBucket: "mobile-e232d.appspot.com",
  messagingSenderId: "863417257382",
  appId: "1:863417257382:web:b70ad7f5f81fbb84475367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;
