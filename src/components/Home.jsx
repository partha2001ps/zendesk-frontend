import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="container">
      <div className="left-side">
          <p>Zen Desk</p>
      </div>
      <div className="right-side">
          <Link to='/signin'>User</Link>
          <Link to='/mentee-signin'>Mentor</Link>
      </div>
    </div>
  );
}

export default Home;
