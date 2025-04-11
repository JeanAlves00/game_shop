import styled from 'styled-components'

export const BannerContainer = styled.div`
  padding-top: 50px;
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  height: 85vh;
  margin: 0;
  border-radius: 0;
  z-index: 1;

  @media (max-width: 1200px) {
    height: 75vh;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 50vh;
  }
`

export const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
  width: 100%;
`

export const SlideItem = styled.div`
  flex: 0 0 100%;
  position: relative;
  height: 100%;
`

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const GameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
  padding: 3rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50%;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 2rem;
    height: 60%;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    height: 70%;
  }
`

export const PreReleaseTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: inline-block;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    margin-bottom: 0.7rem;
  }
`

export const GameTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 0.8rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`

export const ReleaseDate = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    margin-bottom: 1rem;
    gap: 1rem;
  }
`

export const Price = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

export const ReserveButton = styled.button`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.secondary}dd
  );
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(247, 37, 133, 0.5);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.8rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.4rem;
    font-size: 0.9rem;
  }
`

export const NavigationButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  color: white;
  font-size: 2rem;
  opacity: 0.7;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    opacity: 1;
    transform: translateY(-50%) scale(1.05);
  }

  &.prev {
    left: 25px;
  }

  &.next {
    right: 25px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;

    &.prev {
      left: 15px;
    }

    &.next {
      right: 15px;
    }
  }
`

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  gap: 10px;
  z-index: 2;

  @media (max-width: 480px) {
    bottom: 20px;
    right: 15px;
    gap: 8px;
  }
`

export const Dot = styled.div<{ $active: boolean }>`
  width: ${(props) => (props.$active ? '14px' : '10px')};
  height: ${(props) => (props.$active ? '14px' : '10px')};
  background-color: ${(props) =>
    props.$active ? '#f72585' : 'rgba(255, 255, 255, 0.5)'};
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.$active ? '#f72585' : 'rgba(255, 255, 255, 0.8)'};
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: ${(props) => (props.$active ? '12px' : '8px')};
    height: ${(props) => (props.$active ? '12px' : '8px')};
  }
`
