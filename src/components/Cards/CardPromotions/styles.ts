import styled from 'styled-components'

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Roboto', sans-serif;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.colors.border.highlight};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 20px;
`

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 20px auto;
`

export const TimerBox = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 8px;
  border-radius: 8px;
  width: 60px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  span:first-child {
    font-size: 24px;
    font-weight: bold;
    display: block;
  }

  span:last-child {
    font-size: 12px;
    text-transform: uppercase;
  }
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`

export const ProductCard = styled.div`
  background: ${({ theme }) => theme.colors.background.gradient};
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  }
`

export const DiscountTag = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #ffd700;
  color: #333;
  padding: 5px 10px;
  font-weight: bold;
  border-radius: 20px;
  transform: rotate(5deg);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 2;
`

export const ProductImage = styled.div`
  height: 180px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  img {
    max-height: 150px;
    max-width: 100%;
    object-fit: contain;
  }
`

export const ProductContent = styled.div`
  padding: 20px;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  height: 44px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 15px;
  height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 16px;
  margin-right: 10px;
`

export const NewPrice = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const FeaturesList = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
`

export const Feature = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};

  span:first-child {
    margin-right: 5px;
  }
`

export const BonusTag = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 13px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.text.highlight};
`

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: uppercase;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`

export const ViewAllButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 30px;
  margin: 40px auto 0;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`
