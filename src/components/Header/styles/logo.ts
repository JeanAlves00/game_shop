import styled from 'styled-components'

export const Logo = styled.div`
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
    filter: ${({ theme }) =>
      theme.name === 'dark' ? 'brightness(0) invert(1)' : 'none'};
  }

  @media (max-width: 900px) {
    width: 100px;
    height: 45px;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 40px;
  }

  @media (max-width: 600px) {
    width: 75px;
    height: 35px;
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 30px;
  }
`
