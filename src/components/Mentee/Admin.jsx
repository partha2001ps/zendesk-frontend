import React, { useEffect, useState } from 'react';
import NavigateBar from './NavigateBar';
import { authInstance, protecdInstance } from '../../services/instance';

function Admin() {
  const [getTickets, setGetTickets] = useState([]);
  const storedMenteeId = sessionStorage.getItem('User');
  const menteeId =JSON.parse( storedMenteeId).mentee._id;

  const handleData = async () => {
    try {
      const res = await protecdInstance.get('/ticket/all');
      setGetTickets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

    const handleAssign = async (id) => {
        try {
            const res = await authInstance.patch(`/mentee/${id}/${menteeId}`);
            console.log(res.data)
            handleData()
        } catch (error) {
          console.log(e)
        }
    }
      
  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <NavigateBar />

      <div>
        <h2>Tickets</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Language</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {getTickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.title}</td>
                <td>{ticket.category}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.language}</td>
                <td>
                  {ticket.status === 'Open' ? (
                    <button onClick={() => handleAssign(ticket._id)}>Assign</button>
                  ) : (
                    ticket.assignedTo || 'N/A'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
