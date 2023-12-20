import React, { useEffect, useState } from 'react';
import Navlink from '../Navlink/Navlink';
import { protecdInstance } from '../../services/instance';
import { useNavigate } from 'react-router-dom';

function Ticket() {
  const [view, setView] = useState([]);
  const navigate = useNavigate();

  const getTicket = async () => {
    try {
      const res = await protecdInstance.get('/ticket');
      setView(res.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleCreateTicket = (e) => {
    e.preventDefault();
    navigate('/create');
  };

  const handleEditTicket = async(id) => {
    await protecdInstance.patch(`/ticket/${id}`);
    getTicket();
  };

  const handleDeleteTicket = async (id) => {
    try {
      await protecdInstance.delete(`/ticket/${id}`);
      getTicket();
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <div>
      <Navlink />
      <div>
        <button onClick={handleCreateTicket}>+ Create Query</button>
        <h2>All Queries</h2>
        <div>
          <div>
            {view.length==0?(<><h2>No  Quary Created</h2></>):(<> <ul>
            {view.map((info) => (
              <li key={info._id}>
                <div>
                  <h3>Title: {info.title}</h3>
                  <button onClick={() => handleEditTicket(info._id)}>Close</button>
                </div>
                <p>Category: {info.category}</p>
                <p>Description : {info.description}</p>
                  <p>Language : {info.language}</p>
                <p>Status: {info.status}</p>
                <p>Assignee: {info.assignedTo === null ? '-' : info.assignedTo}</p>
                <p>Create Time: {new Date(info.createTime).toLocaleString()}</p>
          
                <button onClick={() => handleDeleteTicket(info._id)}>Delete</button>
              </li>
            ))}
          </ul></>)}
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Ticket;
