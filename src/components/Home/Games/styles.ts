import styled from 'styled-components'

export const GamesSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin: 40px auto;
  }

  @media (max-width: 480px) {
    margin: 30px auto;
    padding: 0 15px;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 16px;
  background: ${({ theme }) => theme.colors.border.highlight};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.colors.border.highlight};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 14px;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -8px;
    }
  }
`

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 700px;
  margin: 20px auto 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: 15px auto 0;
  }
`

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 30px;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const ViewMoreButton = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  font-weight: bold;
  padding: 12px 30px;
  border-radius: 30px;
  margin: 0 auto;
  display: block;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 25px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
    padding: 10px 20px;
  }
`

export const AnimatedCard = styled.div`
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  display: flex;
  justify-content: center;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
  &:nth-child(6) {
    animation-delay: 0.6s;
  }

  @media (max-width: 767px) {
    &:nth-child(n + 5) {
      animation-delay: 0.3s;
    }
  }

  @media (max-width: 480px) {
    &:nth-child(n + 3) {
      animation-delay: 0.2s;
    }
  }
`
