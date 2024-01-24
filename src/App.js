import React, { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Image from './components/Image';
import HealthDashboard from './components/HealthDashboard';
import CreateDashboard from './components/CreateDashboard';
import CogGames from './components/CogGames';
// import Signup from './components/Signup';
function App() {
  const [showAuth, setShowAuth] = useState(false);

  const handleSignInClick = () => {
    setShowAuth(true);
  };

  return (
    
      <>
        <div className="App">
          <Navbar title="Anshika" />
          <Image />
          {/* <HealthDashboard/> */}
          <CreateDashboard/>
          <CogGames/>
          {/* <Signup /> */}
        </div>

        
       
      </>
  
  );
}

export default App;
