import React from "react";
import './ProjectPage.css';
import { projectsData } from "../Data/ProjectData";
import { useParams } from 'react-router-dom';
import comingSoon from './../img/projects/comingSoon.png';

const ProjectPage = () => {
  const { projectId } = useParams();
  const selectedProject = projectsData.find(project => project.id.toString() === projectId);

  if (!selectedProject) {
    return (
      <div className="not-found" style={{ backgroundImage: `url(${comingSoon})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height:"100vh"}}>
      </div>
    );
  }

  return (
    <div className="project-page">
      <div className="upper-div">
        <div className="u-left-div">
          <h1>{selectedProject.title}</h1>
        </div>

        <div className="u-right-div">
          <button className="btn" onClick={() => window.open("https://github.com/Younis2021", "_blank")}>Git Repository</button>
          <button className="btn visit" onClick={() => window.open(selectedProject.demoUrl, "_blank")}>Visit</button>
        </div>
      </div>

      <div className="lower-div">
        <div className="l-first-div">
          <div className="l-first-left-div">
            <h2>{selectedProject.type}</h2>
            <span>The deployment that is available to your visitors</span>
          </div>
          <div className="l-first-right-div">
            <span>Project</span>
            <span>Project</span>
          </div>
        </div>
        <div className="l-second-div">
          <div className="l-second-left-div">
            <img src={`${selectedProject.imageUrl}`} alt="Project Screenshot" />
          </div>
          <div className="l-second-right-div">
            <div>
              <h6>Go To Demo</h6>
              <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">management-system-project.vercel.app</a>
            </div>
            <div>
              <h6>Domain</h6>
              <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">management-system-project.vercel.app</a>
            </div>
            <div>
              <div>
                <h6>Status</h6>
                <span>Ready</span>
              </div>
              <div>
                <h6>Created</h6>
                <span>days ago by Younis2021</span>
              </div>
            </div>
            <div>
              <h6>Source</h6>
              <span>Full React Project</span>
            </div>
          </div>
        </div>
        <div className="l-third-div">
          <span>To update your Production Deployment, push to the "main" branch.</span>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
