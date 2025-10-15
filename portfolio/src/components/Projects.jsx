import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const projectTypes = ['All', 'Professional', 'Personal'];
  
  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.type === filter);

  const getProjectIcon = (projectName) => {
    if (projectName.includes('Homelab')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      );
    } else if (projectName.includes('AI') || projectName.includes('Jotiq')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
        </svg>
      );
    } else if (projectName.includes('Threat') || projectName.includes('Security')) {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
    } else {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10,9 9,9 8,9"/>
        </svg>
      );
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-filter">
          {projectTypes.map((type) => (
            <button
              key={type}
              className={`filter-btn ${filter === type ? 'active' : ''}`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  {getProjectIcon(project.name)}
                </div>
                <div className="project-type">
                  <span className={`type-badge ${project.type.toLowerCase()}`}>
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-role">
                  <strong>Role:</strong> {project.role}
                </p>
                
                <div className="project-achievements">
                  <h4>Key Achievements:</h4>
                  <ul className="achievements-list">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20,6 9,17 4,12"/>
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="project-footer">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
