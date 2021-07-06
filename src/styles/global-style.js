import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import '@fontsource/kodchasan/400.css'
import '@fontsource/kanit/700.css'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
    font-family: Kodchasan;
    color: ${({ theme }) => theme.text};
    text-align: center;
  }
  body {
    background-color: ${({ theme }) => theme.body};
    transition: background-color 1000ms ease;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  b {
    font-weight: bold;
  }
  h1 {
    font-family: Kanit;
    font-size: 24px;
    margin: 16px;
  }
`
