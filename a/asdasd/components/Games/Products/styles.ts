import styled from 'styled-components'
import { CardTheme } from '../../Card'

export const ProductsContainer = styled.div`
  flex: 1;
  padding: 32px;
  padding-left: 48px;
  padding-top: 140px;
  margin-left: 320px;
  width: calc(100% - 320px);
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: calc(100% - 240px);
  }

  @media (max-width: 768px) {
    padding: 24px;
    padding-top: 160px;
    margin-left: 0;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 16px;
    padding-top: 140px;
  }
`

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  background-color: #121212;
  padding: 16px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px; // Aumentado de 8px para 12px
    top: 120px; // Ajustado para ficar abaixo do header mobile (60px) e do botão de menu (48px + margem)
    left: 24px; // Alinhado com o padding em telas pequenas
    width: calc(100% - 48px); // Ajustar largura considerando paddings
    padding: 12px 0; // Menor padding em telas pequenas
  }
`

export const ProductsTitle = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
`

export const ProductsCount = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px; // Aumentado de 24px para 32px para dar mais espaço entre os cards
  margin-bottom: 32px; // Adiciona um espaço abaixo do grid, antes da paginação

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const ProductGridItem = styled.div`
  height: 100%;
`

export const PlatformsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`

export const PlatformIcon = styled.div<{ theme: CardTheme }>`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => {
    switch (theme) {
      case 'green':
        return '#10b981'
      case 'blue':
        return '#3b82f6'
      case 'purple':
        return '#a855f7'
      case 'pink':
        return '#4cc9f0'
      default:
        return '#3b82f6'
    }
  }};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => {
      switch (theme) {
        case 'green':
          return 'rgba(16, 185, 129, 0.2)'
        case 'blue':
          return 'rgba(59, 130, 246, 0.2)'
        case 'purple':
          return 'rgba(168, 85, 247, 0.2)'
        case 'pink':
          return 'rgba(76, 201, 240, 0.2)'
        default:
          return 'rgba(59, 130, 246, 0.2)'
      }
    }};
    transform: translateY(-2px);
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
`

export const FeatureTag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 4px 10px;
  font-size: 0.75rem;
  display: inline-flex;
  align-items: center;
`

export const RatingTag = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fbbf24;
  font-weight: bold;

  svg {
    font-size: 0.9rem;
  }
`

export const DiscountTag = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #10b981;
  font-weight: bold;

  svg {
    font-size: 0.9rem;
  }
`

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
`

export const EmptyStateMessage = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  margin: 24px 0;
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  padding: 16px 0;
`

export const PaginationButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: ${({ disabled }) =>
    disabled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
  color: ${({ disabled }) => (disabled ? 'rgba(255, 255, 255, 0.5)' : '#fff')};
  font-size: 0.9rem;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

export const PaginationInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`
