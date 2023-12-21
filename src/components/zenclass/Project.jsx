import React, { useState } from 'react';
import Navlink from '../Navlink/Navlink';
import { protecdInstance } from '../../services/instance';
import { useNavigate } from 'react-router-dom';

function Project() {
  const [project, setProject] = useState({
    taskTitle: 'Capstone Project',
    frontendsourcecode: '',
    frontendDepoly: '',
    backendsourcecode: '',
    backendDeploy: '',
    commands: '',
  });
  const [see, setSee] = useState('');
  const navigate = useNavigate();
  const handleProject = async (e) => {
    e.preventDefault();
    try {
     const res=await protecdInstance.post('/task/',project)
      setSee(res.data.message);
      // console.log(res.data.message);
      setProject({
        taskTitle: 'Capstone Project',
        frontendsourcecode: '',
        frontendDepoly: '',
        backendsourcecode: '',
        backendDeploy: '',
        commands: '',
      });
    } catch (e) {
      console.error(e);
      navigate('/signin')
    }
  };
  const projectDetails = {
    "project": {
      "title": "Zendesk clone",
      "requirements": {
        "code_quality": true,
        "front_end": "Reactjs",
        "back_end": "Nodejs",
        "database": "MongoDB",
        "css_framework": ["Bootstrap", "Material CSS"]
      },
      "submission": {
        "github_repositories": {
          "front_end": "project-name-frontend",
          "back_end": "project-name-backend"
        },
        "deployment": {
          "front_end": "Netlify",
          "back_end": "Render"
        }
      },
      "hints_references": [
        "https://getbootstrap.com/docs/4.4/getting-started/introduction/",
        "https://www.chartjs.org/",
        "https://jwt.io/introduction/",
        "https://react-bootstrap.github.io/",
        "https://materializecss.com/",
        "https://tailwindcss.com/",
        "https://expressjs.com/"
      ],
      "terms_conditions": [
        "Do not share this confidential document with anyone.",
        "Open-source your code without mentioning the company's name in the code.",
        "The company will not use your source code for commercial purposes.",
        "Violation of terms and conditions is strictly prohibited."
      ],
      "notes": "For capstone, the use case has to be identified by the developer."
    }
  };

  return (
    <div>
    <Navlink />
  
    <div className=" p-4 border rounded bg-light">
      <h2 className="text-center text-uppercase text-primary mb-4">Capstone Project</h2>
  
      <h3 className="text-info">Description:</h3>
      <p>
        To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.
      </p>
  
      <h3 className="text-info mt-4">Task Title: <span className='head'>{projectDetails.project.title}</span></h3>
  
      <div className="mt-4">
        <h3 className="text-info">Specifications on the design:</h3>
        <ul>
          <li>Front-end: {projectDetails.project.requirements.front_end}</li>
          <li>Back-end: {projectDetails.project.requirements.back_end}</li>
          <li>Database: {projectDetails.project.requirements.database}</li>
        </ul>
      </div>
  
      <div className="mt-4">
        <h3 className="text-info">Requirements:</h3>
        <ul>
          <li>Code Quality: {projectDetails.project.requirements.code_quality ? 'Yes' : 'No'}</li>
          <li>CSS Frameworks: {projectDetails.project.requirements.css_framework.join(', ')}</li>
        </ul>
      </div>
  
      <div className="mt-4">
        <h3 className="text-info">Submission:</h3>
        <p>Front-end Repository: {projectDetails.project.submission.github_repositories.front_end}</p>
        <p>Back-end Repository: {projectDetails.project.submission.github_repositories.back_end}</p>
      </div>
  
      <div className="mt-4">
        <h3 className="text-info">Deployment:</h3>
        <p>Front-end: {projectDetails.project.submission.deployment.front_end}</p>
        <p>Back-end: {projectDetails.project.submission.deployment.back_end}</p>
      </div>
  
      <div className="mt-4">
        <h3 className="text-info">References:</h3>
        <ul>
          {projectDetails.project.hints_references.map((reference, index) => (
            <li key={index}>{reference}</li>
          ))}
        </ul>
      </div>
  
      <div className="mt-4">
        <h3 className="text-info">Terms and Conditions:</h3>
        <ul>
          {projectDetails.project.terms_conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
  
      <p className="mt-4">{projectDetails.project.notes}</p>
    </div>
  
    <div className="mt-4 p-4 border rounded bg-light">
      <h3 className="text-info">Submit Project:</h3>
      <form onSubmit={handleProject}>
  
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Frontend source code"
          value={project.frontendsourcecode}
          onChange={(e) => setProject({ ...project, frontendsourcecode: e.target.value })}
          required
        />
  
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Frontend Deploy URL"
          value={project.frontendDepoly}
          onChange={(e) => setProject({ ...project, frontendDepoly: e.target.value })}
          required
        />
  
        <input
          type="text"
          className="form-control mb-2"
          placeholder="BackEnd source Code"
          value={project.backendsourcecode}
          onChange={(e) => setProject({ ...project, backendsourcecode: e.target.value })}
          required
        />
  
        <input
          type="text"
          className="form-control mb-2"
          placeholder="BackEnd source URL"
          value={project.backendDeploy}
          onChange={(e) => setProject({ ...project, backendDeploy: e.target.value })}
          required
        />
  
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Commands"
          value={project.commands}
          onChange={(e) => setProject({ ...project, commands: e.target.value })}
        />
  
        <p className="mt-2">{see}</p>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  );
}

export default Project;