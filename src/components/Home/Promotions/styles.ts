import styled from 'styled-components'

export const PromotionsSection = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(to bottom, #16213e, #1a1a2e);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  h2 {
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 60px;
      height: 3px;
      background-color: #f72585;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    margin-top: 1.2rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 350px;
    gap: 1.5rem;
  }
`

export const PromotionCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(76, 201, 240, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(76, 201, 240, 0.3);
  }
`

export const CardImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 180px;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${PromotionCard}:hover & {
    transform: scale(1.05);
  }
`

export const DiscountTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #f72585;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  z-index: 2;
  font-size: 0.9rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

export const CategoryTag = styled.div`
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
`

export const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(26, 26, 46, 0.8),
    rgba(22, 33, 62, 0.9)
  );
`

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin: 0 0 0.5rem;
  font-weight: 600;
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

export const OriginalPrice = styled.span`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  font-size: 0.9rem;
`

export const SalePrice = styled.span`
  color: #4cc9f0;
  font-size: 1.5rem;
  font-weight: bold;
`

export const BuyButton = styled.button`
  background-color: #f72585;
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
    background-color: #b5179e;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
  }
`

export const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  box-sizing: border-box;
`

export const ViewMoreButton = styled.button`
  background: transparent;
  border: 2px solid #4cc9f0;
  color: #4cc9f0;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(76, 201, 240, 0.1);
    transform: translateX(5px);
  }

  svg {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`

export const PlatformsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
`

export const PlatformItem = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4cc9f0;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(76, 201, 240, 0.2);
    transform: translateY(-2px);
  }
`
