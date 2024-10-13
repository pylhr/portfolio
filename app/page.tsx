import React from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-beige-200 to-white text-brown-900 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-12 pb-16 sm:pb-24">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <p className="text-5xl font-extrabold text-brown-800 mb-2">hey, I&apos;m (Eng.) Priyanshu 👋</p>
          <p className="text-2xl font-semibold text-brown-700 mb-4">Software Engineer | Researcher</p>
          <p className="text-xl text-brown-600 mb-4">
            Software Engineer @ Elyon | Generative AI Fellow @ GenAITechLab 
          </p>
        </section>
      {/* What I'm Working On Section */}
      <section className="text-center mb-12">
      <p className="text-xl text-brown-600 mb-4 italic">
  Currently focused on building Elyon, Equinox AI, and Scholarium.
</p>  
<p className="text-lg text-brown-600 mb-4">
     Check out my <a href="https://pylhr-digital-garden.vercel.app/" className="text-blue-600 underline">notes</a>.
  </p>
      <Button className="bg-brown-500 text-white font-semibold rounded-lg py-2 px-6 shadow-lg hover:bg-brown-600 transition duration-300">
            <a href="/projects">Explore More</a>
          </Button>
        </section>


        {/* Featured Projects Section */}
        {/*<section className="mb-12">
          <h2 className="text-3xl font-semibold text-brown-800 text-center mb-6">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">Avian Quantitative Research Assistant</h3>
              <p className="text-gray-700 mb-4">Streamlining quantitative research processes.</p>
              <Button className="bg-brown-500 text-white font-semibold rounded shadow-lg hover:bg-brown-600 transition duration-300">
                <a href="https://avian-tool.streamlit.app" target="_blank" rel="noopener noreferrer">Visit Here</a>
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-bold text-lg mb-2">Study Notes</h3>
              <p className="text-gray-700 mb-4">Check out my notes for deeper insights.</p>
              <Button className="bg-brown-500 text-white font-semibold rounded shadow-lg hover:bg-brown-600 transition duration-300">
                <a href="https://pylhr-digital-garden.vercel.app/" target="_blank" rel="noopener noreferrer">Notes</a>
              </Button>
            </div>
          </div>
        </section> */}

        {/* Closing Section */}
        <p className="py-8 text-center font-bold text-brown-800">
          <span>Thank you for visiting! 🙏</span>
        </p>
      </div>
    </div>
  );
}
