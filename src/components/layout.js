import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { lightTheme, darkTheme } from '../styles/theme'
import { isBrowser } from 'react-device-detect'
import styled from 'styled-components'
import Menu from './menu'

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, 20%) 1fr;
`

const Content = styled.div`
  padding: 36px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const GridLayout = ({ children, setLight, isLight }) => {
  if (isBrowser) {
    return (
      <Grid>
        <Menu setLight={setLight} isLight={isLight} />
        <Content>{children}</Content>
      </Grid>
    )
  } else {
    return <Content>{children}</Content>
  }
}

export default function Layout({ children }) {
  const [isLight, setLight] = useState(true)
  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <GridLayout children={children} setLight={setLight} isLight={isLight} />
    </ThemeProvider>
  )
}
