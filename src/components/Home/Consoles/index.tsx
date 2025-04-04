import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import * as S from './styles'
import Card from '../../Card'
import { FeaturesContainer, FeatureItem } from '../../Card/styles'
import {
  renderManufacturerIcon,
  renderFeatureIcon
} from '../../../utils/iconUtils'
import { consoleItems } from './utils'

const Consoles: React.FC = () => {
  const handleBuyClick = (id: number) => {
    // Implementação futura da função de compra
    console.log(`Comprando console ${id}`)
  }

  return (
    <S.ConsolesSection>
      <S.SectionHeader>
        <h2>Consoles em Destaque</h2>
        <p>As melhores plataformas para seus jogos favoritos</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {consoleItems.map((item) => {
          // Criação de elementos para o Card genérico
          const topLeftTag = (
            <>
              {renderManufacturerIcon(item.manufacturer)} {item.manufacturer}
            </>
          )

          const topRightTag = item.storage

          // Lista de features/recursos
          const featuresList = (
            <FeaturesContainer>
              {item.features.map((feature, index) => (
                <FeatureItem key={index} theme="green">
                  {renderFeatureIcon(feature)} {feature}
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
              theme="green"
              actionButtonText="Comprar Agora"
              onBuyClick={handleBuyClick}
            />
          )
        })}
      </S.CardsContainer>
      <S.ViewMoreContainer>
        <S.ViewAllButton as={Link} to="/consoles">
          Ver todos os consoles <FaArrowRight />
        </S.ViewAllButton>
      </S.ViewMoreContainer>
    </S.ConsolesSection>
  )
}

export default Consoles
