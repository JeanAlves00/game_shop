import React, { useState, useEffect } from 'react'
import ConsoleProducts from '../../components/Consoles/Products'
import ConsolesSidebar from '../../components/Consoles/SideBar'
import styled from 'styled-components'
import { mockConsoles } from '../../components/Consoles/Products/utils'

const ConsolesContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px); // Ajuste conforme o tamanho do seu header

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Consoles: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<number | null>(null)
  const [categoryCounts, setCategoryCounts] = useState<Record<number, number>>(
    {}
  )

  useEffect(() => {
    // Calcula a contagem para cada categoria
    const counts: Record<number, number> = {}

    // Inicializa todas as categorias com zero
    for (let i = 1; i <= 5; i++) {
      counts[i] = 0
    }

    // Conta os consoles por categoria
    mockConsoles.forEach((console) => {
      if (console.category) {
        counts[console.category] = (counts[console.category] || 0) + 1
      }
    })

    // Conta os consoles em promoção (categoria especial 5)
    counts[5] = mockConsoles.filter(
      (console) =>
        typeof console.price === 'object' &&
        console.price.original !== undefined &&
        console.price.sale !== undefined &&
        console.price.original > console.price.sale
    ).length

    setCategoryCounts(counts)
  }, [])

  const handleCategoryChange = (categoryId: number | null) => {
    setCategoryFilter(categoryId)
  }

  return (
    <ConsolesContainer>
      <ConsolesSidebar
        onCategoryChange={handleCategoryChange}
        defaultCategory={categoryFilter}
        categoryCounts={categoryCounts}
      />
      <ConsoleProducts categoryFilter={categoryFilter} />
    </ConsolesContainer>
  )
}

export default Consoles
