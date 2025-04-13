import React, { useState, useEffect, useCallback, useRef } from 'react'
import * as S from './styles'
import { upcomingGames } from '../../../data/Home/dataBanner'

const Banner: React.FC = () => {
  // Estados e Refs
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentSlideRef = useRef(currentSlide)
  const totalSlidesRef = useRef(upcomingGames.length)

  // Sincroniza a ref com o estado atual
  useEffect(() => {
    currentSlideRef.current = currentSlide
  }, [currentSlide])

  // Configuração da rotação automática do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlideRef.current + 1) % totalSlidesRef.current
      setCurrentSlide(nextSlide)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Navegação do carrossel
  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const goToPrevSlide = useCallback(() => {
    const newIndex =
      (currentSlide - 1 + upcomingGames.length) % upcomingGames.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide])

  const goToNextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % upcomingGames.length
    goToSlide(newIndex)
  }, [currentSlide, goToSlide])

  // Tratamento de eventos
  const handleReserve = (gameId: number) => {
    console.log(`Jogo #${gameId} reservado!`)
    // Implementar lógica de reserva futuramente
    alert(`Pré-venda do jogo #${gameId} reservada com sucesso!`)
  }

  return (
    <S.BannerContainer>
      {/* Wrapper do carrossel */}
      <S.CarouselWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Slides de jogos */}
        {upcomingGames.map((game) => (
          <S.SlideItem key={game.id}>
            <S.GameImage src={game.imageUrl} alt={game.title} />
            <S.GameOverlay>
              <S.PreReleaseTag>Pré-lançamento</S.PreReleaseTag>
              <S.GameTitle>{game.title}</S.GameTitle>
              <S.ReleaseDate>Lançamento: {game.releaseDate}</S.ReleaseDate>
              <S.PriceContainer>
                <S.Price>R$ {game.price.toFixed(2)}</S.Price>
                <S.ReserveButton onClick={() => handleReserve(game.id)}>
                  Reservar Agora
                </S.ReserveButton>
              </S.PriceContainer>
            </S.GameOverlay>
          </S.SlideItem>
        ))}
      </S.CarouselWrapper>

      {/* Botões de navegação */}
      <S.NavigationButton
        className="prev"
        onClick={goToPrevSlide}
        aria-label="Slide anterior"
      >
        &#8249;
      </S.NavigationButton>

      <S.NavigationButton
        className="next"
        onClick={goToNextSlide}
        aria-label="Próximo slide"
      >
        &#8250;
      </S.NavigationButton>

      {/* Indicadores de slides */}
      <S.DotsContainer>
        {upcomingGames.map((_, idx) => (
          <S.Dot
            key={idx}
            $active={currentSlide === idx}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </S.DotsContainer>
    </S.BannerContainer>
  )
}

export default Banner
