import React from 'react'
import styled from 'styled-components'

import { PageWrapper } from '../../components'
import ProfileImage from './ProfileImage'

const About: React.FC = () => {
  return (
    <Wrapper>
      <ProfileImage />
      <Title>“I made this...”</Title>
      <Paragraph>
        Tasked with redesigning{' '}
        <a
          href="https://news.ycombinator.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hacker News
        </a>{' '}
        using{' '}
        <a
          href="https://newsapi.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          newsapi.org
        </a>{' '}
        I made some{' '}
        <span role="img" aria-label="coffe">
          ☕
        </span>{' '}
        turned on{' '}
        <a
          href="https://www.youtube.com/watch?v=ZBEi7Sq9KTU&t="
          target="_blank"
          rel="noopener noreferrer"
        >
          Neon Nox
        </a>{' '}
        <span role="img" aria-label="music">
          🎵
        </span>{' '}
        opened my terminal and entered <br />{' '}
        <code>npx create-react-app --typescript</code>
      </Paragraph>
    </Wrapper>
  )
}

export default About

const Wrapper = styled(PageWrapper)`
  align-items: center;
  justify-content: initial;
`
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.gray[3]};
  font-style: italic;
  font-size: 55px;
`

const Paragraph = styled.p`
  margin-top: 30px;
  font-size: 22px;
  text-align: center;
  max-width: 520px;
  line-height: 35px;

  code {
    background: #333141b8;
    color: #5ce75c;
    padding: 6px 14px;
    border-radius: 4px;
    margin: 0px;
    line-height: 60px;
  }
`
