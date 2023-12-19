import React, { useState } from 'react';
import Navlink from '../Navlink/Navlink';
import { protecdInstance } from '../../services/instance';

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

  const handleProject = async (e) => {
    e.preventDefault();
    try {
     const res=await protecdInstance.post('/task/',project)
      setSee(res.data.message);
      console.log(res.data.message);
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
      <div>
        <h2>Capstone Project</h2>
        <h3>Description:</h3>
        <p>
          To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.
        </p>
        <h3>Task Title:</h3>
        <p>{projectDetails.project.title}</p>
        <div>
          <ul>
            <li>
              <h3>Any specifications on the design?</h3>
            </li>
            <li>Front-end: {projectDetails.project.requirements.front_end}</li>
            <li>Back-end: {projectDetails.project.requirements.back_end}</li>
            <li>Database: {projectDetails.project.requirements.database}</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h3>Requirements:</h3>
            </li>
            <li>Code Quality: {projectDetails.project.requirements.code_quality ? 'Yes' : 'No'}</li>
            <li>CSS Frameworks: {projectDetails.project.requirements.css_framework.join(', ')}</li>
          </ul>
        </div>
        <div>
          <h3>Submission:</h3>
          <p>Front-end Repository: {projectDetails.project.submission.github_repositories.front_end}</p>
          <p>Back-end Repository: {projectDetails.project.submission.github_repositories.back_end}</p>
        </div>
        <div>
          <h3>Deployment:</h3>
          <p>Front-end: {projectDetails.project.submission.deployment.front_end}</p>
          <p>Back-end: {projectDetails.project.submission.deployment.back_end}</p>
        </div>
        <div>
          <h3>References:</h3>
          <ul>
            {projectDetails.project.hints_references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Terms and Conditions:</h3>
          <ul>
            {projectDetails.project.terms_conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
        </div>
        <p>{projectDetails.project.notes}</p>
          </div>
          <div>
              <h3>Submit Project:</h3>
              <form onSubmit={handleProject}>
              <input
            type="text"
            placeholder="Frontend source code"
            value={project.frontendsourcecode} 
            onChange={(e) => setProject({ ...project, frontendsourcecode: e.target.value })} 
            required
          /><br />
          <input
            type="text"
            placeholder="Frontend Deploy URL"
            value={project.frontendDepoly}
            onChange={(e) => setProject({ ...project, frontendDepoly: e.target.value })} 
            required
          /><br />
          <input
            type="text"
            placeholder="BackEnd source Code"
            value={project.backendsourcecode}
            onChange={(e) => setProject({ ...project, backendsourcecode: e.target.value })} 
            required
          /><br />
          <input
            type="text"
            placeholder="BackEnd source URL"
            value={project.backendDeploy} 
            onChange={(e) => setProject({ ...project, backendDeploy: e.target.value })}
            required
          /><br />
          <input
            type="text"
            placeholder="Commands"
            value={project.commands}
            onChange={(e) => setProject({ ...project, commands: e.target.value })} 
          /><br />
          <p>{see}</p>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Project;