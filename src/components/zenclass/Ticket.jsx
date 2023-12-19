import React, { useEffect, useState } from 'react';
import Navlink from '../Navlink/Navlink';
import { protecdInstance } from '../../services/instance';
import { useNavigate } from 'react-router-dom';

function Ticket() {
  const [view, setView] = useState([])
  const navigate=useNavigate()
 const getTicket=async()=> {
   const res = await protecdInstance.get('/ticket')
   setView(res.data)
   console.log(view)
  }
  const handleCreateTicket = (e) => {
    e.preventDefault();
    navigate('/create')
  };
  // useEffect(() => {
  //   getTicket()
  // },[])

 

  return (
    <div>
      <Navlink />
      <div>
        <button onClick={handleCreateTicket}>+ Create Query</button>
       <h2>
        All Quaries
        </h2>
            <button onClick={getTicket}>click</button>
            <div>
              <ul>
              {view.map((info, index) => (
                <li key={index}>
                  <h3>Title : {info.title}</h3>
                  <p>Category : {info.category}</p>
                  <p>Description : {info.description}</p>
                  <p>Language : {info.language}</p>
                  <p>Status : {info.status}</p>
                  <p>
  Assignee: {info.assignedTo === null ? '-' : info.assignedTo}
</p>
                  <p>Create Time: {new Date(info.createTime).toLocaleString()}</p>
                </li>
                ))}
        </ul>
            </div>
        </div>
      </div>
  );
}

export default Ticket;
