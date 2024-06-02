import WritingItemList from "@/components/WritingListItem";
import { getCategorisedArticles } from "@/lib/writing";
import React from "react";
import Link from "next/link";

const Blog = () => {
  const articles = getCategorisedArticles();

  // Extract all articles
  const allArticles = Object.values(articles).flatMap((category: any) => category);

  // Sort articles by date in descending order
  allArticles.sort((a: any, b: any) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <section className="mx-auto w-11/12 lg:w-2/3 mt-20">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Blog Posts
          </h1>
          <div className="relative">
            {allArticles.map((article: any) => (
              <div key={article.id}>
                <div className="mb-6">
                  <WritingItemList
                    category={article.category}
                    articles={[article]}
                    key={article.id}
                  />
                  <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{article.date}</p>
                  <div>
                    Tags:
                    {article.tags.map((tag: string) => (
                      <Link key={tag} href={`/blog/tag/${tag}`}>
                        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #{tag}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
