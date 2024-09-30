import React from 'react';
import Link from 'next/link';

const Scholarium = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-2 pb-16 sm:pb-24">
        {/* Hero Section */}
        <section className="mx-auto w-11/12 lg:w-2/3 mt-20">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Priyanshu&apos;s Scholarium
          </h1>
          <p className="text-center text-lg text-gray-600 mb-8">
            Scholarium is my R&D hub for exploring AI, engineering, and the sciences. I share insights, research, and experiments to inspire innovation and curiosity.
          </p>
        </section>

        {/* Featured Research Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Featured Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Card 1 */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-bold text-lg">Title of Article 1</h3>
              <p className="text-gray-600 mb-2">A brief description of what this article is about, highlighting key insights or findings.</p>
              <Link href="/path-to-article-1">
                <button className="text-blue-500 hover:underline">Read More</button>
              </Link>
            </div>
            {/* Sample Card 2 */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-bold text-lg">Title of Article 2</h3>
              <p className="text-gray-600 mb-2">A brief description of what this article is about, highlighting key insights or findings.</p>
              <Link href="/path-to-article-2">
                <button className="text-blue-500 hover:underline">Read More</button>
              </Link>
            </div>
            {/* Sample Card 3 */}
            <div className="bg-white rounded-lg shadow p-4 mb-6">
              <h3 className="font-bold text-lg">Title of Article 3</h3>
              <p className="text-gray-600 mb-2">A brief description of what this article is about, highlighting key insights or findings.</p>
              <Link href="/path-to-article-3">
                <button className="text-blue-500 hover:underline">Read More</button>
              </Link>
            </div>
            {/* Add more sample cards as needed */}
          </div>
        </section>

        {/* Categories Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex justify-center space-x-4">
            {/* Sample Category Card 1 */}
            <div className="bg-gray-200 rounded-lg shadow p-4 mb-6">
              <h3 className="font-bold text-lg">Research Papers</h3>
              <p className="text-gray-600 mb-2">Explore articles and insights related to research in various fields.</p>
              <Link href="/categories/research-papers">
                <button className="text-blue-500 hover:underline">View All</button>
              </Link>
            </div>
            {/* Sample Category Card 2 */}
            <div className="bg-gray-200 rounded-lg shadow p-4 mb-6">
              <h3 className="font-bold text-lg">Technical Notes</h3>
              <p className="text-gray-600 mb-2">Find technical notes and insights on engineering topics.</p>
              <Link href="/categories/technical-notes">
                <button className="text-blue-500 hover:underline">View All</button>
              </Link>
            </div>
            {/* Sample Category Card 3 */}
            <div className="bg-gray-200 rounded-lg shadow p-4 mb-6">
              <h3 className="font-bold text-lg">Experiments</h3>
              <p className="text-gray-600 mb-2">Discover experiments and findings that showcase innovative approaches.</p>
              <Link href="/categories/experiments">
                <button className="text-blue-500 hover:underline">View All</button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Stay Updated!
          </h2>
          <p className="text-gray-600 mb-4">
            Subscribe to my Substack for exclusive insights and updates on my research.
          </p>
          <Link href="https://substack.com/@pylhr/notes">
            <button className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Subscribe Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Scholarium;
