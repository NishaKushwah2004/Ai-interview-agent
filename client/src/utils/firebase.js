
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-98172.firebaseapp.com",
  projectId: "interviewagent-98172",
  storageBucket: "interviewagent-98172.firebasestorage.app",
  messagingSenderId: "534277180470",
  appId: "1:534277180470:web:7dcb373acfa895081a1c97"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}