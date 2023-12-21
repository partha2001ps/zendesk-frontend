import React, { useState } from 'react';
import Navlink from '../Navlink/Navlink';
import classes from './zenclass';
import { protecdInstance } from '../../services/instance';
import './zenclass.css'
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [view, setView] = useState(true);
  const [selectedClass, setSelectedClass] = useState(1);
  const[see,setSee]=useState()
  const [task, setTask] = useState({
    taskTitle: '', 
    frontendsourcecode: '',
    frontendDepoly: '',
    backendsourcecode: '',
    backendDeploy: '',
    commands: '',
  });
  const navigate = useNavigate()
  const handletask = async (e, title,id) => {
    e.preventDefault();
    try {
      const res = await protecdInstance.post('/task', {
        ...task,
        taskTitle:`Class : ${id} - ${title}`, 
      });
      setSee(res.data.message);
      // console.log(res.data.message);
      setTask({
        taskTitle: '', 
        frontendsourcecode: '',
        frontendDepoly: '',
        backendsourcecode: '',
        backendDeploy: '',
        commands: '',
      });
    } catch (e) {
      console.log(e.response);
      navigate('/signin')
    }
  };
  const handleClass = (e, classId) => {
    e.preventDefault();
    setView(false);
    setSee('')
    setSelectedClass(classId);
  };
  return (
    <div>
      <Navlink />
      <div className="container mt-4 d-flex flex-column">
        <h2 className="text-center">Full Stack developer (MERN)</h2>
        {view ? (
          <div className='card full col-lg-6 col-md-8 col-sm-12'>
            <div className='card '>
              <h3 className='card-title m-3'>Class Overview:</h3>
              <p className='card-text class1'>
                This is a comprehensive class covering the MERN stack for full-stack development.
              </p>
              <ul className='card-text'>
                <li>HTML, CSS, and JavaScript basics</li>
                <li>React.js for building interactive user interfaces</li>
                <li>Node.js for server-side development</li>
                <li>Express.js for building web applications</li>
                <li>MongoDB for database management</li>
                <li>Addition of MySql, AWS, and DSA</li>
              </ul>
              <button className='btn btn-primary m-3 btn-sm' onClick={(e) => handleClass(e, 1)}>
                View Roadmap
              </button>
            </div>
          </div>
        ) : (
            
          <div className='d-lg-flex  flex-wrap class-content'>
              
            <div className='allclass col-lg-3 order-lg-2'>
              <h2 className=' text-center'>All Class:</h2>
              <div className="row">
                <div className="col-12 text-center">
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 1)}>1</button>
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 2)}>2</button>
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 3)}>3</button>
            
                </div>
                <div className="col-12 text-center">
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 4)}>4</button>
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 5)}>5</button>
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 6)}>6</button>
                </div>
                <div className="col-12 text-center">
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 7)}>7</button>
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 8)}>8</button>
                  <button className='btn btn-primary btn-rounded m-3' onClick={(e) => handleClass(e, 9)}>9</button>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <button className='btn btn-primary btn-rounded m-3 ' onClick={(e) => handleClass(e, 10)}>10</button>
                  <button className='btn btn-success btn-rounded m-2 ' onClick={(e) => handleClass(e, 11)}>Mini Project</button>
                </div>
              </div>
            </div>
            <div className='col-lg-9 order-lg-1 '>
              <ul className='card content'>
                {classes.mernClass
                  .filter((mernClass) => mernClass.id === selectedClass)
                  .map((selectedClass) => (
                    <div key={selectedClass.id}>
                      <div className='mt-4 text text-uppercase'>
                        <strong className='ti text-uppercase '>Title:</strong> <span className='head'>{selectedClass.title}</span>
                      </div>
                      <div >
                        <span className='text-uppercase ti' > Content:</span> {selectedClass.content.map((content, index) => (
                          <li key={index}>{content}</li>
                        ))}
                      </div>
                      <div>
                        <span className='ti text-uppercase '> Task:</span> {selectedClass.tasks.map((task, index) => (
                          <li key={index}>{task}</li>
                        ))}
                      </div>
      
                      {selectedClass.id <= 4 ? (
                        <>
                          <form className='m-3' onSubmit={(e) => handletask(e, selectedClass.title, selectedClass.id)}>
                            <input type="text" placeholder="Github source code"
                              value={task.frontendsourcecode}
                              onChange={(e) => setTask({ ...task, frontendsourcecode: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="Depoly URL "
                              value={task.frontendDepoly}
                              onChange={(e) => setTask({ ...task, frontendDepoly: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="commands "
                              value={task.commands}
                              onChange={(e) => setTask({ ...task, commands: e.target.value })} /><br />
                            <p>{see}</p>
                            <button className='btn btn-success' type='submit'>Submit</button>
                          </form>
                        </>
                      ) : (
                        <>
                          <form className='m-3' onSubmit={(e) => handletask(e, selectedClass.title, selectedClass.id)}>
                            <input type="text" placeholder="Frontend source code"
                              value={task.frontendsourcecode}
                              onChange={(e) => setTask({ ...task, frontendsourcecode: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="Frontend Deploy URL"
                              value={task.frontendDepoly}
                              onChange={(e) => setTask({ ...task, frontendDepoly: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="BackEnd source Code"
                              value={task.backendsourcecode}
                              onChange={(e) => setTask({ ...task, backendsourcecode: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="BackEnd source URL"
                              value={task.backendDeploy}
                              onChange={(e) => setTask({ ...task, backendDeploy: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="commands "
                              value={task.commands}
                              onChange={(e) => setTask({ ...task, commands: e.target.value })} /><br />
                            <p>{see}</p>
                            <button className='btn btn-success' type='submit'>Submit</button>
                          </form>
                        </>
                      )}
                    </div>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
