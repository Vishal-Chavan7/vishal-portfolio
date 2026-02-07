export const personalInfo = {
  name: "Vishal Chavan",
  role: "Full Stack MERN Developer",
  tagline: "Building scalable web applications with modern technologies",
  email: "vishalchavan9970@gmail.com",
  location: "Pimpri-Chinchwad, Pune, India",
  resumeUrl: "/resume.pdf", // Add your resume file to public folder
  social: {
    github: "https://github.com/Vishal-Chavan7",
    linkedin: "https://www.linkedin.com/in/vishal-chavan-5a641b202/",
    twitter: "https://x.com/VishalChavan070",
    portfolio: "https://vishalchavan9970.com"
  }
};

export const about = {
  description: "I'm a passionate Full Stack MERN Developer with expertise in building robust, scalable web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I transform complex problems into elegant solutions. I thrive on creating seamless user experiences backed by powerful server-side architecture.",
  highlights: [
    "3+ years of experience in MERN stack development",
    "Built and deployed 15+ production-ready applications",
    "Strong focus on clean code and best practices",
    "Continuous learner passionate about emerging technologies"
  ]
};

export const skills = {
  frontend: [
    { name: "React.js", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux / Zustand", level: 85 },
    { name: "Framer Motion", level: 80 }
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 95 },
    { name: "MongoDB", level: 90 },
    { name: "Mongoose", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 75 },
    { name: "JWT Authentication", level: 90 },
    { name: "Socket.io", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 95 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS / Vercel", level: 80 },
    { name: "Figma", level: 70 },
    { name: "npm / yarn", level: 95 },
    { name: "Webpack / Vite", level: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    longDescription: "Built a comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart, Stripe payment integration, order tracking, and an admin panel for inventory management. Implemented real-time notifications using Socket.io.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux", "Tailwind"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "A modern chat application with real-time messaging, typing indicators, and file sharing capabilities.",
    longDescription: "Developed a real-time chat platform using Socket.io for instant messaging. Features include group chats, private messages, typing indicators, online status, file uploads to AWS S3, and message history with MongoDB.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "AWS S3", "Express"],
    githubUrl: "https://github.com/yourusername/chat-app",
    liveUrl: "https://chat-app-demo.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Project Management Dashboard",
    description: "An intuitive project management tool with kanban boards, team collaboration, and progress tracking.",
    longDescription: "Created a comprehensive project management system with drag-and-drop kanban boards, task assignments, deadline tracking, team collaboration features, and analytics dashboard. Implemented role-based access control.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "DnD Kit"],
    githubUrl: "https://github.com/yourusername/project-manager",
    liveUrl: "https://pm-dashboard-demo.vercel.app",
    featured: true
  },
  {
    id: 4,
    title: "Blog CMS Platform",
    description: "A content management system for bloggers with rich text editor, SEO optimization, and analytics.",
    longDescription: "Built a full-featured blog CMS with a rich text editor, image uploads, category management, SEO meta tags, comment system, and analytics dashboard showing post views and engagement metrics.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Quill.js", "Cloudinary"],
    githubUrl: "https://github.com/yourusername/blog-cms",
    liveUrl: "https://blog-cms-demo.vercel.app",
    featured: false
  },
  {
    id: 5,
    title: "Weather Dashboard",
    description: "A beautiful weather application with forecasts, interactive maps, and location-based alerts.",
    longDescription: "Developed a responsive weather application that fetches real-time weather data from OpenWeather API, displays 7-day forecasts, interactive maps, and sends weather alerts based on user location preferences.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    technologies: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com/yourusername/weather-app",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false
  },
  {
    id: 6,
    title: "REST API for Social Network",
    description: "Scalable backend API for a social networking platform with authentication and real-time features.",
    longDescription: "Created a robust REST API for a social network featuring user authentication, friend connections, post creation/editing, like/comment system, news feed algorithm, and real-time notifications using Socket.io.",
    category: "backend",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Bcrypt"],
    githubUrl: "https://github.com/yourusername/social-api",
    liveUrl: null,
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Full Stack Developer",
    company: "Darshan Productions",
    location: "Katraj, Pune, India",
    period: "Jan 2026 - Present",
    description: "Leading the development of scalable web applications using MERN stack. Mentoring junior developers and architecting microservices-based solutions.",
    achievements: [
      "Architected and deployed 5 major features increasing user engagement by 40%",
      "Reduced API response time by 60% through optimization",
      "Mentored 2 junior developers in MERN stack best practices"
    ]
  // },
  // {
  //   id: 2,
  //   type: "work",
  //   title: "Full Stack MERN Developer",
  //   company: "Darshan Productions",
  //   location: "Katraj, Pune, India",
  //   period: "Jan 2026 - Present",
  //   description: "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Collaborated with cross-functional teams to deliver high-quality solutions.",
  //   achievements: [
  //     "Built 8+ production applications from scratch",
  //     "Implemented CI/CD pipelines reducing deployment time by 50%",
  //     "Improved application performance by 35% through code optimization"
  //   ]
  // },
  // {
  //   id: 3,
  //   type: "work",
  //   title: "Junior Web Developer",
  //   company: "StartUp Hub",
  //   location: "San Francisco, CA",
  //   period: "Jan 2020 - May 2021",
  //   description: "Started career building responsive web applications and RESTful APIs. Learned industry best practices and agile development methodologies.",
  //   achievements: [
  //     "Contributed to 10+ client projects",
  //     "Developed reusable component library used across projects",
  //     "Achieved 100% on-time project delivery record"
  //   ]
  }
];

export const education = [
  {
    id: 1,
    type: "education",
    degree: "Master in Computer Applications (MCA)",
    institution: "Pimpri Chinchwad University (PCU)",
    location: "Pune, India",
    period: "2024 - 2026",
    description: "Focused on web technologies, data structures, and software engineering principles.",
    achievements: [
      "GPA: 8.5/10    ",,
      "Traning and Placement Coordinator",
      "Built multiple MERN stack projects as part of academic learning"

    ]
  // },
  // {
  //   id: 2,
  //   type: "education",
  //   degree: "Full Stack Web Development Bootcamp",
  //   institution: "Coding Academy",
  //   location: "Online",
  //   period: "2019",
  //   description: "Intensive 12-week program focused on MERN stack development and modern web technologies.",
  //   achievements: [
  //     "Built 5 full-stack applications",
  //     "Graduated top of class",
  //     "Received job placement within 2 weeks"
  //   ]
  }
];

export const certifications = [
  {
    name: "WEB Development Certification",
    issuer: "Udemy",
    date: "2023"
  },
  // {
  //   name: "MongoDB Certified Developer",
  //   issuer: "MongoDB University",
  //   date: "2022"
  // },
  {
    name: "React Developer Certification",
    issuer: "Namaste React",
    date: "2023"
  }
];
