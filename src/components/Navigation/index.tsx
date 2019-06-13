import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <NavWrapper>
      <Title>Hacker News</Title>
      <LinkWrapper>
        <NavLink activeClassName="active" to="/news">
          News
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </LinkWrapper>
    </NavWrapper>
  )
}

export default Navigation

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray[1]}85`};
`

const Title = styled.h1`
  font-family: 'Lato';
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 20px;
`
const LinkWrapper = styled.div`
  a {
    position: relative;
    font-size: 1rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.gray[3]};
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 35px;

    &:last-child {
      margin-right: 0px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.gray[6]};
    }
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -4px;
      height: 2px;
      width: 0%;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  .active {
    color: ${({ theme }) => theme.colors.gray[6]};
    &::after {
      width: 100%;
      transition: all 0.2s ease-in-out;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`
