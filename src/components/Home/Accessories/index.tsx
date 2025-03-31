import React from 'react'
import {
  FaShoppingCart,
  FaArrowRight,
  FaHeadphones,
  FaKeyboard,
  FaMouse,
  FaGamepad,
  FaBluetooth,
  FaBatteryFull,
  FaWifi,
  FaBolt,
  FaXbox
} from 'react-icons/fa'
import { SiPlaystation, SiNintendo } from 'react-icons/si'
import * as S from './styles'

// Interface para os dados de acessórios
interface AccessoryItem {
  id: number
  title: string
  category: 'Headset' | 'Controle' | 'Teclado' | 'Mouse' | 'Outro'
  description: string
  price: number
  image: string
  compatibility: string[]
  specs: string[]
}

// Dados mock para os acessórios em destaque
const accessoryItems: AccessoryItem[] = [
  {
    id: 1,
    title: 'Headset HyperX Cloud Alpha',
    category: 'Headset',
    description:
      'Headset com drivers de dupla câmara, microfone destacável e conforto premium para longas sessões de jogo',
    price: 499.9,
    image: 'https://m.media-amazon.com/images/I/61j5OlQ70+L._AC_SX425_.jpg',
    compatibility: ['PC', 'PS', 'Xbox', 'Switch'],
    specs: [
      'Som Surround 7.1',
      'Microfone removível',
      'Confortável',
      'Cabo removível'
    ]
  },
  {
    id: 2,
    title: 'Controle DualSense',
    category: 'Controle',
    description:
      'Controle sem fio para PlayStation 5 com feedback háptico e gatilhos adaptáveis para maior imersão',
    price: 449.9,
    image: 'https://m.media-amazon.com/images/I/612bjwBuobS._AC_SX425_.jpg',
    compatibility: ['PS'],
    specs: [
      'Feedback Háptico',
      'Gatilhos Adaptáveis',
      'Bluetooth',
      'Bateria recarregável'
    ]
  },
  {
    id: 3,
    title: 'Teclado Razer BlackWidow V3',
    category: 'Teclado',
    description:
      'Teclado mecânico gamer com switches Razer Green, RGB Chroma e construção premium',
    price: 899.9,
    image: 'https://m.media-amazon.com/images/I/61Lg-l8PX2L._AC_SX425_.jpg',
    compatibility: ['PC'],
    specs: ['Mecânico', 'RGB', 'Apoio de pulso', 'Switches Green']
  },
  {
    id: 4,
    title: 'Mouse Logitech G502 HERO',
    category: 'Mouse',
    description:
      'Mouse gamer de alta performance com sensor HERO 25K, 11 botões programáveis e pesos ajustáveis',
    price: 349.9,
    image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX425_.jpg',
    compatibility: ['PC'],
    specs: [
      'Sensor HERO 25K',
      'RGB',
      'Pesos ajustáveis',
      '11 botões programáveis'
    ]
  }
]

const Accessories: React.FC = () => {
  // Função para renderizar os ícones de categoria
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case 'Headset':
        return <FaHeadphones />
      case 'Controle':
        return <FaGamepad />
      case 'Teclado':
        return <FaKeyboard />
      case 'Mouse':
        return <FaMouse />
      default:
        return null
    }
  }

  // Função para renderizar os ícones de compatibilidade
  const renderCompatibilityIcon = (platform: string) => {
    switch (platform) {
      case 'PC':
        return 'PC'
      case 'PS':
        return <SiPlaystation />
      case 'Xbox':
        return <FaXbox />
      case 'Switch':
        return <SiNintendo />
      default:
        return null
    }
  }

  // Função para renderizar os ícones de especificações
  const renderSpecIcon = (spec: string) => {
    if (spec.includes('Bluetooth')) return <FaBluetooth />
    if (spec.includes('Bateria')) return <FaBatteryFull />
    if (spec.includes('Sem fio') || spec.includes('Wireless')) return <FaWifi />
    if (spec.includes('Rápido') || spec.includes('Resposta')) return <FaBolt />
    if (spec.includes('Headset') || spec.includes('Som'))
      return <FaHeadphones />
    if (spec.includes('Controle') || spec.includes('Gamepad'))
      return <FaGamepad />
    return null
  }

  return (
    <S.AccessoriesSection>
      <S.SectionHeader>
        <h2>Acessórios em Destaque</h2>
        <p>Eleve sua experiência de jogo com os melhores acessórios</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {accessoryItems.map((item) => (
          <S.AccessoryCard key={item.id}>
            <S.CategoryTag>
              {renderCategoryIcon(item.category)} {item.category}
            </S.CategoryTag>
            <S.CompatibilityTag>
              {item.compatibility.map((platform, i) => (
                <React.Fragment key={i}>
                  {renderCompatibilityIcon(platform)}
                  {i < item.compatibility.length - 1 ? ' ' : ''}
                </React.Fragment>
              ))}
            </S.CompatibilityTag>
            <S.CardImageWrapper>
              <S.CardImage src={item.image} alt={item.title} loading="lazy" />
            </S.CardImageWrapper>
            <S.CardContent>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardDescription>{item.description}</S.CardDescription>

              <S.SpecsContainer>
                {item.specs.map((spec, index) => (
                  <S.SpecItem key={index}>
                    {renderSpecIcon(spec)} {spec}
                  </S.SpecItem>
                ))}
              </S.SpecsContainer>

              <S.PriceContainer>
                <S.Price>R$ {item.price.toFixed(2)}</S.Price>
              </S.PriceContainer>
              <S.BuyButton>
                <FaShoppingCart />
                Adicionar ao Carrinho
              </S.BuyButton>
            </S.CardContent>
          </S.AccessoryCard>
        ))}
      </S.CardsContainer>

      <S.ViewMoreContainer>
        <S.ViewAllButton>
          Ver todos os acessórios <FaArrowRight />
        </S.ViewAllButton>
      </S.ViewMoreContainer>
    </S.AccessoriesSection>
  )
}

export default Accessories
