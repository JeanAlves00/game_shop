import React, { useState, useEffect } from 'react'
import GameProducts from '../../components/Games/Products'
import GamesSidebar from '../../components/Games/SideBar'
import styled from 'styled-components'
import { mockGames } from '../../components/Games/Products/utils'

const GamesContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px); // Ajuste conforme o tamanho do seu header

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Games: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<number | null>(null)
  const [categoryCounts, setCategoryCounts] = useState<Record<number, number>>(
    {}
  )

  useEffect(() => {
    // Calcula a contagem para cada categoria
    const counts: Record<number, number> = {}

    // Inicializa todas as categorias com zero
    for (let i = 1; i <= 9; i++) {
      counts[i] = 0
    }

    // Conta os jogos por categoria
    mockGames.forEach((game) => {
      if (game.category) {
        counts[game.category] = (counts[game.category] || 0) + 1
      }
    })

    // Conta os jogos em promoção (categoria especial 9)
    counts[9] = mockGames.filter(
      (game) =>
        typeof game.price === 'object' && game.price.original > game.price.sale
    ).length

    setCategoryCounts(counts)
  }, [])

  const handleCategoryChange = (categoryId: number | null) => {
    setCategoryFilter(categoryId)
  }

  return (
    <GamesContainer>
      <GamesSidebar
        onCategoryChange={handleCategoryChange}
        defaultCategory={categoryFilter}
        categoryCounts={categoryCounts}
      />
      <GameProducts categoryFilter={categoryFilter} />
    </GamesContainer>
  )
}

export default Games
