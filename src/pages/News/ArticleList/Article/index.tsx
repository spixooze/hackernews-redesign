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
  publishedAt,
  description
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
          <Description>{description}</Description>
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

const Image = styled.img`
  height: 60%;
  width: 100%;
  object-fit: cover;
  transition: all 0.2s ease;
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 40%;
  padding: 8px;
`
const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: font-size 0.2s ease;
`
const SubTitle = styled.p`
  font-size: 14px;
  padding-top: 4px;
  color: ${({ theme }) => theme.colors.gray[4]};
  transition: all 0.2s ease;
`
const Description = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray[2]};
  overflow: hidden;
  padding: 6px 0px;
  word-break: break-word;
`
const Container = styled.div`
  width: 315px;
  height: 280px;
  border: ${({ theme }) => `1px solid ${theme.colors.gray[1]}57`};
  box-shadow: ${({ theme }) => `${theme.colors.gray[0]}57`} 8px 8px 8px 0px;
  margin: 15px;
  overflow: hidden;

  &:hover {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}57`};
    box-shadow: ${({ theme }) => `${theme.colors.primary}57`} 8px 8px 0px 0px;

    ${Image} {
      height: 40%;
    }
    ${ContentWrapper} {
      height: 60%;
    }
    ${Title} {
      font-size: 12px;
      font-weight: normal;
      color: ${({ theme }) => theme.colors.gray[4]};
    }
    ${SubTitle} {
      font-size: 10px;
      color: ${({ theme }) => theme.colors.gray[2]};
      padding-top: 0px;
      padding-bottom: 4px;
    }
    ${Description} {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[6]};
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 440px) {
    width: 290px;
  }
`
