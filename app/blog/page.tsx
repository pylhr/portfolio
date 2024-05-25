import ArticleItemList from "@/components/ArticleListItem";
import { getCategorisedArticles } from "@/lib/articles";
import React from "react";

const Blog = () => {
  const articles = getCategorisedArticles();

  // Extract unique years from articles
  const uniqueYears: number[] = [];
  Object.values(articles).forEach(category => {
    category.forEach(article => {
      const year = new Date(article.date).getFullYear();
      if (!isNaN(year) && !uniqueYears.includes(year)) { // Add a check for NaN
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
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Blog Posts</h1>
          <div className="relative">
            {uniqueYears.map(year => (
              <div key={year}>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-100 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-lg">{year}</span>
                  </div>
                  <div className="ml-6 border-l-2 border-gray-300 pl-6">
                    {Object.keys(articles).map(category => (
                      articles[category].map(article => {
                        const articleYear = new Date(article.date).getFullYear();
                        if (articleYear === year) {
                          return (
                            <React.Fragment key={article.id}>
                              <div className="mb-6">
                                <ArticleItemList
                                  category={category}
                                  articles={[article]}
                                  key={article.id}
                                />
                              </div>
                            </React.Fragment>
                          );
                        }
                        return null;
                      })
                    ))}
                  </div>
                </div>
                <hr className="my-8 border-t-2 border-gray-300" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
