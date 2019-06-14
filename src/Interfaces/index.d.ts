export interface NewsArticle {
  author: string | null
  content: string
  description: string
  publishedAt: string
  source: {
    id: string
    name: string
  }
  title: string
  url: string
  urlToImage: string | null
}

export interface NewsApiResponse {
  status: string
  articles: NewsArticle[]
  totalResults: number
  message?: string
}
