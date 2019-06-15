import React, { useState, useLayoutEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'

const ProfileImage: React.FC = () => {
  const [toggle, setToggle] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  })

  useLayoutEffect(() => {
    const changeImageTimeout = setTimeout(() => {
      setToggle(true)
    }, 9000)

    return () => clearTimeout(changeImageTimeout)
  }, [])

  return (
    <Wrapper>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props} key={key}>
            <Image src="images/simon-profile-min.PNG" />
          </animated.div>
        ) : (
          <animated.div style={props} key={key}>
            <Image src="images/imadethis.gif" />
          </animated.div>
        )
      )}
    </Wrapper>
  )
}

export default ProfileImage

const Wrapper = styled.div`
  position: relative;
  width: 350px;
  height: 430px;
`
const Image = styled.img`
  border-radius: 50%;
  width: 350px;
  margin: 40px auto;
`
