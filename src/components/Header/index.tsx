import React, { useState, useEffect, useRef } from 'react'
import GameShopLogo from '../../assets/images/logo/logo.svg'
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaMoon,
  FaSun
} from 'react-icons/fa'

import * as S from './styles'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import { useTheme } from '../../contexts/ThemeContext'

// Componente para o Logo
const Logo: React.FC = () => {
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = logoRef.current
    if (img) {
      img.onload = () => img.classList.add('loaded')
      img.onerror = () => console.error('Erro ao carregar o logo SVG')
    }
  }, [])

  return (
    <S.Logo>
      <img ref={logoRef} src={GameShopLogo} alt="Game Shop Logo" />
    </S.Logo>
  )
}

// Componente para o Menu de Navegação
const NavMenu: React.FC = () => (
  <S.NavMenu>
    <S.NavLink href="/">Home</S.NavLink>
    <S.NavLink href="/jogos">Jogos</S.NavLink>
    <S.NavLink href="/consoles">Consoles</S.NavLink>
    <S.NavLink href="/acessorios">Acessórios</S.NavLink>
    <S.NavLink href="/promocoes">Promoções</S.NavLink>
  </S.NavMenu>
)

// Componente para a Barra de Busca
const SearchForm: React.FC<{ className?: string }> = ({ className }) => (
  <S.SearchForm className={className}>
    <input type="text" placeholder="Buscar..." />
    <button type="submit" aria-label="Buscar">
      <FaSearch />
    </button>
  </S.SearchForm>
)

// Componente para o Menu Mobile
const MobileMenu: React.FC<{
  isOpen: boolean
  menuRef: React.RefObject<HTMLDivElement | null>
}> = ({ isOpen, menuRef }) => (
  <S.MobileMenu $isOpen={isOpen} className="mobile-menu" ref={menuRef}>
    <SearchForm className="mobile-search" />
    <S.NavLink href="/">Home</S.NavLink>
    <S.NavLink href="/jogos">Jogos</S.NavLink>
    <S.NavLink href="/consoles">Consoles</S.NavLink>
    <S.NavLink href="/acessorios">Acessórios</S.NavLink>
    <S.NavLink href="/promocoes">Promoções</S.NavLink>
  </S.MobileMenu>
)

// Componente para o botão de alternar tema
const ThemeToggleButton: React.FC = () => {
  const { toggleTheme, isDarkTheme } = useTheme()

  return (
    <S.IconButton
      onClick={toggleTheme}
      aria-label={
        isDarkTheme ? 'Mudar para tema claro' : 'Mudar para tema escuro'
      }
    >
      {isDarkTheme ? <FaSun /> : <FaMoon />}
    </S.IconButton>
  )
}

// Componente principal Header
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Hook personalizado para fechar o menu quando clicar fora
  useOutsideClick({
    refs: [
      mobileMenuRef as React.RefObject<HTMLElement>,
      menuButtonRef as React.RefObject<HTMLElement>
    ],
    isActive: mobileMenuOpen,
    callback: () => setMobileMenuOpen(false)
  })

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState)
  }

  return (
    <S.HeaderContainer>
      <Logo />
      <NavMenu />

      <S.ActionsContainer>
        <SearchForm />

        <ThemeToggleButton />

        <S.IconButton aria-label="Lista de desejos">
          <FaHeart />
        </S.IconButton>

        <S.IconButton aria-label="Carrinho de compras">
          <FaShoppingCart />
          <S.CartCount>3</S.CartCount>
        </S.IconButton>

        <S.IconButton aria-label="Minha conta">
          <FaUser />
        </S.IconButton>

        <S.MobileMenuButton
          ref={menuButtonRef}
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          $isOpen={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.MobileMenuButton>
      </S.ActionsContainer>

      <MobileMenu isOpen={mobileMenuOpen} menuRef={mobileMenuRef} />
    </S.HeaderContainer>
  )
}

export default Header
