import React, { useState, useEffect } from 'react'
import Card, { CardTheme } from '../../Card'
import * as S from './styles'
import {
  FaStar,
  FaTags,
  FaPlaystation,
  FaXbox,
  FaSteam,
  FaWindows,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'
import { mockGames, Game, ProductsProps } from './utils'

const GameProducts: React.FC<ProductsProps> = ({ categoryFilter }) => {
  const [games, setGames] = useState<Game[]>([])
  const [filteredGames, setFilteredGames] = useState<Game[]>([])

  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8) // Aumentado para 12 jogos por página

  // Dados mockados dos jogos
  useEffect(() => {
    // Simula uma chamada de API para obter os jogos
    setGames(mockGames)
    setFilteredGames(mockGames)
  }, [])

  // Filtrar jogos quando a categoria muda
  useEffect(() => {
    if (categoryFilter === null) {
      setFilteredGames(games)
    } else if (categoryFilter === 9) {
      // Categoria especial para promoções
      const onSaleGames = games.filter(
        (game) =>
          typeof game.price === 'object' &&
          game.price.original > game.price.sale
      )
      setFilteredGames(onSaleGames)
    } else {
      const filtered = games.filter((game) => game.category === categoryFilter)
      setFilteredGames(filtered)
    }
    // Reset para a primeira página quando o filtro muda
    setCurrentPage(1)
  }, [categoryFilter, games])

  // Cálculo dos índices para paginação
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentGames = filteredGames.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage)

  // Funções para navegação entre páginas
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  const renderPlatformIcons = (platforms: string[]) => (
    <S.PlatformsContainer>
      {platforms.map((platform) => {
        let icon
        let theme: CardTheme = 'blue' // Tema padrão

        switch (platform) {
          case 'playstation':
            icon = <FaPlaystation />
            break
          case 'xbox':
            icon = <FaXbox />
            theme = 'green'
            break
          case 'switch':
            icon = <SiNintendoswitch />
            theme = 'pink'
            break
          case 'pc':
            icon = <FaWindows />
            break
          case 'steam':
            icon = <FaSteam />
            break
          default:
            icon = <FaWindows />
        }

        return (
          <S.PlatformIcon key={platform} theme={theme}>
            {icon}
          </S.PlatformIcon>
        )
      })}
    </S.PlatformsContainer>
  )

  const renderFeatures = (features: string[]) => (
    <S.FeaturesContainer>
      {features.map((feature) => (
        <S.FeatureTag key={feature}>{feature}</S.FeatureTag>
      ))}
    </S.FeaturesContainer>
  )

  const renderTopLeftTag = (rating: number) => (
    <S.RatingTag>
      <FaStar />
      {rating}
    </S.RatingTag>
  )

  const renderTopRightTag = (onSale?: boolean) =>
    onSale ? (
      <S.DiscountTag>
        <FaTags /> Promoção
      </S.DiscountTag>
    ) : null

  const handleBuyClick = (id: number) => {
    console.log(`Adicionando jogo ID ${id} ao carrinho`)
    // Aqui implementaria a lógica de adicionar ao carrinho
  }

  return (
    <S.ProductsContainer>
      <S.ProductsHeader>
        <S.ProductsTitle>
          {categoryFilter === null
            ? 'Todos os Jogos'
            : categoryFilter === 9
            ? 'Jogos em Promoção'
            : `Categoria: ${getCategoryName(categoryFilter)}`}
        </S.ProductsTitle>
        <S.ProductsCount>
          Exibindo {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, filteredGames.length)} de{' '}
          {filteredGames.length} jogos
        </S.ProductsCount>
      </S.ProductsHeader>

      {filteredGames.length === 0 ? (
        <S.EmptyStateContainer>
          <S.EmptyStateMessage>
            Nenhum jogo encontrado nesta categoria.
          </S.EmptyStateMessage>
        </S.EmptyStateContainer>
      ) : (
        <>
          <S.ProductsGrid>
            {currentGames.map((game) => {
              // Escolhe tema baseado na categoria
              const theme: CardTheme = getThemeByCategory(game.category)

              return (
                <S.ProductGridItem key={game.id}>
                  <Card
                    id={game.id}
                    title={game.title}
                    description={game.description}
                    price={game.price}
                    image={game.image}
                    theme={theme}
                    topLeftTag={renderTopLeftTag(game.rating)}
                    topRightTag={renderTopRightTag(game.onSale)}
                    featuresList={renderFeatures(game.features)}
                    platformsList={renderPlatformIcons(game.platforms)}
                    onBuyClick={handleBuyClick}
                    actionButtonText="Adicionar ao Carrinho"
                  />
                </S.ProductGridItem>
              )
            })}
          </S.ProductsGrid>

          <S.PaginationContainer>
            <S.PaginationButton
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <FaChevronLeft /> Anterior
            </S.PaginationButton>

            <S.PaginationInfo>
              Página {currentPage} de {totalPages}
            </S.PaginationInfo>

            <S.PaginationButton
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Próximo <FaChevronRight />
            </S.PaginationButton>
          </S.PaginationContainer>
        </>
      )}
    </S.ProductsContainer>
  )
}

// Função auxiliar para mapear categorias para nomes
const getCategoryName = (categoryId: number): string => {
  const categories: Record<number, string> = {
    1: 'Ação',
    2: 'Aventura',
    3: 'RPG',
    4: 'Estratégia',
    5: 'Esportes',
    6: 'Corrida',
    7: 'Puzzle',
    8: 'Indie',
    9: 'Promoções'
  }

  return categories[categoryId] || 'Desconhecido'
}

// Função auxiliar para determinar o tema com base na categoria
const getThemeByCategory = (categoryId: number): CardTheme => {
  switch (categoryId) {
    case 1: // Ação
    case 5: // Esportes
      return 'blue'
    case 2: // Aventura
    case 6: // Corrida
      return 'green'
    case 3: // RPG
    case 7: // Puzzle
      return 'purple'
    case 4: // Estratégia
    case 8: // Indie
    default:
      return 'pink'
  }
}

export default GameProducts
