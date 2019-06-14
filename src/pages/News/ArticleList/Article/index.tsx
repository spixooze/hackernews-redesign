import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { NewsArticle } from '../../../../Interfaces'

interface Props extends NewsArticle {}

const Article: React.FC<Props> = ({
  title,
  urlToImage,
  url,
  author,
  publishedAt
}) => {
  return (
    <LinkToArticle rel="noopener noreferrer" href={url} target="_blank">
      <Container>
        <Image
          src={urlToImage ? urlToImage : 'images/article-placeholder.jpg'}
        />
        <ContentWrapper>
          <Title>{title}</Title>
          <SubTitle>
            {moment(publishedAt).format('MMM Do YY')}
            {author && ` - ${author}`}
          </SubTitle>
        </ContentWrapper>
      </Container>
    </LinkToArticle>
  )
}

export default Article

const LinkToArticle = styled.a`
  text-decoration: none;
  color: inherit;
`

const Container = styled.div`
  width: 315px;
  height: 280px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 25px 2px;
  border-radius: 2px;
  margin: 15px;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => `${theme.colors.primary}57`} 0px 0px 3px 1px;
  }

  @media screen and (max-width: 440px) {
    width: 290px;
  }
`
const Image = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`
const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
`
const SubTitle = styled.p`
  font-size: 14px;
  padding-top: 4px;
  color: ${({ theme }) => theme.colors.gray[4]};
`
