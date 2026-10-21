// ============================================================
// CENTRAL DATA FILE — Edit this to update all portfolio content
// ============================================================

export const profile = {
  name: "Phanindra Ratna Gopi",
  initials: "PG",
  title: "Java Developer | Spring Boot Developer | Full Stack Developer",
  email: "puligopi161@gmail.com",
  github: "https://github.com/puligopi12",
  linkedin: "https://www.linkedin.com/in/p-phanindra-ratna-gopi-706b352aa",
  resumePath: "/assets/Phanindra_Ratna_Gopi_Resume.pdf",
  resumeFileName: "Phanindra_Ratna_Gopi_Resume.pdf",
  objective:
    "To build reliable, secure, high-performance software applications using Java, Spring Boot, microservices architecture, and modern frontend technologies.",
  heroHeadline: "Building Scalable Backend Systems & Modern Full-Stack Web Experiences",
  heroSubtext:
    "Computer Science graduate & Software Trainee specializing in Java, Spring Boot REST APIs, microservices, and modern React interfaces. Dedicated to writing clean, maintainable, production-ready code.",
  about: [
    "I am a Computer Science and Engineering graduate from Kallam Haranadhareddy Institute of Technology (2021–2025), with a strong foundation in object-oriented programming, data structures, and software design principles.",
    "My primary expertise lies in Java backend engineering — architecting RESTful APIs and enterprise services using Spring Boot, Spring Data JPA, and Spring Security. I have extensive hands-on experience with MySQL and Oracle SQL, implementing JWT-based stateless authentication and relational data modeling.",
    "On the frontend, I build dynamic, responsive user interfaces using React.js, Angular, JavaScript (ES6+), HTML5, and modern CSS. My daily engineering workflow incorporates Git, Maven, Postman, Docker basics, IntelliJ IDEA, and VS Code.",
    "Currently, I am working as a Software Trainee at Jagan Technologies, collaborating with engineering teams to develop robust backend services and continuously elevate software quality.",
  ],
  stats: [
    { label: "Degree & Branch", value: "B.Tech CSE" },
    { label: "Graduation", value: "2021 – 2025" },
    { label: "Academic CGPA", value: "7.9 / 10" },
    { label: "Current Role", value: "Software Trainee" },
  ]
};

export const techLine = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "React.js",
  "MySQL",
  "JWT",
  "Maven",
  "Git",
];

// ============================================================
// SKILLS — grouped by category with vibrant color themes
// ============================================================
export const skillGroups = [
  {
    category: "Programming",
    theme: "amber",
    icon: "Code2",
    badge: "Core Foundation",
    skills: [
      "Java",
      "Java 8 / 17",
      "Object-Oriented Programming (OOP)",
      "Collections Framework",
      "Exception Handling",
      "Multithreading Basics",
      "Streams & Lambdas",
    ],
  },
  {
    category: "Backend & APIs",
    theme: "emerald",
    icon: "Server",
    badge: "Primary Focus",
    skills: [
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "RESTful API Architecture",
      "JWT Authentication",
      "Microservices Concepts",
      "Hibernate ORM",
    ],
  },
  {
    category: "Frontend & UI",
    theme: "cyan",
    icon: "Monitor",
    badge: "Client Experience",
    skills: [
      "React.js",
      "Angular",
      "JavaScript (ES6+)",
      "HTML5 & Semantic Web",
      "Modern CSS & Responsive Design",
      "State Management",
    ],
  },
  {
    category: "Databases & Storage",
    theme: "violet",
    icon: "Database",
    badge: "Data Persistence",
    skills: [
      "MySQL",
      "Oracle SQL",
      "Relational Schema Design",
      "Complex Queries & Joins",
      "Indexing & Optimization",
    ],
  },
  {
    category: "Tools, DevOps & Cloud",
    theme: "rose",
    icon: "Wrench",
    badge: "Workflow & Cloud",
    skills: [
      "Git & GitHub",
      "Apache Maven",
      "Postman API Testing",
      "IntelliJ IDEA & VS Code",
      "Google Cloud Basics",
      "Microsoft Azure Basics",
    ],
  },
];

// ============================================================
// PROJECTS with visual theme cues & detailed architecture
// ============================================================
export const projects = [
  {
    id: "foodhub",
    name: "FoodHub",
    status: "Completed",
    theme: "amber",
    category: "Full-Stack Food Ordering Platform",
    tagline: "End-to-end food browsing, cart management, and order placement workflow.",
    description:
      "FoodHub is a complete full-stack food ordering application architected to support seamless menu browsing, interactive cart operations, and streamlined checkout workflows.",
    problem:
      "Streamlining the food discovery and ordering experience by connecting a reactive frontend with a resilient Spring Boot REST backend.",
    technologies: ["React.js", "Java", "Spring Boot", "Spring Data JPA", "REST APIs", "MySQL"],
    github: "https://github.com/puligopi12",
    demo: null,
    features: [
      "Full-stack end-to-end order processing lifecycle (frontend to database)",
      "RESTful API integration connecting React frontend with Spring Boot backend",
      "Interactive menu categorization and dynamic cart state management",
      "MySQL relational schema for storing menu items, user records, and orders",
      "Clean separation of concerns with Controller, Service, and Repository layers",
    ],
    note: null,
  },
  {
    id: "prodigy-genius-league",
    name: "Prodigy Genius League",
    status: "In Progress",
    theme: "violet",
    category: "Online Assessment & Examination Platform",
    tagline: "Secure, structured digital platform for student assessment & automated scoring.",
    description:
      "An enterprise-style assessment platform designed to deliver secure, timed examination workflows, user role management, and automated evaluation for students.",
    problem:
      "Providing a secure, scalable testing environment that guarantees authentication integrity and smooth question delivery.",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL", "JWT", "Spring Security", "Azure"],
    github: "https://github.com/puligopi12",
    demo: null,
    features: [
      "Secure JWT token-based authentication and role-based authorization",
      "Assessment management module for creating, organizing, and evaluating tests",
      "Responsive Angular client interface for seamless test-taking experience",
      "Spring Boot backend with transactional data persistence in MySQL",
      "Designed for cloud deployment and scalability on Microsoft Azure",
    ],
    note: "Under active development. Architecture and foundational modules implemented; advanced analytics module in progress.",
  },
  {
    id: "darshan-ease",
    name: "Darshan Ease",
    status: "Completed",
    theme: "emerald",
    category: "Temple Visit Ticket Booking System",
    tagline: "Digital reservation portal to eliminate long physical queues for devotees.",
    description:
      "A dedicated ticketing and reservation system built to simplify temple visit scheduling, devotee slot reservations, and booking management.",
    problem:
      "Modernizing devotional visit scheduling by replacing manual queuing with an automated reservation and booking record management platform.",
    technologies: ["Java", "Oracle SQL", "JDBC", "Object-Oriented Design"],
    github: "https://github.com/puligopi12",
    demo: null,
    features: [
      "Slot-based ticket reservation and confirmation workflow",
      "Robust Oracle SQL database integration for devotee and ticket transaction records",
      "Java backend applying strict OOP principles for booking verification and validation",
      "Structured error handling and data consistency checks across transactions",
    ],
    note: "Academic capstone project focusing on core Java architecture and relational transaction integrity.",
  },
];

// ============================================================
// EXPERIENCE
// ============================================================
export const experience = [
  {
    id: "jagan-tech",
    role: "Software Trainee",
    company: "Jagan Technologies",
    location: "Onsite",
    period: "2025 – Present",
    status: "Active",
    badge: "Current Role",
    description:
      "Actively engaged as a Software Trainee within the core software engineering team, contributing to enterprise Java applications and modern web development workflows.",
    responsibilities: [
      "Developing and testing RESTful API endpoints using Java, Spring Boot, and Spring Data JPA.",
      "Assisting in database schema design, writing optimized SQL queries, and implementing data persistence layers in MySQL.",
      "Collaborating with team members to inspect, refactor, and modernize legacy codebase modules following OOP best practices.",
      "Participating in daily engineering standups, code reviews, and API testing workflows using Postman and Git version control.",
      "Expanding hands-on expertise in microservices architecture, JWT authentication, and full-stack integration.",
    ],
    note: null,
  },
];

// ============================================================
// EDUCATION
// ============================================================
export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    institution: "Kallam Haranadhareddy Institute of Technology",
    period: "2021 – 2025",
    cgpa: "7.9",
    cgpaMax: "10.0",
    highlights: [
      "Graduated with First Class distinction in Computer Science and Engineering",
      "Core Coursework: Data Structures, Algorithms, OOP with Java, DBMS, Computer Networks, Operating Systems, Software Engineering",
      "Final-year capstone project focused on full-stack Java and Spring Boot application engineering",
      "Active participant in technical coding symposiums and developer workshops",
    ],
  },
];
