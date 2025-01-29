import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjzC628fmamaAKKR4mzwsvIMLVLUdmCRs",
    authDomain: "event-management-af346.firebaseapp.com",
    projectId: "event-management-af346",
    storageBucket: "event-management-af346.firebasestorage.app",
    messagingSenderId: "667398528137",
    appId: "1:667398528137:web:101b3e19600257c1a57a58",
    measurementId: "G-KVRH522RW4"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, googleProvider, githubProvider };
