import React from 'react'
import * as S from './styles'

export type ProductType = {
  id: number
  title: string
  description: string
  oldPrice: string
  newPrice: string
  discount: string
  image: string
  bonus?: string
  features?: Array<{ icon: string; text: string }>
}

export type TimerType = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

interface CardPromotionsProps {
  title: string
  subtitle?: string
  products: ProductType[]
  timer?: TimerType
  showViewAllButton?: boolean
  viewAllButtonText?: string
  onViewAllClick?: () => void
  onProductClick?: (productId: number) => void
}

const CardPromotions: React.FC<CardPromotionsProps> = ({
  title,
  subtitle,
  products,
  timer,
  showViewAllButton = true,
  viewAllButtonText = 'Ver Todas as Ofertas',
  onViewAllClick = () => {},
  onProductClick = () => {}
}) => {
  return (
    <S.SectionContainer>
      <S.SectionHeader>
        <S.Title>{title}</S.Title>
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}

        {timer && (
          <S.TimerContainer>
            <S.TimerBox>
              <span>{String(timer.days).padStart(2, '0')}</span>
              <span>Dias</span>
            </S.TimerBox>
            <S.TimerBox>
              <span>{String(timer.hours).padStart(2, '0')}</span>
              <span>Horas</span>
            </S.TimerBox>
            <S.TimerBox>
              <span>{String(timer.minutes).padStart(2, '0')}</span>
              <span>Min</span>
            </S.TimerBox>
            <S.TimerBox>
              <span>{String(timer.seconds).padStart(2, '0')}</span>
              <span>Seg</span>
            </S.TimerBox>
          </S.TimerContainer>
        )}
      </S.SectionHeader>

      <S.ProductGrid>
        {products.map((product) => (
          <S.ProductCard
            key={product.id}
            onClick={() => onProductClick(product.id)}
          >
            <S.DiscountTag>{product.discount}</S.DiscountTag>
            <S.ProductImage>
              <img src={product.image} alt={product.title} />
            </S.ProductImage>
            <S.ProductContent>
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductDescription>{product.description}</S.ProductDescription>

              <S.PriceContainer>
                <S.OldPrice>{product.oldPrice}</S.OldPrice>
                <S.NewPrice>{product.newPrice}</S.NewPrice>
              </S.PriceContainer>

              <S.FeaturesList>
                {product.features ? (
                  product.features.map((feature, index) => (
                    <S.Feature key={index}>
                      <span>{feature.icon}</span>
                      <span>{feature.text}</span>
                    </S.Feature>
                  ))
                ) : (
                  <>
                    <S.Feature>
                      <span>⚡</span>
                      <span>Entrega Rápida</span>
                    </S.Feature>
                    <S.Feature>
                      <span>💳</span>
                      <span>12x sem juros</span>
                    </S.Feature>
                  </>
                )}
              </S.FeaturesList>

              {product.bonus && (
                <S.BonusTag>+ BÔNUS: {product.bonus}</S.BonusTag>
              )}

              <S.Button>Comprar Agora</S.Button>
            </S.ProductContent>
          </S.ProductCard>
        ))}
      </S.ProductGrid>

      {showViewAllButton && (
        <S.ViewAllButton onClick={onViewAllClick}>
          {viewAllButtonText}
        </S.ViewAllButton>
      )}
    </S.SectionContainer>
  )
}

export default CardPromotions
