import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NavigateBar() {
    const navigate=useNavigate()
   const handlelogout = () => {
       sessionStorage.removeItem('User')
       navigate('/')
    }
  return (
    <div className="container">
    <div className="left-side">
        <p>Zen Desk</p>
    </div>
      <div className="right-side">
        <Link to='/admin'>All Tickets</Link>
        <Link to='/myTickets'>My Assign Tickets</Link>
        <button onClick={handlelogout}>Logout</button>
    </div>
  </div>
  )
}

export default NavigateBar