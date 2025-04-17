import React, { useState, useEffect } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, GameShopTheme } from '../styles/theme'
import { ThemeContext } from './createThemeContext'

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
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

export default ThemeProvider
