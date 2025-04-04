import React, { useState, useEffect } from 'react'
import * as S from './styles'

import {
  FaPlaystation,
  FaXbox,
  FaGamepad,
  FaPercentage,
  FaBars,
  FaTimes
} from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'

interface Category {
  id: number
  name: string
  count: number
  icon: React.ReactNode
}

interface ConsolesSidebarProps {
  onCategoryChange?: (categoryId: number | null) => void
  defaultCategory?: number | null
  categoryCounts?: Record<number, number>
}

const ConsolesSidebar: React.FC<ConsolesSidebarProps> = ({
  onCategoryChange,
  defaultCategory = null,
  categoryCounts = {}
}) => {
  const [isOpen, setIsOpen] = useState(() => {
    return window.innerWidth > 768
  })
  const [activeCategory, setActiveCategory] = useState<number | null>(
    defaultCategory
  )

  const categories: Category[] = [
    {
      id: 1,
      name: 'PlayStation',
      count: categoryCounts[1] || 0,
      icon: <FaPlaystation />
    },
    { id: 2, name: 'Xbox', count: categoryCounts[2] || 0, icon: <FaXbox /> },
    {
      id: 3,
      name: 'Nintendo',
      count: categoryCounts[3] || 0,
      icon: <SiNintendo />
    },
    {
      id: 4,
      name: 'Handheld',
      count: categoryCounts[4] || 0,
      icon: <FaGamepad />
    },
    {
      id: 5,
      name: 'Promoções',
      count: categoryCounts[5] || 0,
      icon: <FaPercentage />
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (onCategoryChange) {
      onCategoryChange(activeCategory)
    }
  }, [activeCategory, onCategoryChange])

  const handleCategoryClick = (categoryId: number) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null)
    } else {
      setActiveCategory(categoryId)
    }

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

      {isOpen && <S.SidebarOverlay onClick={toggleSidebar} />}

      <S.SidebarContainer isOpen={isOpen}>
        <S.SidebarTitle>Categorias de Consoles</S.SidebarTitle>
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

export default ConsolesSidebar
