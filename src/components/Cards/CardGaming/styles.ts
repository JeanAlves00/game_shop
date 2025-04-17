import styled from 'styled-components'

export const CardContainer = styled.div<{ $isHovered: boolean }>`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.background.gradient};
  box-shadow: ${({ $isHovered, theme }) =>
    $isHovered
      ? `0 10px 25px ${theme.colors.secondary}40`
      : '0 5px 15px rgba(0, 0, 0, 0.2)'};
  transform: ${({ $isHovered }) =>
    $isHovered ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)'};
  cursor: pointer;

  @media (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 50%);
`

export const RatingBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ffd700;
  color: #333;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;

  @media (max-width: 480px) {
    padding: 3px 8px;
    font-size: 0.85rem;
  }
`

export const RatingStar = styled.span`
  margin-right: 4px;
`

export const TitleArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  color: white;
  z-index: 2;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const GameTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 4px;
  color: white;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 2px;
  }
`

export const DeveloperName = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`

export const ContentContainer = styled.div`
  padding: 16px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    gap: 6px;
    margin-bottom: 12px;
  }
`

export const Tag = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => `${theme.colors.secondary}20`};
  border: 1px solid ${({ theme }) => `${theme.colors.secondary}30`};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 500;

  @media (max-width: 480px) {
    padding: 3px 8px;
    font-size: 0.7rem;
  }
`

export const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 350px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceLabel = styled.p`
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 2px;
  }
`

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

export const AddToCartButton = styled.button<{ $isHovered: boolean }>`
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ $isHovered, theme }) =>
    $isHovered
      ? `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.primary})`
      : theme.colors.secondary};
  color: white;
  box-shadow: ${({ $isHovered, theme }) =>
    $isHovered ? `0 4px 12px ${theme.colors.secondary}50` : 'none'};

  @media (max-width: 480px) {
    padding: 8px 14px;
    font-size: 0.9rem;
  }

  @media (max-width: 350px) {
    width: 100%;
  }
`

export const DiscountTag = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #ff4a4a;
  color: white;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.85rem;
    top: 10px;
    left: 10px;
  }
`

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  margin-right: 8px;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`
