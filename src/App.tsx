import React from 'react'
import globalStyle from './style/globalStyle'
import { BrowserRouter } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import Routes from './Routes'
import { Navigation } from './components'

const GlobalStyle = globalStyle()

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Navigation />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0px 20px;
  min-height: 100vh;
`
