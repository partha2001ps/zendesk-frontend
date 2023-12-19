import React, { useEffect, useState } from 'react'
import NavigateBar from './NavigateBar'
import { protecdInstance } from '../../services/instance';

function AssignTickets() {
  const[get,setGet]=useState([])
  const storedMenteeId = sessionStorage.getItem('User');
  const id = JSON.parse(storedMenteeId).mentee._id;
  
  const handleEditTicket = async(id) => {
    await protecdInstance.put(`mentee/${id}`);
    handleData();
  };

  const handleData = async () => {
    try {
      const res = await protecdInstance.get(`/mentee/${id}`);
      setGet(res.data);
      console.log(get)
    } catch (error) {
      console.log(error);
    }
  }; 
  
useEffect(() => {
handleData();
}, []);
  return (
    <div><NavigateBar />
      <div>
      <h2>My Assign Tickets</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Language</th>
              <th>Close Ticket</th>
            </tr>
          </thead>
          <tbody>
            {get.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.title}</td>
                <td>{ticket.category}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.language}</td>
               <td> <button onClick={() => handleEditTicket(ticket._id)}>Close</button></td>
              </tr>
            ))}
          </tbody>
        </table>
     </div>
    </div>
  )
}

export default AssignTickets