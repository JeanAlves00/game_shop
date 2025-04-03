import React, { ReactNode } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import * as S from './styles'

export type CardTheme = 'green' | 'blue' | 'purple' | 'pink'

export type PriceInfo = {
  original?: number
  sale?: number
}

export interface CardProps {
  id: number
  image: string
  title: string
  description: string
  price: number | PriceInfo
  topLeftTag?: ReactNode
  topRightTag?: ReactNode
  featuresList?: ReactNode
  platformsList?: ReactNode
  actionButtonText?: string
  theme: CardTheme
  onBuyClick?: (id: number) => void
  showDiscount?: boolean
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

  const renderPrice = () => {
    if (typeof price === 'object' && price.original && price.sale) {
      return (
        <>
          <S.OriginalPrice theme={theme}>
            R$ {price.original.toFixed(2)}
          </S.OriginalPrice>
          <S.SalePrice theme={theme}>R$ {price.sale.toFixed(2)}</S.SalePrice>
        </>
      )
    } else {
      const priceValue = typeof price === 'number' ? price : price.sale || 0
      return <S.Price theme={theme}>R$ {priceValue.toFixed(2)}</S.Price>
    }
  }

  return (
    <S.CardWrapper theme={theme}>
      {topLeftTag && (
        <S.TopLeftTag
          theme={theme as unknown as import('styled-components').DefaultTheme}
        >
          {topLeftTag}
        </S.TopLeftTag>
      )}
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

        <S.PriceContainer>{renderPrice()}</S.PriceContainer>

        <S.BuyButton theme={theme} onClick={handleBuyClick}>
          <FaShoppingCart />
          {actionButtonText}
        </S.BuyButton>
      </S.CardContent>
    </S.CardWrapper>
  )
}

export default Card
