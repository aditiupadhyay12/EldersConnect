// src/components/HorizontalCardList.js

import React from 'react';

const HorizontalCardList = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="card" style={{ width: '18rem', marginRight: '15px' }}>
        <img src="..." className="card-img-top" alt="Card 1" />
        <div className="card-body">
          <h5 className="card-title">Card 1</h5>
          <p className="card-text">Some quick example text for Card 1.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', marginRight: '15px' }}>
        <img src="..." className="card-img-top" alt="Card 2" />
        <div className="card-body">
          <h5 className="card-title">Card 2</h5>
          <p className="card-text">Some quick example text for Card 2.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="Card 3" />
        <div className="card-body">
          <h5 className="card-title">Card 3</h5>
          <p className="card-text">Some quick example text for Card 3.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCardList;
