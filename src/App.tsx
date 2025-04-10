import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './contexts/ThemeContext'
import { GlobalStyle } from './styles/globalStyles'
import Layout from './components/Layout'
import Home from './pages/Home'

// Definição das rotas da aplicação
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
      // Aqui você pode adicionar mais rotas conforme necessário
    ]
  }
])

// Componente que aplica o tema e estilos globais
function AppContent() {
  const { currentTheme } = useTheme()

  return (
    <>
      <GlobalStyle theme={currentTheme} />
      <RouterProvider router={router} />
    </>
  )
}

// Componente principal da aplicação
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
