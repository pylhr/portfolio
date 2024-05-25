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
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec justo a elit.",
      techStack: "React, Node.js, MongoDB",
      liveLink: "https://example.com/project1",
      image: "/images/project1.jpg" // Path to your project image
    },
    {
      name: "Project 2",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      techStack: "Vue.js, Express, PostgreSQL",
      liveLink: "https://example.com/project2",
      image: "/images/project2.jpg" // Path to your project image
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
  