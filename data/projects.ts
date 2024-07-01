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
        liveLink: "https://accordion-murex.vercel.app/",
        image: "/project-images/accordion.png", // Path to your project image
        source: "https://github.com/pylhr/React-Practice-Projects/tree/main/accordion",
      },
      {
        name: "Talea: A Video Chat Application",
        description: "Talea, built with Next.js and TypeScript, is a video chat application. It allows secure user login, meeting creation, and management of meetings, including features such as recording, screen sharing, and participant control.",
        techStack: "Next.js, Typescript, Tailwind CSS, Stream-io, ClerkAUth",
        liveLink: "https://github.com/pylhr/talea",
        image: "/project-images/talea.png", // Path to your project image
        source: "https://github.com/pylhr/talea",
      },
      
    // Add more project objects as needed
  ];
  