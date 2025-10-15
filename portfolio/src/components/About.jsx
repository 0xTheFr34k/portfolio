import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icons';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: 'Infrastructure Automation',
      description: 'Building cloud-native infrastructure with Kubernetes, Terraform, and GitOps for production-grade environments.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: 'CI/CD & DevOps',
      description: 'Automating deployment pipelines, container orchestration, and ensuring high availability with monitoring.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      title: 'Backend Engineering',
      description: 'Developing scalable REST APIs, microservices, and distributed systems with Python, Go, and modern frameworks.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Security-First Architecture',
      description: 'Designing resilient systems with security best practices, observability, and proactive monitoring.'
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
                I am a passionate <strong>Engineer</strong> focused on building resilient and high-performing 
                technology solutions from code to cloud. My experience spans core <strong>Software Engineering</strong>, 
                where I've developed sophisticated backend and distributed systems including data ingestion pipelines 
                with <strong>Apache Airflow</strong> and message queues like <strong>RabbitMQ</strong>and deep 
                expertise in <strong>DevOps and Cloud Engineering</strong>.
              </p>
              <p>
                I specialize in modern infrastructure practices: deploying, managing, and scaling production 
                systems on <strong>AWS</strong> using <strong>Kubernetes</strong>, automating infrastructure 
                with <strong>Terraform</strong>, and ensuring continuous deployment via <strong>GitOps</strong> workflows 
                (FluxCD). My goal is always to deliver systems that are scalable, reliable, and observable.
              </p>
              <p>
                Beyond professional roles at companies like OS Websolutions B.V. and ThreatsEye, I maintain 
                a self-hosted <strong>Homelab</strong> where I actively master and experiment with advanced 
                cloud-native tools, reinforcing my commitment to operational excellence and continuous learning.
              </p>
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
