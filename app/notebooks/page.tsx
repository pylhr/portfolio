import Link from "next/link";

const Notebooks = () => {
  const notebooksData = [
    {
      title: "Data Structures & Algorithms",
      href: "https://dsa-pylhr.vercel.app/",
      description: "Learn about various data structures and algorithms with examples and explanations."
    },
    {
      title: "Java",
      href: "https://java-pylhr.vercel.app/",
      description: "Notes with java concepts, code snippets and practical tips.Perfect for reference and revision."
    },
    // Add more notebooks here
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-2 pb-16 sm:pb-24">
        <section className="mx-auto w-11/12 lg:w-2/3 mt-20">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            My Notebooks
          </h1>
          <div className="flex flex-col gap-5">
            {notebooksData.map((notebook, index) => (
              <Link className="block p-6 bg-gray rounded-lg shadow-lg transition-transform transform hover:scale-105" key={index} href={notebook.href} passHref>
                
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {notebook.title}
                  </h2>
                  <p className="text-gray-700">
                    {notebook.description}
                  </p>
                
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Notebooks;
