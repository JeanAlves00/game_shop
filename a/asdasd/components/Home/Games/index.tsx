import React from 'react'
import { FaArrowRight, FaStar } from 'react-icons/fa'
import * as S from './styles'
import Card from '../../Card'
import { PlatformsContainer, PlatformItem } from '../../Card/styles'
import { renderPlatformIcon } from '../../../utils/iconUtils'
import { gameItems } from './utils'

const Games: React.FC = () => {
  const handleBuyClick = (id: number) => {
    // Implementação futura da função de compra
    console.log(`Comprando jogo ${id}`)
  }

  return (
    <S.GamesSection>
      <S.SectionHeader>
        <h2>Jogos em Destaque</h2>
        <p>Confira os títulos mais aclamados e jogados do momento</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {gameItems.map((game) => {
          // Criação de elementos para o Card genérico
          const topLeftTag = game.genre
          const topRightTag = (
            <>
              <FaStar /> {game.rating.toFixed(1)}
            </>
          )

          // Criação das plataformas para games
          const platformsList = (
            <PlatformsContainer>
              {game.platforms.map((platform, index) => (
                <PlatformItem key={index} title={platform} theme="blue">
                  {renderPlatformIcon(platform)}
                </PlatformItem>
              ))}
            </PlatformsContainer>
          )

          return (
            <Card
              key={game.id}
              id={game.id}
              image={game.image}
              title={game.title}
              description={game.description}
              price={game.price}
              topLeftTag={topLeftTag}
              topRightTag={topRightTag}
              platformsList={platformsList}
              theme="blue"
              actionButtonText="Adicionar ao Carrinho"
              onBuyClick={handleBuyClick}
            />
          )
        })}
      </S.CardsContainer>

      <S.ViewMoreContainer>
        <S.ViewAllButton as="a" href="/jogos">
          Ver todos os jogos <FaArrowRight />
        </S.ViewAllButton>
      </S.ViewMoreContainer>
    </S.GamesSection>
  )
}

export default Games
