import WritingItemList from "@/components/WritingListItem";
import { getCategorisedArticles } from "@/lib/writing";
import React from "react";
import Link from "next/link";

const Writings = () => {
  const articles = getCategorisedArticles();

  // Extract unique years from articles
  const uniqueYears: number[] = [];
  Object.values(articles).forEach((category) => {
    category.forEach((article) => {
      const year = new Date(article.date).getFullYear();
      if (!isNaN(year) && !uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });
  });

  // Sort unique years in descending order
  uniqueYears.sort((a, b) => b - a);

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <section className="mx-auto w-11/12 lg:w-2/3 mt-20">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Writings
          </h1>
          <div className="relative">
            {uniqueYears.map((year) => (
              <div key={year} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{year}</h2>
                {Object.keys(articles).map((category) =>
                  articles[category].map((article) => {
                    const articleYear = new Date(article.date).getFullYear();
                    if (articleYear === year) {
                      return (
                        <React.Fragment key={article.id}>
                          <div className="mb-6">
                            <WritingItemList
                              category={category}
                              articles={[article]}
                              key={article.id}
                            />
                            <div className="flex flex-wrap mt-2">
                              {article.tags &&
                                article.tags.map((tag: string) => (
                                  <Link key={tag} href={`/writing/tag/${tag}`}>
                                    <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                      #{tag}
                                    </p>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Writings;
