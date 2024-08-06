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
      name: "Avian Quantitative Research Assistant",
      description: "Avian Quantitative Research Assistant is a powerful tool for quantitative researcher, traders and analysts. Optimizing strategies, analyzing market sentiment, managing portfolios, and conducting research with real-time data and advanced algorithms.",
      techStack: "Streamlit, Falcon LLM, Serper API, YFinance, Pandas, PyPDF2",
      liveLink: "https://avian-tool.streamlit.app/",
      image: "/project-images/avian.png", // Path to your project image
      source: "https://github.com/pylhr/avian-quantitative-research-assistant"
    },
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
      {
        name: "Blockchain Based P2P Energy Trading Platform",
        description: "Developed as the capstone project for my Electronics and Communication Engineering degree, integrating Digital Electronics, Smart Contracts, Blockchain, IoT, and Raspberry Pi.Designed and implemented the system architecture, integrating hardware and software for a seamless P2P energy trading platform.",
        techStack: "ReactJs, NodeJS, Solidity, Truffle, Ganache, Hardware, Digital Electronics, Raspberry Pi, Technology Researcher, Blockchain, Internet of Things (IoT)",
        liveLink: "https://drive.google.com/file/d/1bppjODqArGt8lXnN0TmaMRclWd6hrhEj/view",
        image: "/project-images/energy-trading-platform.jpg", // Path to your project image
        source: "https://github.com/pylhr/energy-trading-platofrm",
      },
      
    // Add more project objects as needed
  ];
  