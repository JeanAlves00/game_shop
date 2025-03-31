import Banner from './components/Home/Banner'
import Header from './components/Header/index'
import { GlobalStyle } from './styles/globalStyles'
import Promotions from './components/Home/Promotions'
import Games from './components/Home/Games'
import Consoles from './components/Home/Consoles'
import Accessories from './components/Home/Accessories'

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Banner />
        <Promotions />
        <Games />
        <Consoles />
        <Accessories />
      </div>
    </>
  )
}

export default App
