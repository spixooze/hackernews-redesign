import React, { useEffect, useState, memo } from 'react'
import styled from 'styled-components'
import { NewsApiResponse, NewsArticle } from '../../Interfaces'
import ArticleList from './ArticleList'

const News: React.FC = memo(() => {
  const [articles, setArticles] = useState<NewsArticle[]>([])

  const fetchArticles = async (): Promise<NewsApiResponse> => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?sources=hacker-news&pageSize=12&page=1&apiKey=${
          process.env.REACT_APP_NEWSAPI_KEY
        }`
      )
      return await response.json()
    } catch (error) {
      // TODO: Handle errors
      console.log({ error })
    }
  }

  useEffect(() => {
    const getFreshArticles = async () => {
      const { articles } = await fetchArticles()
      console.log({ articles })
      setArticles(articles)
    }

    getFreshArticles()
  }, [])

  return (
    <PageWrapper>
      <ArticleList articles={articles} />
    </PageWrapper>
  )
})

export default News

const PageWrapper = styled.div`
  padding: 25px 10px;
`
