import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getArticleData } from "@/lib/articles";
import React from "react";

type ArticleProps = {
  params: {
    slug: string;
  };
};

const Article = async ({ params }: ArticleProps) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <div className="flex justify-between font-poppins">
        <Link href={"/blog"} className="flex flex-row gap-1 place-items-center">
          <ArrowLeftIcon width={20} />
          <p>back</p>
        </Link>
        <p>{articleData.date}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
      <div>
        Tags:
        {articleData.tags.map((tag) => (
          <Link key={tag} href={`/tag/${tag}`}>
            <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{tag}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Article;
