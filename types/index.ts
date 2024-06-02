export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
};


export type WritingItem = {
  id: string
  title: string
  date: string
  category: string
  tags: string[]
}

export type ArticleData = ArticleItem & {
  contentHtml: string;
};
export type WritingData = WritingItem & {
  contentHtml: string;
};