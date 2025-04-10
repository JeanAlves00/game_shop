import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Card, { CardTheme } from '../../Card'
import { FaHdd, FaTags, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { mockConsoles, Console, ProductsProps } from './utils'
import {
  renderManufacturerIcon,
  renderFeatureIcon
} from '../../../utils/iconUtils'
import { FeaturesContainer, FeatureItem } from '../../Card/styles'

const ConsoleProducts: React.FC<ProductsProps> = ({ categoryFilter }) => {
  const [consoles, setConsoles] = useState<Console[]>([])
  const [filteredConsoles, setFilteredConsoles] = useState<Console[]>([])

  // Estados para paginação
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)

  // Dados mockados dos consoles
  useEffect(() => {
    // Simula uma chamada de API para obter os consoles
    setConsoles(mockConsoles)
    setFilteredConsoles(mockConsoles)
  }, [])

  // Filtrar consoles quando a categoria muda
  useEffect(() => {
    if (categoryFilter === null) {
      setFilteredConsoles(consoles)
    } else if (categoryFilter === 5) {
      // Categoria especial para promoções
      const onSaleConsoles = consoles.filter(
        (console) =>
          typeof console.price === 'object' &&
          console.price.original !== undefined &&
          console.price.sale !== undefined &&
          console.price.original > console.price.sale
      )
      setFilteredConsoles(onSaleConsoles)
    } else {
      const filtered = consoles.filter(
        (console) => console.category === categoryFilter
      )
      setFilteredConsoles(filtered)
    }
    // Reset para a primeira página quando o filtro muda
    setCurrentPage(1)
  }, [categoryFilter, consoles])

  // Cálculo dos índices para paginação
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentConsoles = filteredConsoles.slice(
    indexOfFirstItem,
    indexOfLastItem
  )
  const totalPages = Math.ceil(filteredConsoles.length / itemsPerPage)

  // Funções para navegação entre páginas
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  const renderTopLeftTag = (manufacturer: string) => (
    <S.ManufacturerTag>
      {renderManufacturerIcon(manufacturer)} {manufacturer}
    </S.ManufacturerTag>
  )

  const renderTopRightTag = (storage: string, isOnSale: boolean) => {
    if (isOnSale) {
      return (
        <S.DiscountTag>
          <FaTags /> Promoção
        </S.DiscountTag>
      )
    }
    return (
      <S.StorageTag>
        <FaHdd /> {storage}
      </S.StorageTag>
    )
  }

  const renderFeatures = (features: string[]) => (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureItem key={index} theme={getThemeByManufacturer(feature)}>
          {renderFeatureIcon(feature)} {feature}
        </FeatureItem>
      ))}
    </FeaturesContainer>
  )

  const handleBuyClick = (id: number) => {
    console.log(`Adicionando console ID ${id} ao carrinho`)
    // Implementação futura: lógica de adicionar ao carrinho
  }

  return (
    <S.ProductsContainer>
      <S.ProductsHeader>
        <S.ProductsTitle>
          {categoryFilter === null
            ? 'Todos os Consoles'
            : categoryFilter === 5
            ? 'Consoles em Promoção'
            : `${getCategoryName(categoryFilter)}`}
        </S.ProductsTitle>
        <S.ProductsCount>
          Exibindo {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, filteredConsoles.length)} de{' '}
          {filteredConsoles.length} consoles
        </S.ProductsCount>
      </S.ProductsHeader>

      {filteredConsoles.length === 0 ? (
        <S.EmptyStateContainer>
          <S.EmptyStateMessage>
            Nenhum console encontrado nesta categoria.
          </S.EmptyStateMessage>
        </S.EmptyStateContainer>
      ) : (
        <>
          <S.ProductsGrid>
            {currentConsoles.map((consoleItem) => {
              const isOnSale =
                typeof consoleItem.price === 'object' &&
                consoleItem.price.original !== undefined &&
                consoleItem.price.sale !== undefined

              // Determina o tema baseado no fabricante
              const theme = getThemeByManufacturer(consoleItem.manufacturer)

              return (
                <S.ProductGridItem key={consoleItem.id}>
                  <Card
                    id={consoleItem.id}
                    image={consoleItem.image}
                    title={consoleItem.title}
                    description={consoleItem.description}
                    price={consoleItem.price}
                    topLeftTag={renderTopLeftTag(consoleItem.manufacturer)}
                    topRightTag={renderTopRightTag(
                      consoleItem.storage,
                      isOnSale
                    )}
                    featuresList={renderFeatures(consoleItem.features)}
                    theme={theme}
                    actionButtonText="Adicionar ao Carrinho"
                    onBuyClick={handleBuyClick}
                  />
                </S.ProductGridItem>
              )
            })}
          </S.ProductsGrid>

          {totalPages > 1 && (
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
          )}
        </>
      )}
    </S.ProductsContainer>
  )
}

// Função auxiliar para mapear categorias para nomes
const getCategoryName = (categoryId: number): string => {
  const categories: Record<number, string> = {
    1: 'PlayStation',
    2: 'Xbox',
    3: 'Nintendo',
    4: 'Handheld',
    5: 'Promoções'
  }

  return categories[categoryId] || 'Todos os Consoles'
}

// Função auxiliar para determinar o tema com base no fabricante
const getThemeByManufacturer = (manufacturer: string): CardTheme => {
  if (manufacturer.includes('Sony') || manufacturer.includes('PlayStation')) {
    return 'blue'
  } else if (
    manufacturer.includes('Microsoft') ||
    manufacturer.includes('Xbox')
  ) {
    return 'green'
  } else if (
    manufacturer.includes('Nintendo') ||
    manufacturer.includes('Switch')
  ) {
    return 'pink'
  } else {
    return 'purple'
  }
}

export default ConsoleProducts
