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
