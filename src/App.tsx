import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { useTheme } from './hooks/useTheme' // Atualize esta importação
import { GlobalStyle } from './styles/globalStyles'
import Layout from './components/Layout'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
