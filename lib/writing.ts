import fs from "fs"
import matter from "gray-matter"
import path from "path"
import moment from "moment"
import { remark } from "remark"
import html from "remark-html"

import type { WritingItem } from "@/types"

const writingsDirectory = path.join(process.cwd(), "writingsData")

const getSortedArticles = (): WritingItem[] => {
  const fileNames = fs.readdirSync(writingsDirectory)

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")

    const fullPath = path.join(writingsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf-8")

    const matterResult = matter(fileContents)

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    }
  })

  return allArticlesData.sort((a, b) => {
    const format = "DD-MM-YYYY"
    const dateOne = moment(a.date, format)
    const dateTwo = moment(b.date, format)
    if (dateOne.isBefore(dateTwo)) {
      return -1
    } else if (dateTwo.isAfter(dateOne)) {
      return 1
    } else {
      return 0
    }
  })
}

export const getCategorisedArticles = (): Record<string, WritingItem[]> => {
  const sortedArticles = getSortedArticles()
  const categorisedArticles: Record<string, WritingItem[]> = {}

  sortedArticles.forEach(article =>{
    if(!categorisedArticles[article.category]){
      categorisedArticles[article.category] = []

    }

    categorisedArticles[article.category].push(article)
  })
  return categorisedArticles
}

export const getArticleData = async(id: string) =>{
  const fullPath = path.join(writingsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath,"utf-8")
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return{
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
  }
}