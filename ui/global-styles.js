import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus {
    outline-color: ${({ theme }) => theme.colors.text};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    cursor: default;
    font-family: 'Lato', sans-serif;
    font-variant-ligatures: none;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.background};
  }

  input,
  select,
  textarea,
  button {
    font-family: inherit;
  }
`
