import React, { useContext } from "react";
import "./Portfolio.css";
import { projectsData } from "../../../Data/ProjectData";
import { themeContext } from "../../../Data/Context";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      <div>
        <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
        <br />
        <span>Portfolio</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", gap: "50px 0" }}>
        <span style={{ color: darkMode ? 'white' : '' }} >Works <span className="touchSpan">Gallery</span></span>
        <div className="projects">
          {projectsData.map((project) => (
            <div
              className="projects-thumb"
              key={project.id}
              style={{
                background: darkMode ? 'transparent' : '',
                borderColor: darkMode ? 'orange' : '',
                transition: 'border-color 0.3s ease',
              }}
            >
              <div className="projects-info">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <small className="projects-tag">{project.type}</small>
                  <Link to={`/projectPage/${project.id}`} className="projects-tag">Click to Demo</Link>
                </div>
                <h2 className="projects-title">{project.title}</h2>
              </div>
              <Link to={`/projectPage/${project.id}`} className="popup-video">
                <div className="projects-image img-fluid">
                  <img src={`${project.imageUrl}`} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
