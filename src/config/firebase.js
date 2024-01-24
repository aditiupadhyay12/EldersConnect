// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyApndtGLlO9Ejd-VeSzzSheEDTCDUqVxEg",
  authDomain: "eldersconnect-d2f9e.firebaseapp.com",
  projectId: "eldersconnect-d2f9e",
  storageBucket: "eldersconnect-d2f9e.appspot.com",
  messagingSenderId: "824410974155",
  appId: "1:824410974155:web:6f69fa5069887e6f93f84e",
  measurementId: "G-566WQX0QVY"
};

const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { authInstance, googleProvider };
