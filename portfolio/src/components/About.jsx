import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icons';
import './About.css';

const About = () => {
  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '3', label: 'Companies Worked' },
    { number: '7+', label: 'Technologies Mastered' }
  ];

  const highlights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Backend Architecture',
      description: 'Designing scalable microservices and distributed systems with modern cloud technologies.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: 'DevOps & Automation',
      description: 'Implementing CI/CD pipelines, containerization, and infrastructure automation for efficient deployments.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: 'Problem Solving',
      description: 'Analyzing complex technical challenges and delivering innovative solutions with clean, maintainable code.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="about-photo-mobile">
              <img
                src="/profile-photo.jpg"
                alt={`${portfolioData.personal.name} - Software Engineer`}
                className="about-profile-photo"
              />
            </div>
            <div className="about-description">
              <p>
                I'm a passionate Software Engineer with over 4 years of experience in building 
                scalable backend systems and cloud-based solutions. My journey in software 
                development has taken me through various domains, from cybersecurity platforms 
                to AI-powered applications.
              </p>
              <p>
                Currently working at OS Websolutions B.V. in the Netherlands, I specialize in 
                developing microservices architectures, implementing data processing pipelines, 
                and ensuring high system availability through modern DevOps practices.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or solving security challenges on platforms like HackTheBox. 
                I believe in continuous learning and staying updated with the latest industry trends.
              </p>
            </div>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-highlights">
            <div className="about-photo-desktop">
              <img
                src="/profile-photo.jpg"
                alt={`${portfolioData.personal.name} - Software Engineer`}
                className="about-profile-photo"
              />
            </div>
            <div className="highlights-content">
              <h3 className="highlights-title">What I Do</h3>
            <div className="highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    {highlight.icon}
                  </div>
                  <h4 className="highlight-title">{highlight.title}</h4>
                  <p className="highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>

        <div className="about-personal">
          <div className="personal-info">
            <h3>Quick Facts</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">
                  <Icon name="location" size={20} />
                  Location:
                </span>
                <span className="info-value">{portfolioData.personal.location}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <Icon name="email" size={20} />
                  Email:
                </span>
                <span className="info-value">{portfolioData.personal.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <Icon name="github" size={20} />
                  GitHub:
                </span>
                <span className="info-value">
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
                    0xthefr34k
                  </a>
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <Icon name="fiverr" size={20} />
                  Fiverr:
                </span>
                <span className="info-value">
                  <a href={portfolioData.personal.fiverr} target="_blank" rel="noopener noreferrer">
                    ytaya_42
                  </a>
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">
                  <Icon name="education" size={20} />
                  Languages:
                </span>
                <span className="info-value">Arabic, French, English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
