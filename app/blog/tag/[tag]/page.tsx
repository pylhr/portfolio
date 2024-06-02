

import Link from "next/link";
import React from "react";
import { getSortedArticles } from "@/lib/articles";


type TagPageProps = {
  params: {
    tag: string;
  };
};

export const generateStaticParams = async () => {
  const articles = getSortedArticles();
  const tags = new Set<string>();

  articles.forEach((article) => {
    article.tags.forEach((tag: string) => {
      tags.add(tag);
    });
  });

  return Array.from(tags).map((tag) => ({
    tag,
  }));
};

const TagPage = async ({ params }: TagPageProps) => {
  const { tag } = params;
  const articles = getSortedArticles().filter((article) =>
    article.tags.includes(tag)
  );

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <section className="mx-auto w-11/12 lg:w-2/3 mt-20">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            Posts tagged with &quot; {tag} &quot;
          </h1>
          <div className="relative">
            {articles.map((article) => (
              <div key={article.id} className="mb-6">
                <Link href={`/blogpost/${article.id}`}>
                
                    <h2 className="text-2xl font-bold">{article.title}</h2>
                  
                </Link>
                <p>{article.date}</p>
                <p>{article.category}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TagPage;
