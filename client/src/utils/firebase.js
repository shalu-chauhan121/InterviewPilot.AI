import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewpilot-aff8b.firebaseapp.com",
  projectId: "interviewpilot-aff8b",
  storageBucket: "interviewpilot-aff8b.firebasestorage.app",
  messagingSenderId: "644141140573",
  appId: "1:644141140573:web:70581107b8fea3dd465bb4"
};
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};