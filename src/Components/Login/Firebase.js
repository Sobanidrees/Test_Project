
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyALbwJt9QZPGichkP6Y6axgogbIpGHKpvg",
  authDomain: "final-react-64247.firebaseapp.com",
  projectId: "final-react-64247",
  storageBucket: "final-react-64247.appspot.com",
  messagingSenderId: "990623989483",
  appId: "1:990623989483:web:0397a73c4bc5254dbe08ae",
  measurementId: "G-K2R9HEPJVY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db = getFirestore(app);
export {app,auth,db};
