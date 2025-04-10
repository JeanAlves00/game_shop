import React, { createContext, useState, useEffect, useContext } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, GameShopTheme } from '../styles/theme'

type ThemeContextType = {
  currentTheme: GameShopTheme
  toggleTheme: () => void
  isDarkTheme: boolean
}

// Exporte o contexto para que o hook possa acessá-lo
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

// Hook para facilitar o uso do contexto em outros componentes
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }

  return context
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  // Verificar preferência salva ou preferência do sistema
  const getInitialTheme = (): GameShopTheme => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'light') return lightTheme
    if (savedTheme === 'dark') return darkTheme

    // Verificar preferência do sistema
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    return prefersDark ? darkTheme : lightTheme
  }

  const [theme, setTheme] = useState<GameShopTheme>(darkTheme) // Padrão inicial para SSR

  useEffect(() => {
    // Atualizar com o tema correto depois que o componente montar (client-side)
    setTheme(getInitialTheme())
  }, [])

  const toggleTheme = () => {
    const newTheme = theme.name === 'dark' ? lightTheme : darkTheme
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme.name)
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: theme,
        toggleTheme,
        isDarkTheme: theme.name === 'dark'
      }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
