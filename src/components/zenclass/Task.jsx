import React, { useEffect, useState } from 'react';
import Navlink from '../Navlink/Navlink';
import { protecdInstance } from '../../services/instance';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [update, setUpdate] = useState({});
  
  const initializeUpdateState = (task) => {
    setUpdate({
      frontendsourcecode: task.frontendsourcecode || '',
      frontendDepoly: task.frontendDepoly || '',
      backendDeploy: task.backendDeploy || '',
      backendsourcecode: task.backendsourcecode || '',
    });
  };

  const getTasks = async () => {
    try {
      const res = await protecdInstance.get('/task');
      setTasks(res.data.tasks);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const handleEdit = (index, task) => {
    setEditIndex(index);
    initializeUpdateState(task);
  };

  const handleSave = async (id, index) => {
    try {
      console.log(update);
      await protecdInstance.patch(`/task/${id}`, update);
      setEditIndex(null);
      getTasks();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div>
      <Navlink />
      <div>
        <h2 className=' text-center m-3 text-uppercase '>All Submit Tasks</h2>
        <div>
          {tasks.length == 0 ? (<><h2 className='no'>No  Task Submited</h2></>) : (<>
            <ul >
              {tasks.map((task, index) => (
                <li className=' list-unstyled card m-4' key={index}>
                  {editIndex === index ? (
                    <div className='card-task'>
                      <h3 className='m-3'>Task Title: {task.taskTitle}</h3>
                      <p>
                        FrontEnd source Code:
                        <input
                          defaultValue={task.frontendsourcecode}
                          onChange={(e) => setUpdate({ ...update, frontendsourcecode: e.target.value })}
                        />
                      </p>
                      <p>
                        FrontEnd Depoly URL:
                        <input
                          defaultValue={task.frontendDepoly}
                          onChange={(e) => setUpdate({ ...update, frontendDepoly: e.target.value })}
                        />
                      </p>
                      {task.backendsourcecode !== '' && (
                        <p>
                          BackEnd Source Code:
                          <input
                            defaultValue={task.backendsourcecode}
                            onChange={(e) => setUpdate({ ...update, backendsourcecode: e.target.value })}
                          />
                        </p>
                      )}
                      {task.backendDeploy !== '' && (
                        <p>
                          BackEnd Depoly URL:
                          <input
                            defaultValue={task.backendDeploy}
                            onChange={(e) => setUpdate({ ...update, backendDeploy: e.target.value })}
                          />
                        </p>
                      )}
                      <p>Student Commands: {task.commands}</p>
                      <button className='btn btn-success m-3 card-btn' onClick={() => handleSave(task._id, index)}>Save</button>
                    </div>
                  ) : (
                    <div className='card'>
                      <h3 className='m-3'>Task Title: {task.taskTitle}</h3>
                      <div className='card-task'>
                        <p >FrontEnd source Code: {task.frontendsourcecode}</p>
                        <p >FrontEnd Depoly URL: {task.frontendDepoly}</p>
                        {task.backendsourcecode !== '' && (
                          <p>BackEnd Source Code: {task.backendsourcecode}</p>
                        )}
                        {task.backendDeploy !== '' && (
                          <p>BackEnd Depoly URL: {task.backendDeploy}</p>
                        )}
                        <p>Student Commands: {task.commands}</p>
                        <button className='btn btn-outline-primary card-btn mb-3' onClick={() => handleEdit(index, task)}>Edit</button>
                      </div>
                 
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </>)}
        </div>
      
      </div>
    </div>
  );
}

export default Task;