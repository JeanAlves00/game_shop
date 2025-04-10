import styled from 'styled-components'
import { NavLink } from './navigation'
import { SearchForm } from './searchForm'

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.background.secondary}, ${theme.colors.background.main})`};
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
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
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
