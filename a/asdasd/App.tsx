import Header from './components/Header/index'
import Consoles from './pages/Consoles'
import Games from './pages/Games'
import Home from './pages/Home'
import { GlobalStyle } from './styles/globalStyles'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/jogos',
    element: <Games />
  },
  {
    path: '/consoles',
    element: <Consoles />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
