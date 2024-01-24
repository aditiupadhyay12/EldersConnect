// Import necessary modules and dependencies
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Signup.css';

// Define your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApndtGLlO9Ejd-VeSzzSheEDTCDUqVxEg",
  authDomain: "eldersconnect-d2f9e.firebaseapp.com",
  projectId: "eldersconnect-d2f9e",
  storageBucket: "eldersconnect-d2f9e.appspot.com",
  messagingSenderId: "824410974155",
  appId: "1:824410974155:web:6f69fa5069887e6f93f84e",
  measurementId: "G-566WQX0QVY"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Get Firebase authentication instance
const authInstance = getAuth(app);

// Define your Signup component
export const Signup = () => {

  const [originalPageUrl, setOriginalPageUrl] = useState('/');
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(''); // New state for age
  const [error, setError] = useState('');

  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // Handle signup function
  const handleSignup = async () => {
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
  
      // Access the authenticated user
      const user = userCredential.user;
  
      // Update the user's profile with age
      await updateProfile(user, { displayName: age });
  
      // Handle successful signup
      console.log('User signed up successfully:', user);
  
      // Redirect to the auth route (assuming /auth is your route)
      navigate('/Auth');
    } catch (error) {
      // Handle errors during signup
      console.error('Error during signup:', error.message);
      setError(error.message);
    }
  };
  
  // Handle signin with Google
  const handleGoogleSignin = async () => {
    try {
      // Sign in with Google
      const googleProvider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(authInstance, googleProvider);

      // Handle successful Google signin
      console.log('User signed in with Google successfully:', userCredential.user);

      // Redirect to the auth route
      navigate('/auth');
    } catch (error) {
      // Handle errors during Google signin
      console.error('Error during Google signin:', error.message);
      setError(error.message);
    }
  };

  // Render the component
  return (
    <div className="signup-container">
      <div className="form-group">
        <h2>Sign Up</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

        <div className="button-group">
          <button onClick={handleSignup}>Sign Up</button>
          {/* Use Link to create a link to the /auth page */}
          <Link to="/auth">
            <button>Sign In</button>
          </Link>
        </div>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

// Export the Signup component
