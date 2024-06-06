// Inside data/projects.ts

export interface Project {
    name: string;
    description: string;
    techStack: string;
    liveLink: string;
    image: string;
    source: string;
  }
  
  export const projectsData: Project[] = [
    {
      name: "Flex-Movie",
      description: "Movie Recommendation service",
      techStack: "React, Node.js, TMDB API, JS",
      liveLink: "https://flex-movie.onrender.com/",
      image: "/project-images/flex-movie.png", // Path to your project image
      source: "https://github.com/pylhr/React-Practice-Projects/tree/main/accordion"
    },
    {
      name: "PYLHR - Priyanshu's Portfolio",
      description: "This is my personal portfolio and my digital sanctum.",
      techStack: "React, Next.js, Tailwind CSS, Remark, TypeScript",
      liveLink: "https://pylhr.vercel.app",
      image: "/project-images/portfolio.png", // Path to your project image
      source: "https://github.com/pylhr/React-Practice-Projects/tree/main/accordion"
    },
    {
        name: "Accordion - UI pattern",
        description: "UI pattern used in websites to enhance user experience by allowing users to expand and collapse content.",
        techStack: "ReactJS, JS, CSS",
        liveLink: "https://example.com/project2",
        image: "/images/project2.jpg", // Path to your project image
        source: "https://github.com/pylhr/React-Practice-Projects/tree/main/accordion",
      },
      
    // Add more project objects as needed
  ];
  