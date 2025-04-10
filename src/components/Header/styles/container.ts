import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background.gradient};
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.border.highlight};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    flex-wrap: wrap;
  }
`
