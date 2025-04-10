import { DefaultTheme } from 'styled-components'

// Definição de tipo para os temas
export interface GameShopTheme extends DefaultTheme {
  name: string
  colors: {
    primary: string
    secondary: string
    background: {
      main: string
      gradient: string
      secondary: string
    }
    text: {
      primary: string
      secondary: string
      highlight: string
    }
    button: {
      background: string
      hover: string
      text: string
    }
    border: {
      primary: string
      highlight: string
    }
    input: {
      background: string
      text: string
      placeholder: string
    }
  }
}

// Tema escuro (padrão)
export const darkTheme: GameShopTheme = {
  name: 'dark',
  colors: {
    primary: '#4cc9f0',
    secondary: '#f72585',
    background: {
      main: '#1a1a2e',
      gradient: 'linear-gradient(to right, #1a1a2e, #16213e)',
      secondary: '#16213e'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      highlight: '#4cc9f0'
    },
    button: {
      background: 'rgba(255, 255, 255, 0.1)',
      hover: 'rgba(255, 255, 255, 0.15)',
      text: '#ffffff'
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',
      highlight: 'linear-gradient(to right, #4cc9f0, #f72585)'
    },
    input: {
      background: 'rgba(255, 255, 255, 0.1)',
      text: '#ffffff',
      placeholder: 'rgba(255, 255, 255, 0.7)'
    }
  }
}

// Tema claro
export const lightTheme: GameShopTheme = {
  name: 'light',
  colors: {
    primary: '#0095da',
    secondary: '#e91e63',
    background: {
      main: '#f7f7f7',
      gradient: 'linear-gradient(to right, #f7f7f7, #e9e9e9)',
      secondary: '#ffffff'
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      highlight: '#0095da'
    },
    button: {
      background: 'rgba(0, 0, 0, 0.05)',
      hover: 'rgba(0, 0, 0, 0.1)',
      text: '#333333'
    },
    border: {
      primary: 'rgba(0, 0, 0, 0.1)',
      highlight: 'linear-gradient(to right, #0095da, #e91e63)'
    },
    input: {
      background: 'rgba(0, 0, 0, 0.05)',
      text: '#333333',
      placeholder: '#888888'
    }
  }
}
