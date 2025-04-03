import React from 'react'
import { FaArrowRight, FaPercentage } from 'react-icons/fa'
import * as S from './styles'
import Card from '../../Card'
import { PlatformsContainer, PlatformItem } from '../../Card/styles'
import {
  renderPlatformIcon,
  calculateDiscount,
  renderCategoryIcon
} from '../../../utils/iconUtils'
import { promotionItems } from './utils'

const Promotions: React.FC = () => {
  const handleBuyClick = (id: number) => {
    // Implementação futura da função de compra
    console.log(`Comprando produto ${id}`)
  }

  return (
    <S.PromotionsSection>
      <S.SectionHeader>
        <h2>Ofertas Imperdíveis</h2>
        <p>Economize em produtos selecionados por tempo limitado</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {promotionItems.map((item) => {
          const discountPercentage = calculateDiscount(
            item.originalPrice,
            item.salePrice
          )

          // Criação de elementos para o Card genérico
          const topLeftTag = (
            <>
              {renderCategoryIcon(item.category)} {item.category}
            </>
          )

          const topRightTag = (
            <>
              <FaPercentage /> -{discountPercentage}%
            </>
          )

          // Criação das plataformas para games
          const platformsList = item.category === 'Game' && item.platforms && (
            <PlatformsContainer>
              {item.platforms.map((platform, index) => (
                <PlatformItem key={index} title={platform} theme="pink">
                  {renderPlatformIcon(platform)}
                </PlatformItem>
              ))}
            </PlatformsContainer>
          )

          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={{ original: item.originalPrice, sale: item.salePrice }}
              topLeftTag={topLeftTag}
              topRightTag={topRightTag}
              platformsList={platformsList}
              theme="pink"
              actionButtonText="Comprar"
              onBuyClick={handleBuyClick}
            />
          )
        })}
      </S.CardsContainer>

      <S.ViewMoreContainer>
        <S.ViewMoreButton>
          Ver mais promoções
          <FaArrowRight />
        </S.ViewMoreButton>
      </S.ViewMoreContainer>
    </S.PromotionsSection>
  )
}

export default Promotions
