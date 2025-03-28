import React, { useState, useEffect, useRef } from 'react'
import GameShopLogo from '../../assets/images/logo/logo.svg'
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'

import * as S from './styles'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const logoRef = useRef<HTMLImageElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  // Garantir que o SVG seja carregado corretamente
  useEffect(() => {
    const img = logoRef.current
    if (img) {
      // Garante que o SVG seja carregado corretamente
      img.onload = () => {
        // Adiciona classe quando o logo é carregado para facilitar animação
        img.classList.add('loaded')
      }

      // Tratamento de erro de carregamento do SVG
      img.onerror = () => {
        console.error('Erro ao carregar o logo SVG')
      }
    }
  }, [])

  // Fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verificar se o clique foi fora do menu E fora do botão do menu
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState)
  }

  return (
    <S.HeaderContainer>
      <S.Logo>
        <img ref={logoRef} src={GameShopLogo} alt="Game Shop Logo" />
      </S.Logo>

      {/* Menu visível em telas maiores */}
      <S.NavMenu>
        <S.NavLink href="/">Home</S.NavLink>
        <S.NavLink href="/jogos">Jogos</S.NavLink>
        <S.NavLink href="/consoles">Consoles</S.NavLink>
        <S.NavLink href="/acessorios">Acessórios</S.NavLink>
        <S.NavLink href="/promocoes">Promoções</S.NavLink>
      </S.NavMenu>

      <S.ActionsContainer>
        <S.SearchForm>
          <input type="text" placeholder="Buscar..." />
          <button type="submit" aria-label="Buscar">
            <FaSearch />
          </button>
        </S.SearchForm>

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
          isOpen={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.MobileMenuButton>
      </S.ActionsContainer>

      <S.MobileMenu
        isOpen={mobileMenuOpen}
        className="mobile-menu"
        ref={mobileMenuRef}
      >
        <S.SearchForm className="mobile-search">
          <input type="text" placeholder="Buscar..." />
          <button type="submit" aria-label="Buscar">
            <FaSearch />
          </button>
        </S.SearchForm>

        <S.NavLink href="/">Home</S.NavLink>
        <S.NavLink href="/jogos">Jogos</S.NavLink>
        <S.NavLink href="/consoles">Consoles</S.NavLink>
        <S.NavLink href="/acessorios">Acessórios</S.NavLink>
        <S.NavLink href="/promocoes">Promoções</S.NavLink>
      </S.MobileMenu>
    </S.HeaderContainer>
  )
}

export default Header
