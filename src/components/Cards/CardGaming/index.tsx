import React, { useState } from 'react'
import * as S from './styles'

export type GameType = {
  id: number
  title: string
  developer: string
  price: number
  oldPrice?: number
  discount?: string
  rating: number
  imageUrl: string
  tags: string[]
}

interface CardGamingProps {
  game: GameType
  onCardClick?: (gameId: number) => void
  onAddToCartClick?: (gameId: number) => void
  buttonText?: string
}

const CardGaming: React.FC<CardGamingProps> = ({
  game,
  onCardClick = () => {},
  onAddToCartClick,
  buttonText = 'Adicionar ao Carrinho'
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = () => {
    onCardClick(game.id)
  }

  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Evita que o clique propague para o card
    if (onAddToCartClick) {
      onAddToCartClick(game.id)
    }
  }

  return (
    <S.CardContainer
      $isHovered={isHovered}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <S.ImageContainer>
        <S.GameImage src={game.imageUrl} alt={game.title} />
        <S.ImageOverlay />

        {/* Rating Badge */}
        <S.RatingBadge>
          <S.RatingStar>★</S.RatingStar>
          <span>{game.rating}</span>
        </S.RatingBadge>

        {/* Discount Tag (se houver desconto) */}
        {game.discount && <S.DiscountTag>{game.discount}</S.DiscountTag>}

        {/* Game Title and Developer */}
        <S.TitleArea>
          <S.GameTitle>{game.title}</S.GameTitle>
          <S.DeveloperName>{game.developer}</S.DeveloperName>
        </S.TitleArea>
      </S.ImageContainer>

      <S.ContentContainer>
        {/* Tags */}
        <S.TagsContainer>
          {game.tags.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.TagsContainer>

        {/* Price and Button */}
        <S.BottomArea>
          <S.PriceContainer>
            <S.PriceLabel>Preço</S.PriceLabel>
            <S.Price>
              {game.oldPrice && (
                <S.OldPrice>R$ {game.oldPrice.toFixed(2)}</S.OldPrice>
              )}
              R$ {game.price.toFixed(2)}
            </S.Price>
          </S.PriceContainer>

          <S.AddToCartButton
            $isHovered={isHovered}
            onClick={handleAddToCartClick}
          >
            {buttonText}
          </S.AddToCartButton>
        </S.BottomArea>
      </S.ContentContainer>
    </S.CardContainer>
  )
}

export default CardGaming
