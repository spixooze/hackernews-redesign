import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

interface Props {
  message: string
}

const config = { mass: 2, tension: 2000, friction: 50 }

const ErrorBox: React.FC<Props> = ({ message }) => {
  const props = useSpring({
    config,
    opacity: 1,
    from: { width: 0 },
    to: { width: 440 }
  })
  return (
    <Container style={props}>
      <Emoji>
        <span role="img" aria-label="Grimacing Smiley">
          😬
        </span>
      </Emoji>
      <Message>{message}</Message>
    </Container>
  )
}

export default ErrorBox

const Container = styled(animated.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 440px;
  border-radius: 4px;
  border: 1px solid #f33b3b;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 3px 25px 2px;
  margin: 0 auto;
  padding: 8px;
`
const Emoji = styled.div`
  font-size: 60px;
  margin-right: 10px;
`
const Message = styled.span`
  font-size: 16px;
  font-weight: bold;
`
