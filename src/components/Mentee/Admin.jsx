import React, { useEffect, useState } from 'react';
import NavigateBar from './NavigateBar';
import { authInstance, protecdInstance } from '../../services/instance';
import './mentee.css';

function Admin() {
  const [getTickets, setGetTickets] = useState([]);
  const storedMenteeId = sessionStorage.getItem('User');
  const menteeId = JSON.parse(storedMenteeId).mentee._id;

  const handleData = async () => {
    try {
      const res = await authInstance.get('/ticket/all');
      setGetTickets(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssign = async (id) => {
    try {
      const res = await protecdInstance.patch(`/mentee/${id}/${menteeId}`);
      handleData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <div>
      <NavigateBar />
      <div className='admin'>
        <div className='all'>
          <h2 className='title m-3 '>ALL Tickets</h2>
          <h3 className='title m-2 text-success  '>Welcome to our Admin Dashboard</h3>
          {getTickets.length === 0 ? (
            <h2 className='no'>No Ticket Available</h2>
          ) : (
            <>
              <div className='table-responsive'>
                <table className='table table-striped table-bordered'>
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
                            <button
                              className='btn btn-success assign'
                              onClick={() => handleAssign(ticket._id)}
                            >
                              Assign
                            </button>
                          ) : (
                            ticket.assignedTo || 'N/A'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
