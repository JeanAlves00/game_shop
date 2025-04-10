import styled from 'styled-components'
import { CardTheme } from './index'

const getThemeColors = (theme: CardTheme) => {
  const themes = {
    green: {
      primary: '#10b981',
      secondary: '#059669',
      background:
        'linear-gradient(to bottom, rgba(6, 78, 59, 0.8), rgba(6, 95, 70, 0.9))',
      border: 'rgba(16, 185, 129, 0.1)',
      hoverBorder: 'rgba(16, 185, 129, 0.3)',
      text: '#fff',
      priceColor: '#10b981'
    },
    blue: {
      primary: '#3b82f6',
      secondary: '#2563eb',
      background:
        'linear-gradient(to bottom, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))',
      border: 'rgba(59, 130, 246, 0.1)',
      hoverBorder: 'rgba(59, 130, 246, 0.3)',
      text: '#fff',
      priceColor: '#3b82f6'
    },
    purple: {
      primary: '#a855f7',
      secondary: '#9333ea',
      background:
        'linear-gradient(to bottom, rgba(74, 29, 150, 0.8), rgba(109, 40, 217, 0.9))',
      border: 'rgba(168, 85, 247, 0.1)',
      hoverBorder: 'rgba(168, 85, 247, 0.3)',
      text: '#fff',
      priceColor: '#c4b5fd'
    },
    pink: {
      primary: '#f72585',
      secondary: '#b5179e',
      background:
        'linear-gradient(to bottom, rgba(26, 26, 46, 0.8), rgba(22, 33, 62, 0.9))',
      border: 'rgba(76, 201, 240, 0.1)',
      hoverBorder: 'rgba(76, 201, 240, 0.3)',
      text: '#fff',
      priceColor: '#4cc9f0'
    }
  }

  return themes[theme]
}

export const CardWrapper = styled.div<{ theme: CardTheme }>`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid ${({ theme }) => getThemeColors(theme).border};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: ${({ theme }) => getThemeColors(theme).hoverBorder};
  }
`

export const CardImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 200px;

  @media (max-width: 768px) {
    height: 180px;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.05);
  }
`

export const TopLeftTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-weight: 500;
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  z-index: 2;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const TopRightTag = styled.div<{ theme: CardTheme }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => getThemeColors(theme).primary};
  font-weight: bold;
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  z-index: 2;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const CardContent = styled.div<{ theme: CardTheme }>`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => getThemeColors(theme).background};
`

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
  line-height: 1.3;
`

export const CardDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin: 0 0 1rem;
  line-height: 1.4;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.7rem;
`

export const Price = styled.span<{ theme: CardTheme }>`
  color: ${({ theme }) => getThemeColors(theme).priceColor};
  font-size: 1.5rem;
  font-weight: bold;
`

export const OriginalPrice = styled.span<{ theme: CardTheme }>`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  font-size: 0.9rem;
`

export const SalePrice = styled.span<{ theme: CardTheme }>`
  color: ${({ theme }) => getThemeColors(theme).priceColor};
  font-size: 1.5rem;
  font-weight: bold;
`

export const BuyButton = styled.button<{ theme: CardTheme }>`
  background-color: ${({ theme }) => getThemeColors(theme).primary};
  border: none;
  color: #fff;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => getThemeColors(theme).secondary};
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
  }
`

// Elementos adicionais que podem ser usados nos cards específicos
export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const FeatureItem = styled.span<{ theme: CardTheme }>`
  background-color: ${({ theme }) =>
    `rgba(${
      theme === 'green'
        ? '16, 185, 129'
        : theme === 'blue'
        ? '59, 130, 246'
        : theme === 'purple'
        ? '168, 85, 247'
        : '247, 37, 133'
    }, 0.2)`};
  color: #fff;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  svg {
    font-size: 0.8rem;
  }
`

export const PlatformsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
`

export const PlatformItem = styled.div<{ theme: CardTheme }>`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => getThemeColors(theme).primary};
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      `rgba(${
        theme === 'green'
          ? '16, 185, 129'
          : theme === 'blue'
          ? '59, 130, 246'
          : theme === 'purple'
          ? '168, 85, 247'
          : '76, 201, 240'
      }, 0.2)`};
    transform: translateY(-2px);
  }
`
