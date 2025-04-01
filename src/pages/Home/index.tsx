import Accessories from '../../components/Home/Accessories'
import Banner from '../../components/Home/Banner'
import Consoles from '../../components/Home/Consoles'
import Games from '../../components/Home/Games'
import Promotions from '../../components/Home/Promotions'

const Home = () => {
  return (
    <>
      <Banner />
      <Promotions />
      <Games />
      <Consoles />
      <Accessories />
    </>
  )
}

export default Home
