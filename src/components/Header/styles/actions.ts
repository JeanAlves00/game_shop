import styled from 'styled-components'

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
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
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
  background-color: ${({ theme }) => theme.colors.secondary};
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

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
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
    background-color: ${({ theme }) => theme.colors.button.hover};
  }

  background-color: ${(props) =>
    props.$isOpen ? props.theme.colors.button.hover : 'transparent'};

  span {
    position: absolute;
    width: 22px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text.primary};
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
