import React, { ReactNode } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import * as S from './styles'

export type CardTheme = 'green' | 'blue' | 'purple' | 'pink'

export interface CardProps {
  id: number
  image: string
  title: string
  description: string
  price: number | { original?: number; sale?: number }
  topLeftTag?: ReactNode
  topRightTag?: ReactNode
  featuresList?: ReactNode
  platformsList?: ReactNode
  actionButtonText?: string
  theme: CardTheme
  onBuyClick?: (id: number) => void
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  title,
  description,
  price,
  topLeftTag,
  topRightTag,
  featuresList,
  platformsList,
  actionButtonText = 'Comprar Agora',
  theme,
  onBuyClick
}) => {
  const handleBuyClick = () => {
    if (onBuyClick) {
      onBuyClick(id)
    }
  }

  return (
    <S.CardWrapper theme={theme}>
      {topLeftTag && <S.TopLeftTag>{topLeftTag}</S.TopLeftTag>}
      {topRightTag && (
        <S.TopRightTag theme={theme}>{topRightTag}</S.TopRightTag>
      )}

      <S.CardImageWrapper>
        <S.CardImage src={image} alt={title} loading="lazy" />
      </S.CardImageWrapper>

      <S.CardContent theme={theme}>
        <S.CardTitle>{title}</S.CardTitle>

        {platformsList}

        <S.CardDescription>{description}</S.CardDescription>

        {featuresList}

        <S.PriceContainer>
          {typeof price === 'object' && price.original ? (
            <>
              <S.OriginalPrice theme={theme}>
                R$ {price.original.toFixed(2)}
              </S.OriginalPrice>
              <S.SalePrice theme={theme}>
                R$ {price.sale?.toFixed(2)}
              </S.SalePrice>
            </>
          ) : (
            <S.Price theme={theme}>
              R${' '}
              {(typeof price === 'number' ? price : price.sale || 0).toFixed(2)}
            </S.Price>
          )}
        </S.PriceContainer>

        <S.BuyButton theme={theme} onClick={handleBuyClick}>
          <FaShoppingCart />
          {actionButtonText}
        </S.BuyButton>
      </S.CardContent>
    </S.CardWrapper>
  )
}

export default Card
