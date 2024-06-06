import Link from "next/link";
import { projectsData } from "@/data/projects";

const ProjectsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-md shadow-md overflow-hidden">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover object-center" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{project.name}</h2>
                <p className="text-base text-gray-600 mb-4 ">{project.description}</p>
                <p className="text-sm text-gray-800 mb-2"><span className="font-semibold">Tech Stack:</span> {project.techStack}</p>
                <div className="flex flex-row justify-between">
                <div >
                  <a href={project.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Source</a>
                </div>
                <div >
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Live</a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
