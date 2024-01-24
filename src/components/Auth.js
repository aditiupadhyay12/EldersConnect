// Import necessary modules and dependencies
import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth'; // Correct import path
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
const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      // Use createUserWithEmailAndPassword on the authInstance
      await createUserWithEmailAndPassword(authInstance, email, password);
      console.log('Sign-in successful!');
      // Redirect or perform any additional actions upon successful sign-in
    } catch (error) {
      console.error('Error during sign-in:', error.message);
      // Handle errors during sign-in
    }
  };

  return (
    <div>
      <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <input placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
