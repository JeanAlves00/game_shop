import React, { useState, useEffect, useCallback, useRef } from 'react'
import * as S from './styles'

interface GameData {
  id: number
  title: string
  imageUrl: string
  price: number
  releaseDate: string
}

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentSlideRef = useRef(currentSlide)
  const totalSlidesRef = useRef(0)

  // Dados de jogos em pré-lançamento
  const upcomingGames: GameData[] = [
    {
      id: 1,
      title: 'JUDAS',
      imageUrl:
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/07/judas-protagonist-with-logo.jpg',
      price: 299.9,
      releaseDate: '15/12/2025'
    },
    {
      id: 2,
      title: 'Grand Theft Auto VI',
      imageUrl:
        'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
      price: 349.9,
      releaseDate: '10/09/2025'
    },
    {
      id: 3,
      title: 'Borderlands 4',
      imageUrl:
        'https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/09/borderlands-zane-vault-hunter-in-front-of-legendary-loot-with-borderlands-4-logo-gamerant-custom-image.jpg',
      price: 349.9,
      releaseDate: '22/06/2025'
    }
  ]

  // Atualiza a ref quando currentSlide muda
  useEffect(() => {
    currentSlideRef.current = currentSlide
  }, [currentSlide])

  // Inicializa a contagem total de slides
  useEffect(() => {
    totalSlidesRef.current = upcomingGames.length
  }, [upcomingGames.length])

  // Configuração do carousel
  useEffect(() => {
    // Rotação automática com intervalo
    const interval = setInterval(() => {
      const nextSlide =
        currentSlideRef.current === totalSlidesRef.current - 1
          ? 0
          : currentSlideRef.current + 1
      setCurrentSlide(nextSlide)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  const goToPrevSlide = useCallback(() => {
    const newIndex =
      currentSlide === 0 ? upcomingGames.length - 1 : currentSlide - 1
    goToSlide(newIndex)
  }, [currentSlide, upcomingGames.length, goToSlide])

  const goToNextSlide = useCallback(() => {
    const newIndex =
      currentSlide === upcomingGames.length - 1 ? 0 : currentSlide + 1
    goToSlide(newIndex)
  }, [currentSlide, upcomingGames.length, goToSlide])

  const handleReserve = (gameId: number) => {
    console.log(`Jogo #${gameId} reservado!`)
    // Aqui você implementaria a lógica de reserva
    alert(`Pré-venda do jogo #${gameId} reservada com sucesso!`)
  }

  return (
    <S.BannerContainer>
      <S.CarouselWrapper
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
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

      <S.DotsContainer>
        {upcomingGames.map((_, idx) => (
          <S.Dot
            key={idx}
            active={currentSlide === idx}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </S.DotsContainer>
    </S.BannerContainer>
  )
}

export default Banner
