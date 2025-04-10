import { createGlobalStyle } from 'styled-components'
import { GameShopTheme } from './theme'

export const GlobalStyle = createGlobalStyle<{ theme: GameShopTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.main};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }
`
