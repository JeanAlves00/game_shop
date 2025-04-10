import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import * as S from './styles'
import Card from '../../Card'
import { FeaturesContainer, FeatureItem } from '../../Card/styles'
import {
  renderCategoryIcon,
  renderPlatformIcon,
  renderFeatureIcon
} from '../../../utils/iconUtils'
import { accessoryItems } from './utils'

const Accessories: React.FC = () => {
  const handleBuyClick = (id: number) => {
    // Implementação futura da função de compra
    console.log(`Comprando acessório ${id}`)
  }

  return (
    <S.AccessoriesSection>
      <S.SectionHeader>
        <h2>Acessórios em Destaque</h2>
        <p>Eleve sua experiência de jogo com os melhores acessórios</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {accessoryItems.map((item) => {
          // Criação de elementos para o Card genérico
          const topLeftTag = (
            <>
              {renderCategoryIcon(item.category)} {item.category}
            </>
          )

          const topRightTag = (
            <>
              {item.compatibility.map((platform, i) => (
                <React.Fragment key={i}>
                  {renderPlatformIcon(platform)}
                  {i < item.compatibility.length - 1 ? ' ' : ''}
                </React.Fragment>
              ))}
            </>
          )

          // Lista de especificações
          const featuresList = (
            <FeaturesContainer>
              {item.specs.map((spec, index) => (
                <FeatureItem key={index} theme="purple">
                  {renderFeatureIcon(spec)} {spec}
                </FeatureItem>
              ))}
            </FeaturesContainer>
          )

          return (
            <Card
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
              topLeftTag={topLeftTag}
              topRightTag={topRightTag}
              featuresList={featuresList}
              theme="purple"
              actionButtonText="Adicionar ao Carrinho"
              onBuyClick={handleBuyClick}
            />
          )
        })}
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
