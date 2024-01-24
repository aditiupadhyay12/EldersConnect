import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Signup from './components/Signup';
import Auth from './Auth';

const Image = () => {
  const [showAuth, setShowAuth] = useState(false);

  const handleSignInClick = () => {
    setShowAuth(true);
  };

  return (
    <Router>
      <Routes>
        {/* Home Page with Image */}
        <Route
          path="/"
          element={
            <div style={{ position: 'relative', maxWidth: '1500px', objectFit: 'cover' }}>
              <img
                src="oldimg.jpeg"
                alt=""
                className="img-fluid"
                style={{ height: '100%', width: '100%', objectFit: 'contain' }}
              />
              <Link to="/Signup">
                <button
                  style={{
                    position: 'absolute',
                    top: '87%',
                    right: '10%',
                    transform: 'translateY(-60%)',
                    width: '150px',
                    padding: '10px',
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    fontSize: '22px',
                    backgroundColor: '#fac891',
                  }}
                >
                  Sign Up
                </button>
              </Link>
            </div>
          }
        />

        {/* Signup Page */}
        {/* <Route path="/Signup" element={<Signup />} /> */}

        {/* Auth Page */}
        <Route
          path="/Auth"
          element={
            <div>
              {/* Show Auth component when showAuth state is true */}
              {showAuth && <Auth />}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default Image;
