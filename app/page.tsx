import React from "react";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <div className="bg-beige-100 text-brown-900 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
  <div className="relative pt-6 pb-16 sm:pb-24">
    <p className="text-3xl px-8 py-1 font-bold text-center text-brown-800">hey, I&apos;m Priyanshu 👋</p>
    <p className="text-2xl px-8 py-2 font-bold text-center text-brown-800">Software Engineer | Researcher</p>
    <p className="text-2xl px-8 py-1 font-bold text-center text-brown-800">Generative AI Fellow @ GenAITechLab</p>
    <p className="text-lg px-8 py-4 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700">
       I recently developed Avian Quantitaive Research Assistant.&nbsp;&nbsp;
       <Button className="bg-brown-500 text-white font-semibold py-1 px-4 rounded shadow-lg hover:bg-brown-600 transition duration-300">
        <a href="https://avian-tool.streamlit.app" target="_blank">Visit Here</a>
       </Button>

       
    </p>
    <p className="text-lg px-8 py-4 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700">
       I have a habit of taking notes while I study, check the raw published version.&nbsp;&nbsp;
       <Button className="bg-brown-500 text-white font-semibold py-1 px-4 rounded shadow-lg hover:bg-brown-600 transition duration-300">
        <a href="https://pylhr-digital-garden.vercel.app/" target="_blank">Notes</a>
       </Button>

       
    </p>
    
    <p className="text-lg px-8 py-1 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700">
  As Generative AI Fellow I&apos;m involved in a project titled &quot;<strong>Fast, high-quality NoGAN synthesizer for tabular data</strong>.&quot; 
  This project aims to develop a synthesizer for tabular data that is faster and produces better results than traditional GANs, 
  similar to XGBoost, without requiring fine-tuning.
</p>

<p className="text-lg px-8 py-1 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700">
  I am currently working on several exciting projects, including:
</p>
<ul className="text-lg px-8 py-1 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700 list-disc list-inside">
  <li>💼 Building a <strong>quant trading engine</strong> using Golang</li>
  <li>🎙️ Developing a <strong>voice call agent</strong> from scratch</li>
  <li>💻 Creating <strong>industry-ready software projects</strong> in Java</li>
  <li>🤖 Building <strong>Equinox AI</strong> - AI automation agency</li>
</ul>
<p className="text-lg px-8 py-1 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700">
  In addition to these projects, I am continuously learning about:
</p>
<ul className="text-lg px-8 py-1 text-left sm:px-12 lg:px-32 xl:px-48 leading-relaxed text-brown-700 list-disc list-inside">
  <li>🤖 Autonomous agent development</li>
  <li>📚 Advanced concepts in Machine Learning and Deep Learning</li>
  <li>🖥️ Browser Engineering and Compiler Crafting</li>
</ul>
<p className="py-8 px-8 font-bold text-center text-brown-800">
  <span>Thank you for dropping by! 🙏</span>
</p>


  </div>
</div>
    </>
  );
}
