import React from 'react'
import * as S from './styles'
import CardGaming, { GameType } from '../../Cards/CardGaming'
import { featuredGames } from '../../../data/Home/dataHomeGames'

interface GamesSectionProps {
  title?: string
  subtitle?: string
  showViewMore?: boolean
  viewMoreText?: string
  onViewMoreClick?: () => void
  onGameClick?: (gameId: number) => void
  onAddToCartClick?: (gameId: number) => void
  games?: GameType[] // Nova prop para permitir passar jogos personalizados
}

const GamesSection: React.FC<GamesSectionProps> = ({
  title = 'Jogos em Destaque',
  subtitle = 'Explore nossa seleção de jogos premiados e os títulos mais populares do momento.',
  showViewMore = true,
  viewMoreText = 'Ver Mais Jogos',
  onViewMoreClick = () => {},
  onGameClick,
  onAddToCartClick,
  games = featuredGames // Usa os jogos em destaque como padrão
}) => {
  return (
    <S.GamesSection>
      <S.SectionHeader>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
      </S.SectionHeader>

      <S.GamesGrid>
        {games.map((game) => (
          <S.AnimatedCard key={game.id}>
            <CardGaming
              game={game}
              onCardClick={onGameClick}
              onAddToCartClick={onAddToCartClick}
            />
          </S.AnimatedCard>
        ))}
      </S.GamesGrid>

      {showViewMore && (
        <S.ViewMoreButton onClick={onViewMoreClick}>
          {viewMoreText}
        </S.ViewMoreButton>
      )}
    </S.GamesSection>
  )
}

export default GamesSection
