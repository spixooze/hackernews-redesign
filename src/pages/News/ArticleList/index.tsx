import React from 'react'
import styled from 'styled-components'
import { useTrail, animated } from 'react-spring'

import { NewsArticle } from '../../../Interfaces'
import Article from './Article'

interface Props {
  articles: NewsArticle[]
}

const config = { mass: 5, tension: 2000, friction: 250 }

const ArticleList: React.FC<Props> = ({ articles }) => {
  const trail = useTrail(articles.length, {
    config,
    from: { opacity: 0, height: 0 },
    to: { opacity: 1, height: 310 }
  })

  return (
    <Container>
      {trail.map((props, index) => (
        <animated.li key={articles[index].title} style={props}>
          <Article {...articles[index]} />
        </animated.li>
      ))}
    </Container>
  )
}

export default ArticleList

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 930px;
`
