import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavigateBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('User');
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenu) => !prevMenu);
  };

  return (
    <div id='nav'>
      <nav>
        <h2>ZEN DESK</h2>
        <ul style={{ display: isMenuOpen ? 'block' : 'none' }} onClick={toggleMenu}>
          <li><Link to="/admin">All Tickets</Link></li>
          <li><Link to="/myTickets">My Assign Tickets</Link></li>
          <li><button onClick={handleLogout}>Logout</button></li>
        </ul>
        <input id="checkbox" type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>
      </nav>
    </div>
  );
}

export default NavigateBar;
