import { createContext } from 'react'
import { GameShopTheme } from '../styles/theme'

export type ThemeContextType = {
  currentTheme: GameShopTheme
  toggleTheme: () => void
  isDarkTheme: boolean
}

// Criar e exportar o contexto
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)
