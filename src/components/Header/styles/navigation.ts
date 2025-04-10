import styled from 'styled-components'

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  flex: 1;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 1110px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.highlight};

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 970px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.4rem 0;
  }
`
