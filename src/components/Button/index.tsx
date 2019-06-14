import styled, { keyframes } from 'styled-components'

const Wiggle = keyframes`
  0% { left: 35%;}
  50% { left: 30%;}
  100% { left: 35%;}
`

export default styled.button`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.25s background ease;
  position: relative;
  &:focus,
  &:active {
    outline: 0;
  }
  &:hover {
    svg {
      animation: ${Wiggle} 0.8s ease infinite;
      opacity: 1;
      left: 30%;
      height: 25px;
    }
  }

  &:active {
    svg {
      opacity: 0.1;
    }
  }

  svg {
    height: 22.5px;
    position: absolute;
    transition: 0.15s all ease;
    opacity: 0.7;
    left: 35%;
  }
`
