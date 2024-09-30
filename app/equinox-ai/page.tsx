import React from 'react';
import Link from 'next/link';

const EquinoxAI = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-8 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Equinox AI
          </h1>
          <p className="text-lg text-gray-600">
          Empowering businesses with innovative AI solutions and SaaS development. We help you leverage technology to achieve your goals.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl mb-2">Custom Software Development</h3>
              <p className="text-gray-700 mb-4">Tailored solutions designed to meet your unique business challenges.</p>
              <Link href="/services/custom-software">
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                  Learn More
                </button>
              </Link>
            </div>
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl mb-2">SaaS Development</h3>
              <p className="text-gray-700 mb-4">Scalable cloud-based platforms that drive growth and efficiency.</p>
              <Link href="/services/saas-development">
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                  Learn More
                </button>
              </Link>
            </div>
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl mb-2">AI Solutions</h3>
              <p className="text-gray-700 mb-4">Innovative AI tools designed to optimize your business processes.</p>
              <Link href="/services/ai-solutions">
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl mb-2">Law Firm SaaS</h3>
              <p className="text-gray-700 mb-4">A comprehensive platform streamlining client-lawyer interactions.</p>
              <Link href="/projects/law-firm-saas">
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                  View Project
                </button>
              </Link>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-xl mb-2">Co-Study Management System</h3>
              <p className="text-gray-700 mb-4">Innovative management of study spaces for enhanced productivity.</p>
              <Link href="/projects/co-study-management">
                <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
                  View Project
                </button>
              </Link>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Let's Collaborate!
          </h2>
          <p className="text-gray-600 mb-4">
            Ready to bring your ideas to life? Contact us for a consultation and discover how we can help your business thrive.
          </p>
          <Link href="/contact">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Get in Touch
            </button>
          </Link>
        </section>

        {/* Medium Blog Link Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Explore My Insights
          </h2>
          <p className="text-gray-600 mb-4">
            Check out Equinox AI&apos;s medium blog.
          </p>
          <Link href="https://medium.com/@pylhr">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Visit  Medium Blog
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default EquinoxAI;
