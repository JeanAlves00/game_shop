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
        'https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/12/QooApp_Judas.jpg',
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
        'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpybMLqWjYG5sehOOzb5-cGMm3tn_285vTeXDIN31efeBWg73pJ2yb5tKWahnQBqtUW8EwnW1Aq-o-7NC5FGFjK9XDDz0Km1WgJXBUsSq_gWr6mDCvyZ5QeW_M38daTZaA_u0OmNvdahCPyIyMe5itTxsQCDLnZ70HMPUppAkfe-sZqWBMgzCh3Bv6bpo/s1920/12230012467357.jpg',
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
            $active={currentSlide === idx}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </S.DotsContainer>
    </S.BannerContainer>
  )
}

export default Banner
