import styled from 'styled-components'

export const AccessoriesSection = styled.section`
  padding: 3rem 2rem;
  background: linear-gradient(to bottom, #4a1d96, #6d28d9);
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
      background-color: #a855f7;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
  justify-content: center;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    max-width: 350px;
    gap: 1.5rem;
  }
`

export const AccessoryCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid rgba(168, 85, 247, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: rgba(168, 85, 247, 0.3);
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

  ${AccessoryCard}:hover & {
    transform: scale(1.05);
  }
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

export const CompatibilityTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #a855f7;
  font-weight: bold;
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  z-index: 2;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`

export const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to bottom,
    rgba(74, 29, 150, 0.8),
    rgba(109, 40, 217, 0.9)
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

export const SpecsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const SpecItem = styled.span`
  background-color: rgba(168, 85, 247, 0.2);
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

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.7rem;
`

export const Price = styled.span`
  color: #c4b5fd;
  font-size: 1.5rem;
  font-weight: bold;
`

export const BuyButton = styled.button`
  background-color: #a855f7;
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
    background-color: #9333ea;
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

export const ViewAllButton = styled.button`
  background: transparent;
  border: 2px solid #a855f7;
  color: #a855f7;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: rgba(168, 85, 247, 0.1);
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
