import React, { useEffect, useState } from 'react'

import { NewsApiResponse, NewsArticle } from '../../Interfaces'
import { ErrorBox, Select, PageWrapper } from '../../components'
import ArticleList from './ArticleList'
import Pagination from './Pagination'

type ArticleCategory = 'everything' | 'top-headlines'
const PAGE_SIZE = 9

const News: React.FC = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [pageCount, setPageCount] = useState<number>(0)
  const [articleCategory, setArticleCategory] = useState<ArticleCategory>(
    'top-headlines'
  )
  const [error, setError] = useState(null)
  const fetchArticles = async (): Promise<NewsApiResponse> => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/${articleCategory}?sources=hacker-news&pageSize=${PAGE_SIZE}&page=${currentPage}`,
        {
          headers: {
            'x-api-key': process.env.REACT_APP_NEWSAPI_KEY
          }
        }
      )
      return await response.json()
    } catch (error) {
      setError(error.message)
    }
  }

  const changePage = (numberOfPages: number) => {
    if (
      /* If new page is out of bounds we return early */
      currentPage + numberOfPages < 1 ||
      currentPage + numberOfPages > pageCount
    ) {
      return
    }

    setCurrentPage(currentPage + numberOfPages)
  }

  const getFreshArticles = async () => {
    const { status, articles, totalResults, message } = await fetchArticles()

    if (status === 'ok') {
      setPageCount(Math.ceil(totalResults / PAGE_SIZE))
      setArticles(articles)
    } else {
      setError(message ? message : 'Failed to fetch articles ☹️')
    }
  }

  useEffect(() => {
    getFreshArticles()
  }, [currentPage, articleCategory])

  return (
    <PageWrapper>
      {error ? (
        <ErrorBox message={error} />
      ) : (
        <>
          <Select
            onChange={e =>
              setArticleCategory(e.target.value as ArticleCategory)
            }
          >
            <option value="top-headlines">Top Headlines</option>
            <option value="everything">Everything!</option>
          </Select>
          <ArticleList articles={articles} />
          <Pagination {...{ changePage, currentPage, pageCount }} />
        </>
      )}
    </PageWrapper>
  )
}

export default News
