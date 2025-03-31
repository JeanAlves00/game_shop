import Banner from './components/Home/Banner'
import Header from './components/Header/index'
import { GlobalStyle } from './styles/globalStyles'
import Promotions from './components/Home/Promotions'

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Banner />
        <Promotions />
      </div>
    </>
  )
}

export default App
