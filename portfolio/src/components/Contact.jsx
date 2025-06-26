import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Icon from './Icons';
import './Contact.css';

const Contact = () => {

  const contactMethods = [
    {
      icon: <Icon name="email" size={24} />,
      title: 'Email',
      value: portfolioData.personal.email,
      link: `mailto:${portfolioData.personal.email}`,
      description: 'Send me an email anytime'
    },

    {
      icon: <Icon name="linkedin" size={24} />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: portfolioData.personal.linkedin,
      description: 'Let\'s connect professionally'
    },
    {
      icon: <Icon name="github" size={24} />,
      title: 'GitHub',
      value: 'View my code',
      link: portfolioData.personal.github,
      description: 'Check out my projects and contributions'
    },
    {
      icon: <Icon name="fiverr" size={24} />,
      title: 'Fiverr',
      value: 'Hire me for projects',
      link: portfolioData.personal.fiverr,
      description: 'Available for freelance work'
    },
    {
      icon: <Icon name="location" size={24} />,
      title: 'Location',
      value: portfolioData.personal.location,
      link: null,
      description: 'Based in Morocco'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-intro">
          <p>
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Whether you have a question, want to discuss a project, or just want to say hello, 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <div className="method-icon">
                    {method.icon}
                  </div>
                  <div className="method-content">
                    <h4 className="method-title">{method.title}</h4>
                    <p className="method-description">{method.description}</p>
                    {method.link ? (
                      <a
                        href={method.link}
                        target={['LinkedIn', 'GitHub', 'Fiverr'].includes(method.title) ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="method-link"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="method-value">{method.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="availability">
              <h4>Availability</h4>
              <p>
                I'm currently open to new opportunities and freelance projects. 
                I typically respond to emails within 24 hours.
              </p>
              <div className="status-indicator">
                <div className="status-dot available"></div>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
