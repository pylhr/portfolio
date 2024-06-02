import Link from "next/link";
import type { ArticleItem } from "@/types";

interface Props {
  category: string;
  articles: ArticleItem[];
  date: number;
}

const ArticleItemList = ({ category, articles, date }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      
      <div className="flex flex-col gap-2.5">
        {articles.map((article) => (
          <Link key={article.id} href={`/blogpost/${article.id}`}>
            <p className="text-gray-600 text-2xl hover:text-blue-700 transition duration-150">{article.title}</p>
            
          </Link>
          
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
