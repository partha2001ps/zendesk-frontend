import React, { useState } from 'react';
import Navlink from '../Navlink/Navlink';
import classes from './zenclass';
import { protecdInstance } from '../../services/instance';

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

  const handletask = async (e, title) => {
    e.preventDefault();
    try {
      const res = await protecdInstance.post('/task', {
        ...task,
        taskTitle: title, 
      });
      setSee(res.data.message);
      console.log(res.data.message);
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
      <div>
        <h2>Full Stack developer (MERN)</h2>
        {view ? (
          <div>
            <h3>Class Overview</h3>
            <p>
              This is a comprehensive class covering the MERN stack for full-stack development.
            </p>
            <ul>
              <li>HTML, CSS, and JavaScript basics</li>
              <li>React.js for building interactive user interfaces</li>
              <li>Node.js for server-side development</li>
              <li>Express.js for building web applications</li>
              <li>MongoDB for database management</li>
              <li>Addition of MySql, AWS, and DSA</li>
            </ul>
            <button onClick={(e) => handleClass(e, 1)}>View Roadmap</button>
          </div>
        ) : (
          <div>
            <div>
              <button onClick={(e) => handleClass(e, 1)}>1</button>
              <button onClick={(e) => handleClass(e, 2)}>2</button>
              <button onClick={(e) => handleClass(e, 3)}>3</button>
              <button onClick={(e) => handleClass(e, 4)}>4</button>
              <button onClick={(e) => handleClass(e, 5)}>5</button>
              <button onClick={(e) => handleClass(e, 6)}>6</button>
              <button onClick={(e) => handleClass(e, 7)}>7</button>
              <button onClick={(e) => handleClass(e, 8)}>8</button>
              <button onClick={(e) => handleClass(e, 9)}>9</button>
              <button onClick={(e) => handleClass(e, 10)}>10</button>
              <button onClick={(e) => handleClass(e, 11)}>Mini Project</button>
            </div>
            <ul>
              {classes.mernClass
                .filter((mernClass) => mernClass.id === selectedClass)
                .map((selectedClass) => (
                  <li key={selectedClass.id}>
                    <div>
                      <strong>Title:</strong> {selectedClass.title}
                    </div>
                    <div>
                      Content: {selectedClass.content.map((content, index) => (
                        <div key={index}>{content}</div>
                      ))}
                    </div>
                    <div>
                      Task: {selectedClass.tasks.map((task, index) => (
                        <div key={index}>{task}</div>
                      ))}
                    </div>
                    {selectedClass.id <= 4 ? (
                      <>
                       <form onSubmit={(e) => handletask(e, selectedClass.title)}>
                          <input type="text" placeholder="Github source code"
                         value={task.frontendsourcecode}
                         onChange={(e) => setTask({ ...task, frontendsourcecode: e.target.value })}
                         required  /><br />
                          <input type="text" placeholder="Depoly URL "
                           value={task.frontendDepoly}
                           onChange={(e) => setTask({ ...task, frontendDepoly: e.target.value })}
                           required/><br />
                          <input type="text" placeholder="commands "
                               value={task.commands}
                            onChange={(e) => setTask({ ...task, commands: e.target.value })} /><br />
                            <p>{see}</p>
                          <button type='submit'>Submit</button>
                       </form>
                      </>
                    ) : (
                      <>
                         <form onSubmit={(e) => handletask(e, selectedClass.title)}>
                            <input type="text" placeholder="Frontend source code"
                              value={task.frontendsourcecode}
                              onChange={(e) => setTask({ ...task, frontendsourcecode: e.target.value })}
                              required /><br />
                            <input type="text" placeholder="Frontend Deploy URL"
                             value={task.frontendDepoly}
                             onChange={(e) => setTask({ ...task, frontendDepoly: e.target.value })}
                             required/><br />
                            <input type="text" placeholder="BackEnd source Code"
                             value={task.backendsourcecode}
                             onChange={(e) => setTask({ ...task, backendsourcecode: e.target.value })}
                             required/><br />
                            <input type="text" placeholder="BackEnd source URL"
                             value={task.backendDeploy}
                             onChange={(e) => setTask({ ...task, backendDeploy: e.target.value })}
                             required/><br />
                            <input type="text" placeholder="commands "
                              value={task.commands}
                              onChange={(e) => setTask({ ...task, commands: e.target.value })} /><br />
                            <p>{see}</p>
                        <button type='submit'>Submit</button>
                       </form>
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
