import React from 'react'
import {
  FaShoppingCart,
  FaArrowRight,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaStar
} from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'
import * as S from './styles'

// Interface para os dados de jogos
interface GameItem {
  id: number
  title: string
  genre: string
  description: string
  price: number
  image: string
  rating: number
  platforms: string[] // Plataformas disponíveis
}

// Dados mock para os jogos em destaque
const gameItems: GameItem[] = [
  {
    id: 1,
    title: 'Elden Ring',
    genre: 'RPG',
    description:
      'Um RPG de mundo aberto épico ambientado em um reino criado por Hidetaka Miyazaki e George R. R. Martin',
    price: 299.9,
    image:
      'https://cdn-products.eneba.com/resized-products/fDEP0qK9LnOcPUXh_OTX0jgZ-lCB0S8PR6kkw7Vozng_350x200_3x-0.jpeg',
    rating: 9.5,
    platforms: ['PC', 'PS', 'Xbox']
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    genre: 'RPG Tático',
    description:
      'Um RPG de turno aclamado pela crítica baseado no universo de Dungeons & Dragons',
    price: 199.9,
    image:
      'https://cdn1.epicgames.com/offer/5b7ca9d4e9f74e9688f842c5c67833d1/EGS_BaldursGate3_LarianStudios_S1_2560x1440-87af866ccc2409abc0c56e5695466aa8',
    rating: 9.8,
    platforms: ['PC', 'PS']
  },
  {
    id: 3,
    title: 'Zelda: Tears of the Kingdom',
    genre: 'Aventura',
    description:
      'A sequência de Breath of the Wild leva Link a uma nova aventura nos céus de Hyrule',
    price: 349.9,
    image:
      'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000063714/276a412988e07c4d55a2996c4d17fce46783c3e0994c7355ec65a0d89378f461',
    rating: 9.6,
    platforms: ['Switch']
  },
  {
    id: 4,
    title: "Marvel's Spider-Man 2",
    genre: 'Ação/Aventura',
    description:
      'Peter Parker e Miles Morales retornam em uma nova aventura para enfrentar um de seus maiores desafios',
    price: 349.9,
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/14e3dc74e74cadb4a6b15e2033aa19f5bd2261af48cb3f38.png',
    rating: 9.2,
    platforms: ['PS']
  }
]

const Games: React.FC = () => {
  // Função para renderizar os ícones de plataforma
  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'PC':
        return <FaWindows />
      case 'PS':
        return <FaPlaystation />
      case 'Xbox':
        return <FaXbox />
      case 'Switch':
        return <SiNintendoswitch />
      default:
        return null
    }
  }

  return (
    <S.GamesSection>
      <S.SectionHeader>
        <h2>Jogos em Destaque</h2>
        <p>Confira os títulos mais aclamados e jogados do momento</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {gameItems.map((game) => (
          <S.GameCard key={game.id}>
            <S.GenreTag>{game.genre}</S.GenreTag>
            <S.RatingTag>
              <FaStar /> {game.rating.toFixed(1)}
            </S.RatingTag>
            <S.CardImageWrapper>
              <S.CardImage src={game.image} alt={game.title} loading="lazy" />
            </S.CardImageWrapper>
            <S.CardContent>
              <S.CardTitle>{game.title}</S.CardTitle>

              <S.PlatformsContainer>
                {game.platforms.map((platform, index) => (
                  <S.PlatformItem key={index} title={platform}>
                    {renderPlatformIcon(platform)}
                  </S.PlatformItem>
                ))}
              </S.PlatformsContainer>

              <S.CardDescription>{game.description}</S.CardDescription>
              <S.PriceContainer>
                <S.Price>R$ {game.price.toFixed(2)}</S.Price>
              </S.PriceContainer>
              <S.BuyButton>
                <FaShoppingCart />
                Adicionar ao Carrinho
              </S.BuyButton>
            </S.CardContent>
          </S.GameCard>
        ))}
      </S.CardsContainer>

      <S.ViewMoreContainer>
        <S.ViewAllButton>
          Ver todos os jogos <FaArrowRight />
        </S.ViewAllButton>
      </S.ViewMoreContainer>
    </S.GamesSection>
  )
}

export default Games
