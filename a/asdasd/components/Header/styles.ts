import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to right, #1a1a2e, #16213e);
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, #4cc9f0, #f72585);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
  }
`

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
    filter: brightness(0) invert(1);
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

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  flex: 1;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 900px) {
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
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
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
    background-color: #4cc9f0;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #4cc9f0;

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.4rem 0;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0;
  margin-left: auto;

  @media (max-width: 900px) {
    gap: 1rem;
  }

  @media (max-width: 600px) {
    gap: 0.8rem;
    margin-left: auto;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }

  @media (max-width: 380px) {
    gap: 0.5rem;
  }
`

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.3rem;

  &:hover {
    color: #f72585;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    padding: 0.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.15rem;
  }

  @media (max-width: 380px) {
    font-size: 0.9rem;
  }
`

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #f72585;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    font-size: 0.7rem;
    right: -6px;
    top: -6px;
  }

  @media (max-width: 380px) {
    width: 14px;
    height: 14px;
    font-size: 0.65rem;
    right: -4px;
    top: -4px;
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.3rem 0.8rem;

  input {
    background: transparent;
    border: none;
    color: #fff;
    outline: none;
    padding: 0.3rem;
    width: 90%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
    padding: 0.3rem;

    .mobile-menu & {
      display: flex;
      width: 100%;
      margin: 0.5rem 0 1rem;

      input {
        padding: 0.5rem;
      }
    }
  }
`

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  background-color: ${(props) =>
    props.$isOpen ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};

  span {
    position: absolute;
    width: 22px;
    height: 2px;
    background-color: #fff;
    border-radius: 3px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: translateY(${(props) => (props.$isOpen ? '0' : '-7px')})
        rotate(${(props) => (props.$isOpen ? '45deg' : '0')});
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isOpen ? '0' : '1')};
      transform: translateX(${(props) => (props.$isOpen ? '-10px' : '0')});
    }

    &:nth-child(3) {
      transform: translateY(${(props) => (props.$isOpen ? '0' : '7px')})
        rotate(${(props) => (props.$isOpen ? '-45deg' : '0')});
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 380px) {
    width: 36px;
    height: 36px;

    span {
      width: 18px;
    }
  }
`

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, #16213e, #1a1a2e);
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  max-height: ${(props) => (props.$isOpen ? 'calc(100vh - 60px)' : '0')};
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  overflow: hidden;
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
  padding: ${(props) => (props.$isOpen ? '1rem' : '0')};
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  overflow-y: auto;

  &.mobile-menu {
    display: flex;
  }

  ${NavLink} {
    padding: 1rem 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transform: translateY(${(props) => (props.$isOpen ? '0' : '-10px')});
    opacity: ${(props) => (props.$isOpen ? '1' : '0')};
    transition: all 0.3s ease;
    transition-delay: ${(props) => (props.$isOpen ? '0.1s' : '0s')};
    font-size: 1.1rem;
    text-align: center;

    &:nth-child(n + 2) {
      transition-delay: ${(props) =>
        props.$isOpen ? `${0.1 + 0.05 * Number(props.$isOpen)}s` : '0s'};
    }

    &:last-child {
      border-bottom: none;
    }
  }

  ${SearchForm} {
    margin: 0.5rem 0 1rem;
    width: 100%;
    opacity: ${(props) => (props.$isOpen ? '1' : '0')};
    transform: translateY(${(props) => (props.$isOpen ? '0' : '-10px')});
    transition: all 0.3s ease;
    transition-delay: ${(props) => (props.$isOpen ? '0.05s' : '0s')};

    input {
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    top: 55px;
    max-height: ${(props) => (props.$isOpen ? 'calc(100vh - 55px)' : '0')};

    ${NavLink} {
      padding: 0.9rem 0.5rem;
      font-size: 1rem;
    }
  }
`
