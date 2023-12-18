import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';
function Navlink() {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
      setMenu((prevMenu) => !prevMenu);
    };
  return (
    <div>  <nav>
    <h2>ZEN CLASS</h2>
    <ul style={{ display: menu ? 'block' : 'none' }} onClick={handleMenu}>
             <li> <Link to='/dashboard'>Class</Link></li>         
              <li><Link to='/ticket'>Ticket</Link></li>
              <li><Link to='/project'>Project</Link></li>
              <li><Link to='/task'>Task</Link></li>
              <li><Link to='/syllabus'>Syllabus</Link></li>
    </ul>
      <input id="checkbox" type="checkbox" checked={menu} onChange={handleMenu} />
      <label className="toggle" htmlFor="checkbox">
        <div id="bar1" className="bars"></div>
        <div id="bar2" className="bars"></div>
        <div id="bar3" className="bars"></div>
      </label>
  </nav></div>
  )
}

export default Navlink