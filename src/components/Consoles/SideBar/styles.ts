import styled from 'styled-components'

interface SidebarProps {
  isOpen?: boolean
}

export const SidebarOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 90;
  }
`

export const ToggleButton = styled.button`
  display: none;
  position: fixed;
  top: 80px; /* Posicionado logo abaixo do header */
  left: 20px;
  z-index: 95; /* Menor que o header (100), mas maior que o overlay (90) */
  background: #5271ff;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #4060ee;
    transform: translateY(-2px);
  }

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    top: 70px;
  }
`

export const SidebarContainer = styled.div<SidebarProps>`
  width: 280px;
  background: linear-gradient(135deg, #1f2136 0%, #2b2d42 100%);
  padding: 24px 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  height: 100%; // Mudado para 100% para se adequar melhor
  position: fixed; // Mantido fixo
  left: 0;
  top: 0;
  bottom: 0; // Adicionado para garantir que chegue até o final
  display: flex;
  flex-direction: column;
  overflow-y: auto; // Alterado para auto para permitir rolagem se o conteúdo for grande
  overflow-x: hidden;
  transition: all 0.3s ease;
  padding-top: 104px; // 24px (padding original) + 80px (altura do header)
  z-index: 90;

  @media (max-width: 768px) {
    left: ${(props) => (props.isOpen ? '0' : '-320px')};
    width: 260px;
    padding-top: 84px; // 24px (padding original) + 60px (altura do header mobile)
    z-index: 95;
  }
`

export const SidebarTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

export const CategoriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`

export const CategoryItem = styled.li<{ isActive?: boolean }>`
  margin-bottom: 8px;
`

export const CategoryButton = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ isActive }) =>
    isActive ? 'rgba(82, 113, 255, 0.3)' : 'transparent'};
  color: ${({ isActive }) => (isActive ? '#5271ff' : '#e0e0e0')};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  text-align: left;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${({ isActive }) =>
      isActive ? 'rgba(82, 113, 255, 0.3)' : 'rgba(255, 255, 255, 0.05)'};
    color: ${({ isActive }) => (isActive ? '#5271ff' : '#fff')};
  }
`

export const CategoryIcon = styled.div`
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  opacity: 0.9;
`

export const CategoryCount = styled.span`
  margin-left: auto;
  background: rgba(255, 255, 255, 0.1);
  color: #b8b9c3;
  font-size: 0.8rem;
  border-radius: 12px;
  padding: 2px 8px;
  min-width: 24px;
  text-align: center;
`

export const SidebarFooter = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: #8c8d98;
  text-align: center;
`
