// Inside data/projects.ts

export interface Project {
    name: string;
    description: string;
    techStack: string;
    liveLink: string;
    image: string;
  }
  
  export const projectsData: Project[] = [
    {
      name: "Flex-Movie",
      description: "Movie Recommendation service",
      techStack: "React, Node.js, TMDB API, JS",
      liveLink: "https://flex-movie.onrender.com/",
      image: "/project-images/flex-movie.png" // Path to your project image
    },
    {
      name: "PYLHR - Priyanshu's Portfolio",
      description: "This is my personal portfolio and my digital sanctum.",
      techStack: "React, Next.js, Tailwind CSS, Remark, TypeScript",
      liveLink: "https://pylhr.vercel.app",
      image: "/project-images/portfolio.png" // Path to your project image
    },
    {
        name: "Project 3",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        techStack: "Vue.js, Express, PostgreSQL",
        liveLink: "https://example.com/project2",
        image: "/images/project2.jpg" // Path to your project image
      },
      {
        name: "Project 2",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        techStack: "Vue.js, Express, PostgreSQL",
        liveLink: "https://example.com/project2",
        image: "/images/project2.jpg" // Path to your project image
      },
    // Add more project objects as needed
  ];
  