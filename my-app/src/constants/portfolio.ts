import backend from "../assets/images/backend.png";
import carrent from "../assets/images/carrent.png";
import creator from "../assets/images/creator.png";
import jobit from "../assets/images/jobit.png";
import mobile from "../assets/images/mobile.png";
import rta from "../assets/images/company/rta.png";
import css from "../assets/images/tech/css.png";
import docker from "../assets/images/tech/docker.png";
import figma from "../assets/images/tech/figma.png";
import git from "../assets/images/tech/git.png";
import html from "../assets/images/tech/html.png";
import javascript from "../assets/images/tech/javascript.png";
import mongodb from "../assets/images/tech/mongodb.png";
import nodejs from "../assets/images/tech/nodejs.png";
import reactjs from "../assets/images/tech/reactjs.png";
import redux from "../assets/images/tech/redux.png";
import tailwind from "../assets/images/tech/tailwind.png";
import threejs from "../assets/images/tech/threejs.svg";
import typescript from "../assets/images/tech/typescript.png";
import wistek from "../assets/images/company/wistek.png";
import tripguide from "../assets/images/tripguide.png";
import web from "../assets/images/web.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Real-Time-Analytics",
    icon: rta,
    iconBg: "#ffffff",
    date: "10/2022 - 02/2024",
    points: [
      "Programme product projects: rtWork",
      "Tech Stacks: ReactJS, Redux, Boostrap4, JQuery",
      "Collaborate with team leads and other developers to create and implement website designs",
      "Test and debug code to ensure cross-browser and cross-mobile compatibility",
      "Improve the UX, UI as required",
      "Developed prototypes and mockups for new features, enhancing UX and UI design",
      "Understanding flow code and fix bug",
      "Use version control systems such as Git to manage code changes and collaborate with team members"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Wistek",
    icon: wistek,
    iconBg: "#E6DEDD",
    date: "03/2024 - 06/2025",
    points: [
      "Worked at two projects:",
      "1) WisEdu",
      "Size 12 (1 Leader, 5 FE Developers, 4 BE Developers, 2 BA, 3 QC)",
      "Tech Stacks: NextJS, Tailwind, Context API, Socket, Redux toolkit, React Hook Form, SCSS",
      "Responsibility:",
      "Collaborate with BA team to finalize requirements.",
      "Work closely with the backend team to integrate APIs",
      "Build website interface from designed figma, implement features, enhance user UX, UI.",
      "Responsive on different devices and multi-browser support.",
      "Build reusable components and optimize performance.",
      "Develop core components for applications using ReactJs and create custom components to use in HTML tags",
      "Investigate performance issues, measure results, and provide conclusions based on findings."
    ],
  }
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

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
