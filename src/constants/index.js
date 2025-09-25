//new push
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tensorflow,
  redis,
  csharp,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  tripguide,
  threejs,
  bosch,
  siemens,
  pathvu,
  airbnb,
  blog,
  cassandra,
  resnet50,
  mindgrid,
  ppg,
  profile

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id:"projects",
    title:"Projects"
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [

  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
  {
    name: "CSharp",
    icon: csharp,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Siemens",
    icon: siemens,
    iconBg: "#2c3537ff",
    date: "Feb 2025 - Apr 2025 \n May 2024 - Aug 2024",
    points: [
      "Researched and benchmarked Azure storage strategies with a mentor, provisioning and testing multiple configurations, and implemented the optimal caching and scaling solution to accelerate simulation workflows.",
      "Built a waveform-selection feature in PartQuest Explore that reduced output file size, lowering storage load and improving simulator turnaround time.",
      "Developed and deployed full-stack simulation modules using ASP.NET Core, TypeScript, and Azure, enhancing scalability and reliability of engineering workflows.",
      "Created REST APIs with strong unit-test coverage and applied SonarQube for code quality enforcement, ensuring robust and maintainable services.",
      "Collaborated with mentors in Agile sprints, contributing to design discussions and debugging sessions to deliver production-ready solutions.",
      "Documented design decisions, implementation strategies, and performance outcomes in Confluence to support future improvements and knowledge sharing."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "PathVu",
    icon: pathvu,
    iconBg:"#2c3537ff",
    date: "Jun 2025 - Sept 2025 \n Sep 2024 - Nov 2024 ",
    points: [
      "Engineered and tested multiple 3D point-cloud capture workflows (stereo depth, IMU alignment, SDK integrations), to determine the most reliable approach for ramp analysis.",
      "Built a desktop application for automated slope analysis from 3D data, ensuring accurate and consistent results for accessibility audits while reducing manual survey effort.",
      "Optimized data processing pipelines with efficient coordinate transformations and export workflows, improving downstream usability and integration with compliance tools.",
      "Collaborated closely with mentors and cross-functional teammates, reviewing results, discussing trade-offs, and aligning workflows with ADA standards to inform future development priorities.",
      "Conducted proof-of-concept ML experiments to explore automation possibilities for curb-ramp classification, documenting procedures and proposing strategies for future ML-based segmentation."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Bosch",
    icon: bosch,
    iconBg: "#2c3537ff",
    date: "Aug 2021 - Jul 2023",
    points: [
      "Designed and maintained core software modules for event-driven processing, fault detection, and structured data handling, improving system reliability and responsiveness for production clients.",
      "Built unit and integration tests following Test-Driven Development (TDD) practices, increasing code quality and maintainability.",
      "Collaborated with cross-functional teams during development, debugging, and system testing, resolving critical software issues and ensuring smooth integration across components.",
      "Participated in the full software development lifecycle (SDLC), from requirements analysis and design to implementation, deployment, and support, gaining end-to-end engineering experience.",
      "Expanded automated test coverage and integrated it into CI/CD pipelines, accelerating release cycles and reducing post-release defects.",
      "Ensured compliance with industry standards and best practices, demonstrating attention to quality, safety, and maintainable software design."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const git_link = "https://github.com/hithaishree98"
const projects = [
  {
    name: "Roam & Relish Blogging Platform",
    description:
      "Designed a food & travel blog featuring user authentication, dynamic CRUD for posts/comments, and an admin dashboard with analytics.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: git_link,
  },
  {
    name: "Distributed Log Analysis & Verifiable Queries",
    description:
      "Built a multi-node Cassandra cluster to ingest and analyze real web-server logs and integrated Merkle tree layer verify query results.",
    tags: [
      {
        name: "cassandra",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: cassandra,
    source_code_link: git_link,
  },
  {
    name: "PPG Paint Preference Analysis",
    description:
      "Performed end-to-end paint color EDA in R, built regression models to predict durability, and trained classifiers to distinguish popular vs. unpopular paints.",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "tidyverse",
        color: "green-text-gradient",
      },
      {
        name: "ggplot2",
        color: "pink-text-gradient",
      },
    ],
    image: ppg,
    source_code_link: git_link,
  },
  {
    name: "MindGrid: AI Tic Tac Showdown",
    description:
      "Python-based Tic Tac Toe game with an unbeatable AI powered by the Minimax algorithm, featuring a PyGame interface.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "minimax",
        color: "pink-text-gradient",
      },
    ],
    image: mindgrid,
    source_code_link: git_link,
  },
  {
    name: "NYC Airbnb Analysis Dashboard",
    description:
      "Interactive Tableau dashboard to explore NYC Airbnb listings analyzing bookings by room type, pricing trends and more features.",
    tags: [
      {
        name: "tableau",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: git_link,
  },
  {
    name: "ResNet50 Chest Cancer Detection",
    description:
      "Implemented a custom ResNet50 to classify chest CT scans into four medical conditions, regularization, dropout, and early stopping.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: resnet50,
    source_code_link: git_link,
  },
];

export { services, technologies, experiences, testimonials, projects };
