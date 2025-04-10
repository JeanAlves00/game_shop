import { createGlobalStyle } from 'styled-components'

export const colors = {
  branca: '#eee',
  cinza: '#333',
  verde: '#10AC84',
  preta: '#111'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.preta};
    color: ${colors.branca};
  }
`
