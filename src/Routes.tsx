import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import News from './pages/News'
import About from './pages/About'
import { __RouterContext, Redirect } from 'react-router'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'

const Routes: React.FC = () => {
  const { location } = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    config: config.stiff,
    initial: { opacity: 0 },
    from: { opacity: 0, transform: 'translate3d(50px, 0px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    leave: {
      opacity: 0,
      position: 'absolute'
    }
  })

  return (
    <RelativeContainer>
      {transitions.map(({ item, props, key }) => (
        <AnimatedWrapper style={{ ...props }} key={key}>
          <Switch location={item}>
            <Route exact path="/" render={() => <Redirect to="/news" />} />
            <Route exact path="/news" component={News} />
            <Route exact path="/about" component={About} />
          </Switch>
        </AnimatedWrapper>
      ))}
    </RelativeContainer>
  )
}

export default Routes

const RelativeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const AnimatedWrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
`
