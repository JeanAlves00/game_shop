import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import CardPromotions from '../../Cards/CardPromotions'
import * as S from './styles'
import { allProducts } from '../../../data/dataHomePromotions'

const Promotions: React.FC = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('destaques')
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 30 // Definido para 30 segundos para facilitar testes
  })

  // Índices para rastrear quais grupos de produtos estão sendo exibidos
  const [currentIndices, setCurrentIndices] = useState({
    highlights: 0,
    consoles: 0,
    games: 0,
    flashOffer: 0
  })

  // Produtos atuais para cada categoria
  const [featuredProducts, setFeaturedProducts] = useState(
    allProducts.highlights[0]
  )
  const [consoleProducts, setConsoleProducts] = useState(
    allProducts.consoles[0]
  )
  const [gameProducts, setGameProducts] = useState(allProducts.games[0])
  const [highlightOffer, setHighlightOffer] = useState(
    allProducts.flashOffers[0]
  )

  // Função para rotacionar produtos aleatoriamente
  const rotateProducts = useCallback(() => {
    // Gerar novos índices aleatórios, mas diferentes dos atuais
    const newIndices = {
      highlights: Math.floor(Math.random() * allProducts.highlights.length),
      consoles: Math.floor(Math.random() * allProducts.consoles.length),
      games: Math.floor(Math.random() * allProducts.games.length),
      flashOffer: Math.floor(Math.random() * allProducts.flashOffers.length)
    }

    // Garantir que os novos índices são diferentes dos atuais quando possível
    if (
      allProducts.highlights.length > 1 &&
      newIndices.highlights === currentIndices.highlights
    ) {
      newIndices.highlights =
        (newIndices.highlights + 1) % allProducts.highlights.length
    }

    if (
      allProducts.consoles.length > 1 &&
      newIndices.consoles === currentIndices.consoles
    ) {
      newIndices.consoles =
        (newIndices.consoles + 1) % allProducts.consoles.length
    }

    if (
      allProducts.games.length > 1 &&
      newIndices.games === currentIndices.games
    ) {
      newIndices.games = (newIndices.games + 1) % allProducts.games.length
    }

    if (
      allProducts.flashOffers.length > 1 &&
      newIndices.flashOffer === currentIndices.flashOffer
    ) {
      newIndices.flashOffer =
        (newIndices.flashOffer + 1) % allProducts.flashOffers.length
    }

    // Atualizar os índices e produtos
    setCurrentIndices(newIndices)
    setFeaturedProducts(allProducts.highlights[newIndices.highlights])
    setConsoleProducts(allProducts.consoles[newIndices.consoles])
    setGameProducts(allProducts.games[newIndices.games])
    setHighlightOffer(allProducts.flashOffers[newIndices.flashOffer])

    // Reiniciar o timer
    setTimer({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 30 // 30 segundos para testes, pode ser alterado para um valor maior
    })
  }, [currentIndices])

  // Atualizar o timer a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        let { days, hours, minutes, seconds } = prevTimer

        if (seconds > 0) {
          seconds -= 1
        } else {
          if (minutes > 0) {
            minutes -= 1
            seconds = 59
          } else {
            if (hours > 0) {
              hours -= 1
              minutes = 59
              seconds = 59
            } else {
              if (days > 0) {
                days -= 1
                hours = 23
                minutes = 59
                seconds = 59
              } else {
                // Timer chegou a zero - rotacionar produtos
                rotateProducts()
                return { days: 0, hours: 0, minutes: 0, seconds: 30 } // Retorna imediatamente
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [rotateProducts])

  // Manipuladores de eventos
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  const handleViewAll = () => {
    navigate('/promocoes')
  }

  const handleProductClick = (productId: number) => {
    navigate(`/produto/${productId}`)
  }

  const handleHighlightClick = () => {
    navigate(`/produto/${highlightOffer.id}`)
  }

  return (
    <S.PromotionsSection>
      <S.Container>
        <S.SectionTitle>Promoções Especiais</S.SectionTitle>
        <S.SectionDescription>
          Aproveite as melhores ofertas em jogos, consoles e acessórios. Preços
          imperdíveis por tempo limitado!
        </S.SectionDescription>

        <S.HighlightBanner>
          <S.BannerContent>
            <S.BannerTitle>{highlightOffer.title}</S.BannerTitle>
            <S.BannerDescription>
              {highlightOffer.description}
            </S.BannerDescription>

            <S.CountdownContainer>
              <S.CountdownLabel>Oferta muda em:</S.CountdownLabel>
              <S.CountdownTime>
                {`${String(timer.days).padStart(2, '0')}:${String(
                  timer.hours
                ).padStart(2, '0')}:${String(timer.minutes).padStart(
                  2,
                  '0'
                )}:${String(timer.seconds).padStart(2, '0')}`}
              </S.CountdownTime>
            </S.CountdownContainer>

            <S.BannerPrice>
              <S.OldPrice>{highlightOffer.oldPrice}</S.OldPrice>
              <S.NewPrice>{highlightOffer.newPrice}</S.NewPrice>
            </S.BannerPrice>

            <S.BannerButton onClick={handleHighlightClick}>
              Comprar Agora
            </S.BannerButton>
          </S.BannerContent>

          <S.BannerImage>
            <img src={highlightOffer.image} alt={highlightOffer.title} />
          </S.BannerImage>
        </S.HighlightBanner>

        <S.PromoTabs>
          <S.PromoTab
            active={activeTab === 'destaques'}
            onClick={() => handleTabChange('destaques')}
          >
            Destaques
          </S.PromoTab>
          <S.PromoTab
            active={activeTab === 'consoles'}
            onClick={() => handleTabChange('consoles')}
          >
            Consoles
          </S.PromoTab>
          <S.PromoTab
            active={activeTab === 'jogos'}
            onClick={() => handleTabChange('jogos')}
          >
            Jogos
          </S.PromoTab>
        </S.PromoTabs>

        {activeTab === 'destaques' && (
          <CardPromotions
            title="Ofertas em Destaque"
            subtitle="Produtos mais vendidos com os melhores preços"
            products={featuredProducts}
            timer={timer}
            onViewAllClick={handleViewAll}
            onProductClick={handleProductClick}
          />
        )}

        {activeTab === 'consoles' && (
          <CardPromotions
            title="Consoles em Promoção"
            subtitle="Os melhores consoles com preços imperdíveis"
            products={consoleProducts}
            onViewAllClick={() => navigate('/categoria/consoles')}
            onProductClick={handleProductClick}
          />
        )}

        {activeTab === 'jogos' && (
          <CardPromotions
            title="Jogos em Oferta"
            subtitle="Amplie sua coleção com os melhores títulos"
            products={gameProducts}
            onViewAllClick={() => navigate('/categoria/jogos')}
            onProductClick={handleProductClick}
          />
        )}
      </S.Container>
    </S.PromotionsSection>
  )
}

export default Promotions
