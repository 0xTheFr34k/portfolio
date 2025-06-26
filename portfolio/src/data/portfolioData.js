// Portfolio data extracted from resume
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Yassine Taya",
    email: "y.taya.sec@gmail.com",
    location: "Morocco",
    birthDate: "28 Feb 2001",
    linkedin: "https://www.linkedin.com/in/yassinetaya/",
    github: "https://github.com/0xthefr34k",
    fiverr: "https://www.fiverr.com/ytaya_42",
    title: "Software Engineer",
    tagline: "Building scalable backend systems and solving complex technical problems"
  },

  // Professional Summary
  summary: `Software Engineer passionate about building scalable backend systems, designing clean architectures, and solving complex technical problems. Strong experience in developing cloud-based services, distributed systems, and automation pipelines. Skilled in multiple programming languages and software design patterns. Passionate about building robust, high-performance software solutions in fast-paced engineering teams.`,

  // Work Experience
  experience: [
    {
      id: 1,
      company: "OS Websolutions B.V.",
      position: "Software Engineer",
      duration: "Mar 2025 – present",
      location: "Netherlands / Remote",
      type: "Full-time",
      achievements: [
        "Developing scalable backend services for web platforms",
        "Implemented microservices using RESTful APIs and message queues",
        "Leveraged AWS and Docker to ensure system scalability and high availability",
        "Collaborated closely with cross-functional teams to design and deliver new product features"
      ],
      technologies: ["AWS", "Docker", "Microservices", "RESTful APIs", "Message Queues"]
    },
    {
      id: 2,
      company: "ThreatsEye",
      position: "Software Engineer",
      duration: "Nov 2023 – May 2024",
      location: "Morocco",
      type: "Full-time",
      achievements: [
        "Designed and implemented data processing pipelines using Apache Airflow",
        "Built distributed services with RabbitMQ for inter-service communication",
        "Enhanced system observability and error handling, improving system stability",
        "Developed automated alerting tools to proactively detect system issues",
        "Contributed to backend API design and code optimization for better performance"
      ],
      technologies: ["Apache Airflow", "RabbitMQ", "Python", "Backend APIs", "System Monitoring"]
    },
    {
      id: 3,
      company: "Fiverr",
      position: "Freelancer",
      duration: "2020 – 2022",
      location: "Remote",
      type: "Freelance",
      achievements: [
        "Delivered data extraction solutions using web scraping (Python, Puppeteer)",
        "Developed customized scraping tools for client-specific business needs",
        "Focused on code quality, data accuracy, and performance optimization",
        "Developed scraping bots with Python and Puppeteer for high-demand use cases"
      ],
      technologies: ["Python", "Puppeteer", "Web Scraping", "Data Extraction", "JavaScript"]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      name: "Orova.ai",
      description: "AI-Powered Compliance Platform",
      role: "Backend Developer",
      achievements: [
        "Contributed to backend development and cloud deployment",
        "Integrated secure authentication and user role management",
        "Helped scale the microservice architecture for better performance and maintainability"
      ],
      technologies: ["Microservices", "Cloud Deployment", "Authentication", "Backend Development"],
      type: "Professional"
    },
    {
      id: 2,
      name: "ThreatsEye.io",
      description: "Cloud-Based Threat Detection Platform",
      role: "Core Developer",
      achievements: [
        "Developed core features around real-time network analysis and automated response",
        "Built distributed task execution pipelines using Airflow and RabbitMQ",
        "Focused on system reliability, security automation, and proactive alerting mechanisms"
      ],
      technologies: ["Apache Airflow", "RabbitMQ", "Real-time Analysis", "Security Automation"],
      type: "Professional"
    },
    {
      id: 3,
      name: "Jotiq.ai",
      description: "AI Recruitment Assistant (MVP)",
      role: "Backend Developer",
      achievements: [
        "Built backend services for data ingestion and analysis",
        "Implemented matching logic for candidate-job fit based on AI scoring",
        "Used Node.js, TypeScript, and MongoDB for API and data flow development"
      ],
      technologies: ["Node.js", "TypeScript", "MongoDB", "AI Integration", "API Development"],
      type: "MVP"
    }
  ],

  // Skills organized by category
  skills: {
    programmingLanguages: [
      { name: "Python", level: "Advanced", years: 6 },
      { name: "Go", level: "Intermediate", years: 2 },
      { name: "C/C++", level: "Advanced", years: 6 },
      { name: "PHP", level: "Intermediate", years: 2 },
      { name: "JavaScript", level: "Advanced", years: 7 },
      { name: "TypeScript", level: "Advanced", years: 5 },
      { name: "Bash", level: "Advanced", years: 7 }
    ],
    backendDevelopment: [
      { name: "REST APIs", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
      { name: "Distributed Systems", level: "Advanced" }
    ],
    cloudPlatforms: [
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "Kubernetes", level: "Intermediate" }
    ],
    dataProcessing: [
      { name: "Apache Airflow", level: "Advanced" },
      { name: "RabbitMQ", level: "Advanced" }
    ],
    monitoringSecurity: [
      { name: "ELK Stack", level: "Intermediate" },
      { name: "Prometheus", level: "Intermediate" },
      { name: "IDS", level: "Intermediate" },
      { name: "SIEM", level: "Intermediate" },
      { name: "Suricata", level: "Intermediate" }
    ]
  },

  // Education
  education: [
    {
      id: 1,
      institution: "1337 - 42 Network - UM6P",
      degree: "Software Engineering",
      duration: "2021 – present",
      location: "Ben Guerir, Morocco",
      type: "University",
      status: "In Progress"
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

  // Client Testimonials
  testimonials: [
    {
      id: 1,
      clientName: "soowarez",
      clientCountry: "France",
      clientFlag: "🇫🇷",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Script Development",
      reviewText: "Ultra rapide à faire, avant de passer par ytaya_42 j'ai demander a 2 autre personne sur fiverr mais il n'étais pas capable de faire mon script. Seul ytaya_42 a réussi a leur faire. Le code est facile a lire, travail correct, réponds rapidement. Merci beaucoup",
      projectDetails: "Custom automation script development",
      helpful: { yes: 0, no: 0 },
      verified: true
    },
    {
      id: 2,
      clientName: "dreamer002418",
      clientCountry: "Philippines",
      clientFlag: "🇵🇭",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Web Automation",
      reviewText: "Yassine is an amazing developer, I asked him for something that seems impossible but yet he delivered it perfectly and according to what I needed. He is very diligent and works extremely hard. I gave him a deadline and was able to deliver it without delay. If you're looking for an amazing developer that can do puppeteer or anything that you need that fits his services, I can guarantee that he will deliver it to the best of his ability. This guy will reach the top soon, better work with him now or you'll regret it. Extremely satisfied with everything.",
      projectDetails: "Complex web automation with Puppeteer",
      helpful: { yes: 0, no: 0 },
      verified: true
    },
    {
      id: 3,
      clientName: "priuslanehogger",
      clientCountry: "United States",
      clientFlag: "🇺🇸",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Development",
      reviewText: "Very fast, thank you!",
      projectDetails: "Quick development task",
      helpful: { yes: 0, no: 0 },
      verified: true
    },
    {
      id: 4,
      clientName: "fortunevieyr4",
      clientCountry: "United States",
      clientFlag: "🇺🇸",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Development",
      reviewText: "Amazing job!",
      projectDetails: "Custom development project",
      helpful: { yes: 0, no: 0 },
      verified: true,
      isRepeatClient: true
    },
    {
      id: 5,
      clientName: "chinmay_15",
      clientCountry: "India",
      clientFlag: "🇮🇳",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Development",
      reviewText: "Great work",
      projectDetails: "Development project",
      helpful: { yes: 0, no: 0 },
      verified: true
    },
    {
      id: 6,
      clientName: "fortunevieyr4",
      clientCountry: "United States",
      clientFlag: "🇺🇸",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Development",
      reviewText: "Amazing job my friend, thanks!",
      projectDetails: "Follow-up development project",
      helpful: { yes: 0, no: 0 },
      verified: true,
      isRepeatClient: true
    },
    {
      id: 7,
      clientName: "sb5_sb5",
      clientCountry: "United Kingdom",
      clientFlag: "🇬🇧",
      rating: 5,
      reviewDate: "2 years ago",
      projectCategory: "Development",
      reviewText: "Superb communication and a great delivery. Very happy thank you.",
      projectDetails: "Custom development solution",
      helpful: { yes: 0, no: 0 },
      verified: true
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
