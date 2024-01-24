// src/components/ImageTextContainer.js

import React from 'react';
import './createDash.css';

const ImageTextContainer = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', maxWidth: '1300px', margin: '20 auto', marginTop:'30px', position:'relative' }}>
      <div style={{ marginLeft: '45px' }}>
        <img src="man.avif" alt="Sample" style={{ width: '100%', height: 'auto' }} />
      </div>

      <div id='fir'>
        <h2 style={{fontSize:'auto'}}>Personalised Health Dashboard</h2>
        <span className="circle-background"></span>
        <span className="circle-background2"></span>
        <p className='my-4' style={{fontSize:'19px'}}>"In a world of health information, imagine being the conductor. Your own special dashboard is like your magic wand, directing a beautiful harmony of well-being designed just for you."</p>
        <button className="btn btn-primary" style={{width:'220px', height:'50px', fontSize:'20px'}}>Get one for yourself !</button>
      </div>
    </div>
  );
};

export default ImageTextContainer;
