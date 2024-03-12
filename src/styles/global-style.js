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
  a {
    font-weight: bold;
    color:  ${({ theme }) => theme.highlight};
  }
  p {
    margin: 6px 0 6px 0;
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
    margin: 16px 0 16px 0;
  }
  h2 {
    font-family: Kanit;
    font-size: 18px;
    margin: 14px 0 14px 0;
  }
`
