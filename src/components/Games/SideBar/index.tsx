import React, { useState, useEffect } from 'react'
import * as S from './styles'

import {
  FaGamepad,
  FaDragon,
  FaChessKnight,
  FaFootballBall,
  FaCar,
  FaPuzzlePiece,
  FaLaptopCode,
  FaPercentage,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import { GiRollingDices } from 'react-icons/gi'

interface Category {
  id: number
  name: string
  count: number
  icon: React.ReactNode
}

interface GamesSidebarProps {
  onCategoryChange?: (categoryId: number | null) => void
  defaultCategory?: number | null
  categoryCounts?: Record<number, number> // Nova prop para contagens de categoria
}

const GamesSidebar: React.FC<GamesSidebarProps> = ({
  onCategoryChange,
  defaultCategory = null,
  categoryCounts = {} // Valor padrão vazio
}) => {
  // Em telas grandes, sidebar começa aberta
  // Em telas pequenas, sidebar começa fechada
  const [isOpen, setIsOpen] = useState(() => {
    return window.innerWidth > 768
  })
  const [activeCategory, setActiveCategory] = useState<number | null>(
    defaultCategory
  )

  const categories: Category[] = [
    { id: 1, name: 'Ação', count: categoryCounts[1] || 0, icon: <FaGamepad /> },
    {
      id: 2,
      name: 'Aventura',
      count: categoryCounts[2] || 0,
      icon: <FaDragon />
    },
    {
      id: 3,
      name: 'RPG',
      count: categoryCounts[3] || 0,
      icon: <GiRollingDices />
    },
    {
      id: 4,
      name: 'Estratégia',
      count: categoryCounts[4] || 0,
      icon: <FaChessKnight />
    },
    {
      id: 5,
      name: 'Esportes',
      count: categoryCounts[5] || 0,
      icon: <FaFootballBall />
    },
    { id: 6, name: 'Corrida', count: categoryCounts[6] || 0, icon: <FaCar /> },
    {
      id: 7,
      name: 'Puzzle',
      count: categoryCounts[7] || 0,
      icon: <FaPuzzlePiece />
    },
    {
      id: 8,
      name: 'Indie',
      count: categoryCounts[8] || 0,
      icon: <FaLaptopCode />
    },
    {
      id: 9,
      name: 'Promoções',
      count: categoryCounts[9] || 0,
      icon: <FaPercentage />
    }
  ]

  // Detecta redimensionamento da tela e ajusta o estado da sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        // Em telas grandes, manter sempre aberto
        setIsOpen(true)
      } else {
        // Em telas pequenas, manter fechado por padrão
        setIsOpen(false)
      }
    }

    // Aplicar na primeira renderização
    handleResize()

    // Aplicar em cada redimensionamento
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Notificar o componente pai sobre a mudança de categoria
    if (onCategoryChange) {
      onCategoryChange(activeCategory)
    }
  }, [activeCategory, onCategoryChange])

  const handleCategoryClick = (categoryId: number) => {
    // Se clicar na categoria já ativa, desativa a seleção
    if (activeCategory === categoryId) {
      setActiveCategory(null)
    } else {
      setActiveCategory(categoryId)
    }

    // Em dispositivos móveis, fechar a sidebar após selecionar categoria
    if (window.innerWidth <= 768) {
      setIsOpen(false)
    }
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <S.ToggleButton
        onClick={toggleSidebar}
        aria-label={
          isOpen ? 'Fechar menu de categorias' : 'Abrir menu de categorias'
        }
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </S.ToggleButton>

      {/* Overlay só aparece em telas pequenas quando o menu está aberto */}
      {isOpen && <S.SidebarOverlay onClick={toggleSidebar} />}

      <S.SidebarContainer isOpen={isOpen}>
        <S.SidebarTitle>Categorias</S.SidebarTitle>
        <S.CategoriesList>
          {categories.map((category) => (
            <S.CategoryItem
              key={category.id}
              isActive={activeCategory === category.id}
            >
              <S.CategoryButton
                isActive={activeCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
              >
                <S.CategoryIcon>{category.icon}</S.CategoryIcon>
                {category.name}
                <S.CategoryCount>{category.count}</S.CategoryCount>
              </S.CategoryButton>
            </S.CategoryItem>
          ))}
        </S.CategoriesList>
        <S.SidebarFooter>Mais categorias em breve!</S.SidebarFooter>
      </S.SidebarContainer>
    </>
  )
}

export default GamesSidebar
