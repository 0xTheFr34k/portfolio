// Portfolio data extracted from resume
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Yassine Taya",
    email: "y.taya.sec@gmail.com",
    phone: "+212702955821",
    location: "Morocco",
    birthDate: "28 Feb 2001",
    linkedin: "https://www.linkedin.com/in/yassinetaya/",
    github: "https://github.com/0xthefr34k",
    fiverr: "https://www.fiverr.com/ytaya_42",
    title: "DevOps & Cloud Engineer",
    tagline: "Infrastructure automation, container orchestration, and scalable cloud solutions"
  },

  // Professional Summary
  summary: `A Software & Cloud Engineer with proven experience designing and building scalable distributed applications and the robust infrastructure to run them. My expertise lies at the intersection of development (Python, Go, Microservices) and cloud operations. I specialize in the full lifecycle, from backend engineering and API optimization to deploying resilient, automated systems using Kubernetes, Docker, Terraform, and CI/CD pipelines on platforms like AWS. Focused on driving efficiency, reliability, and security from code to production.`,

  // Work Experience
  experience: [
    {
      id: 1,
      company: "OS Websolutions B.V.",
      position: "Software Engineer",
      duration: "Mar 2025 – Sep 2025",
      location: "Netherlands / Remote",
      type: "Full-time",
      achievements: [
        "Designed and deployed microservices on AWS using Docker & Kubernetes, ensuring high availability and scalability",
        "Automated CI/CD pipelines to accelerate deployments and reduce errors",
        "Improved infrastructure reliability through monitoring & alerting (Prometheus, ELK, Uptime Kuma)",
        "Collaborated with cross-functional teams to deliver secure and resilient features"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD", "Prometheus", "ELK", "Uptime Kuma"]
    },
    {
      id: 2,
      company: "ThreatsEye",
      position: "Software Engineer",
      duration: "Nov 2023 – May 2024",
      location: "Morocco",
      type: "Full-time",
      achievements: [
        "Built data ingestion pipelines with Apache Airflow handling millions of records",
        "Implemented RabbitMQ-based distributed processing for asynchronous workloads",
        "Enhanced system observability with ELK + automated alerts, reducing downtime",
        "Optimized backend APIs, improving response times by 30%"
      ],
      technologies: ["Apache Airflow", "RabbitMQ", "Python", "ELK Stack", "Backend APIs"]
    },
    {
      id: 3,
      company: "Fiverr",
      position: "Freelancer",
      duration: "2020 – 2022",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Delivered Python + Puppeteer automation scripts for data collection and client workflows",
        "Built custom scraping & monitoring solutions with focus on speed and maintainability",
        "Helped clients reduce manual workload by 60% through automation"
      ],
      technologies: ["Python", "Puppeteer", "Web Scraping", "Automation", "JavaScript"]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      name: "Homelab",
      description: "Cloud-Native Infrastructure",
      role: "Infrastructure Engineer",
      achievements: [
        "Designed a self-hosted cloud lab with Proxmox, Kubernetes, and Terraform",
        "Deployed GitOps workflows with FluxCD for automated cluster management",
        "Configured Longhorn for distributed storage, and MinIO for S3-compatible object storage",
        "Integrated Uptime Kuma for monitoring & observability",
        "Set up Traefik as Ingress controller for routing and SSL termination"
      ],
      technologies: ["Proxmox", "Kubernetes", "Terraform", "FluxCD", "Longhorn", "MinIO", "Traefik", "GitOps"],
      type: "Personal",
      link: "https://github.com/0xTheFr34k/Homelab"
    },
    {
      id: 2,
      name: "Orova.ai",
      description: "AI-Powered Compliance Platform",
      role: "Backend Developer",
      achievements: [
        "Contributed to backend development and cloud deployment",
        "Integrated secure authentication and user role management",
        "Helped scale the microservice architecture for better performance and maintainability"
      ],
      technologies: ["Microservices", "Cloud Deployment", "Authentication", "Backend Development"],
      type: "Professional",
      link: "https://orova.ai"
    },
    {
      id: 3,
      name: "ThreatsEye.io",
      description: "Cloud-Based Threat Detection Platform",
      role: "Core Developer",
      achievements: [
        "Developed core features around real-time network analysis and automated response",
        "Built distributed task execution pipelines using Airflow and RabbitMQ",
        "Focused on system reliability, security automation, and proactive alerting mechanisms"
      ],
      technologies: ["Apache Airflow", "RabbitMQ", "Real-time Analysis", "Security Automation"],
      type: "Professional",
      link: "https://threatseye.io"
    },
    {
      id: 4,
      name: "Jotiq.ai",
      description: "AI Recruitment Assistant",
      role: "Backend Developer",
      achievements: [
        "Implemented AI-driven candidate-job matching logic",
        "Used Node.js, TypeScript, and MongoDB for API and data flow development"
      ],
      technologies: ["Node.js", "TypeScript", "MongoDB", "AI Integration", "API Development"],
      type: "Professional",
      link: "https://jotiq.ai"
    }
  ],

  // Skills organized by category
  skills: {
    programmingLanguages: [
      { name: "Python", level: "Advanced" },
      { name: "Go", level: "Advanced"},
      { name: "C/C++", level: "Advanced"},
      { name: "PHP", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced"},
      { name: "TypeScript", level: "Advanced"},
      { name: "Bash", level: "Advanced" }
    ],
    backendDevelopment: [
      { name: "REST APIs", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
      { name: "Distributed Systems", level: "Advanced" }
    ],
    devOpsCloud: [
      { name: "Kubernetes", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Proxmox", level: "Advanced" },
      { name: "Terraform", level: "Advanced" },
      { name: "Ansible", level: "Intermediate" },
      { name: "GitOps (FluxCD)", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" },
      { name: "AWS", level: "Advanced" },
      { name: "Azure", level: "Intermediate" },
      { name: "Google Cloud", level: "Intermediate" }
    ],
    dataProcessing: [
      { name: "Apache Airflow", level: "Advanced" },
      { name: "RabbitMQ", level: "Advanced" },
      { name: "Apache Kafka", level: "Advanced" }
    ],
    monitoringSecurity: [
      { name: "ELK Stack", level: "Advanced" },
      { name: "Prometheus", level: "Advanced" },
      { name: "Suricata", level: "Intermediate" },
      { name: "IDS", level: "Intermediate" },
      { name: "SIEM", level: "Intermediate" }
    ]
  },

  // Education
  education: [
    {
      id: 1,
      institution: "1337 - 42 Network - UM6P",
      degree: "Software Engineering",
      duration: "2021 – 2025",
      location: "Ben Guerir, Morocco",
      type: "University",
      status: "Completed"
    },
    {
      id: 2,
      institution: "OFPPT",
      degree: "Technician Specialist in Software Development",
      duration: "2018 – 2021",
      location: "Morocco",
      type: "Technical Institute",
      status: "Completed"
    }
  ],

  // Certificates
  certificates: [
    {
      id: 1,
      name: "Object-Oriented Data Structures in C++",
      issuer: "University of Illinois Urbana-Champaign",
      platform: "Coursera",
      year: "2023",
      skills: ["C++", "Data Structures", "Object-Oriented Programming"]
    },
    {
      id: 2,
      name: "Google Cybersecurity",
      issuer: "Google",
      platform: "Coursera",
      year: "2023",
      description: "Covers Linux, Python, SQL, SIEM, IDS, and secure system administration",
      skills: ["Linux", "Python", "SQL", "SIEM", "IDS", "Security"]
    }
  ],

  // Awards & Achievements
  awards: [
    {
      id: 1,
      title: "Hacker",
      organization: "Hackthebox",
      description: "Solved advanced security challenges, enhancing skills in secure software design and system hardening",
      year: "2023",
      type: "Security Achievement"
    }
  ],

  // Social Links
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/yassinetaya/",
      icon: "linkedin"
    },
    {
      platform: "GitHub",
      url: "https://github.com/0xthefr34k",
      icon: "github"
    },
    {
      platform: "Fiverr",
      url: "https://www.fiverr.com/ytaya_42",
      icon: "fiverr"
    },
    {
      platform: "Email",
      url: "mailto:y.taya.sec@gmail.com",
      icon: "email"
    }
  ],

  // Theme colors and styling preferences
  theme: {
    primaryColor: "#2563eb", // Blue
    secondaryColor: "#1e40af", // Darker blue
    accentColor: "#3b82f6", // Light blue
    backgroundColor: "#f8fafc", // Light gray
    textColor: "#1e293b", // Dark gray
    cardBackground: "#ffffff"
  }
};

export default portfolioData;
