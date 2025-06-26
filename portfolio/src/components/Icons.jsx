import React from 'react';

// Icon component that uses icons8.com icons
const Icon = ({ name, size = 24, className = "" }) => {
  const iconMap = {
    // Programming Languages
    'python': 'https://img.icons8.com/color/48/python--v1.png',
    'javascript': 'https://img.icons8.com/color/48/javascript--v1.png',
    'typescript': 'https://img.icons8.com/color/48/typescript.png',
    'go': 'https://img.icons8.com/color/48/golang.png',
    'cpp': 'https://img.icons8.com/color/48/c-plus-plus-logo.png',
    'c': 'https://img.icons8.com/color/48/c-programming.png',
    'php': 'https://img.icons8.com/officel/48/php-logo.png',
    'bash': 'https://img.icons8.com/color/48/bash.png',
    'sql': 'https://img.icons8.com/color/48/sql.png',

    // Cloud & DevOps
    'aws': 'https://img.icons8.com/color/48/amazon-web-services.png',
    'docker': 'https://img.icons8.com/color/48/docker.png',
    'kubernetes': 'https://img.icons8.com/color/48/kubernetes.png',
    'linux': 'https://img.icons8.com/color/48/linux--v1.png',

    // Databases
    'mongodb': 'https://img.icons8.com/color/48/mongodb.png',
    'mysql': 'https://img.icons8.com/color/48/mysql-logo.png',
    'postgresql': 'https://img.icons8.com/color/48/postgreesql.png',

    // Frameworks & Tools
    'nodejs': 'https://img.icons8.com/color/48/nodejs.png',
    'react': 'https://img.icons8.com/color/48/react-native.png',
    'git': 'https://img.icons8.com/color/48/git.png',
    'github': 'https://img.icons8.com/color/48/github--v1.png',

    // Companies & Organizations
    'google': 'https://img.icons8.com/color/48/google-logo.png',
    'coursera': 'https://img.icons8.com/color/48/coursera.png',
    'um6p': 'https://img.icons8.com/color/48/university.png',
    'fiverr': 'https://img.icons8.com/color/48/fiverr.png',

    // Social & Contact
    'linkedin': 'https://img.icons8.com/color/48/linkedin.png',
    'email': 'https://img.icons8.com/color/48/email.png',
    'phone': 'https://img.icons8.com/color/48/phone.png',
    'location': 'https://img.icons8.com/color/48/marker.png',

    // Security & Monitoring
    'security': 'https://img.icons8.com/color/48/security-checked.png',
    'monitoring': 'https://img.icons8.com/color/48/activity-monitor.png',
    'api': 'https://img.icons8.com/color/48/api-settings.png',
    'microservices': 'https://img.icons8.com/color/48/module.png',

    // General Tech
    'ai': 'https://img.icons8.com/color/48/artificial-intelligence.png',
    'cloud': 'https://img.icons8.com/color/48/cloud.png',
    'database': 'https://img.icons8.com/color/48/database.png',
    'server': 'https://img.icons8.com/color/48/server.png',
    'code': 'https://img.icons8.com/color/48/code.png',
    'terminal': 'https://img.icons8.com/color/48/console.png',
    'arrow-up': 'https://img.icons8.com/color/48/up-arrow.png',

    // Education & Certificates
    'certificate': 'https://img.icons8.com/color/48/certificate.png',
    'education': 'https://img.icons8.com/color/48/graduation-cap.png',
    'award': 'https://img.icons8.com/color/48/trophy.png',

    // Project Types
    'professional': 'https://img.icons8.com/color/48/briefcase.png',
    'mvp': 'https://img.icons8.com/color/48/rocket.png',
    'freelance': 'https://img.icons8.com/color/48/handshake.png',

    'elasticsearch': 'https://img.icons8.com/color/48/elasticsearch.png',
    'prometheus': 'https://img.icons8.com/?size=48&id=Ei4ZhVQvIMHE&format=png'
  };

  const iconUrl = iconMap[name];

  if (!iconUrl) {
    // Fallback to a generic icon if not found
    return (
      <div
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
      >
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <img
      src={iconUrl}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default Icon;