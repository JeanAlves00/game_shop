import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaPlaystation,
  FaXbox,
  FaSteam,
  FaGamepad
} from 'react-icons/fa'
import { SiNintendoswitch } from 'react-icons/si'
import {
  SidebarContainer,
  SidebarTitle,
  CategoryBlock,
  FilterItem,
  CheckboxInput,
  FilterLabel,
  PriceRangeContainer,
  PriceInputGroup,
  PriceInput,
  RangeSlider,
  FilterButton,
  MobileToggle,
  BadgeCount,
  ClearButton,
  CategoryTitle
} from './styles'

interface FilterState {
  platforms: {
    playstation: boolean
    xbox: boolean
    nintendo: boolean
    pc: boolean
    mobile: boolean
  }
  genres: {
    action: boolean
    adventure: boolean
    rpg: boolean
    strategy: boolean
    simulation: boolean
    sports: boolean
    racing: boolean
    puzzle: boolean
  }
  features: {
    multiplayer: boolean
    singleplayer: boolean
    coop: boolean
    vr: boolean
  }
  rating: {
    five: boolean
    four: boolean
    three: boolean
  }
}

interface FilterStateWithPrice extends FilterState {
  price: [number, number]
}

interface SidebarProps {
  onFilterChange?: (filters: FilterStateWithPrice) => void
}

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const maxPrice = 300 // Changed from useState to a constant since setter is never used
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300])

  const [filters, setFilters] = useState({
    platforms: {
      playstation: false,
      xbox: false,
      nintendo: false,
      pc: false,
      mobile: false
    },
    genres: {
      action: false,
      adventure: false,
      rpg: false,
      strategy: false,
      simulation: false,
      sports: false,
      racing: false,
      puzzle: false
    },
    features: {
      multiplayer: false,
      singleplayer: false,
      coop: false,
      vr: false
    },
    rating: {
      five: false,
      four: false,
      three: false
    }
  })

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleFilterChange = <T extends keyof FilterState>(
    category: T,
    item: keyof FilterState[T]
  ) => {
    setFilters({
      ...filters,
      [category]: {
        ...filters[category],
        [item]: !filters[category][item]
      }
    })
  }

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max])
  }

  const applyFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        ...filters,
        price: priceRange
      })
    }
    // Em dispositivos móveis, fecha a sidebar após aplicar filtros
    if (window.innerWidth <= 768) {
      setIsOpen(false)
    }
  }

  const clearFilters = () => {
    setFilters({
      platforms: {
        playstation: false,
        xbox: false,
        nintendo: false,
        pc: false,
        mobile: false
      },
      genres: {
        action: false,
        adventure: false,
        rpg: false,
        strategy: false,
        simulation: false,
        sports: false,
        racing: false,
        puzzle: false
      },
      features: {
        multiplayer: false,
        singleplayer: false,
        coop: false,
        vr: false
      },
      rating: {
        five: false,
        four: false,
        three: false
      }
    })
    setPriceRange([0, maxPrice])
  }

  const countActiveFilters = () => {
    let count = 0

    // Conta filtros de plataforma
    Object.values(filters.platforms).forEach((val) => {
      if (val) count++
    })

    // Conta filtros de gênero
    Object.values(filters.genres).forEach((val) => {
      if (val) count++
    })

    // Conta filtros de recursos
    Object.values(filters.features).forEach((val) => {
      if (val) count++
    })

    // Conta filtros de avaliação
    Object.values(filters.rating).forEach((val) => {
      if (val) count++
    })

    // Adiciona filtro de preço se não estiver no padrão
    if (priceRange[0] > 0 || priceRange[1] < maxPrice) {
      count++
    }

    return count
  }

  return (
    <>
      <MobileToggle onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </MobileToggle>

      <SidebarContainer isOpen={isOpen}>
        <SidebarTitle>
          Filtros
          {countActiveFilters() > 0 && (
            <BadgeCount>{countActiveFilters()}</BadgeCount>
          )}
        </SidebarTitle>

        <CategoryBlock>
          <CategoryTitle>Plataformas</CategoryTitle>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="playstation"
              checked={filters.platforms.playstation}
              onChange={() => handleFilterChange('platforms', 'playstation')}
            />
            <FilterLabel htmlFor="playstation">
              <FaPlaystation style={{ marginRight: '8px' }} /> PlayStation
            </FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="xbox"
              checked={filters.platforms.xbox}
              onChange={() => handleFilterChange('platforms', 'xbox')}
            />
            <FilterLabel htmlFor="xbox">
              <FaXbox style={{ marginRight: '8px' }} /> Xbox
            </FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="nintendo"
              checked={filters.platforms.nintendo}
              onChange={() => handleFilterChange('platforms', 'nintendo')}
            />
            <FilterLabel htmlFor="nintendo">
              <SiNintendoswitch style={{ marginRight: '8px' }} /> Nintendo
            </FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="pc"
              checked={filters.platforms.pc}
              onChange={() => handleFilterChange('platforms', 'pc')}
            />
            <FilterLabel htmlFor="pc">
              <FaSteam style={{ marginRight: '8px' }} /> PC
            </FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="mobile"
              checked={filters.platforms.mobile}
              onChange={() => handleFilterChange('platforms', 'mobile')}
            />
            <FilterLabel htmlFor="mobile">
              <FaGamepad style={{ marginRight: '8px' }} /> Mobile
            </FilterLabel>
          </FilterItem>
        </CategoryBlock>

        <CategoryBlock>
          <CategoryTitle>Gêneros</CategoryTitle>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="action"
              checked={filters.genres.action}
              onChange={() => handleFilterChange('genres', 'action')}
            />
            <FilterLabel htmlFor="action">Ação</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="adventure"
              checked={filters.genres.adventure}
              onChange={() => handleFilterChange('genres', 'adventure')}
            />
            <FilterLabel htmlFor="adventure">Aventura</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="rpg"
              checked={filters.genres.rpg}
              onChange={() => handleFilterChange('genres', 'rpg')}
            />
            <FilterLabel htmlFor="rpg">RPG</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="strategy"
              checked={filters.genres.strategy}
              onChange={() => handleFilterChange('genres', 'strategy')}
            />
            <FilterLabel htmlFor="strategy">Estratégia</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="simulation"
              checked={filters.genres.simulation}
              onChange={() => handleFilterChange('genres', 'simulation')}
            />
            <FilterLabel htmlFor="simulation">Simulação</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="sports"
              checked={filters.genres.sports}
              onChange={() => handleFilterChange('genres', 'sports')}
            />
            <FilterLabel htmlFor="sports">Esportes</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="racing"
              checked={filters.genres.racing}
              onChange={() => handleFilterChange('genres', 'racing')}
            />
            <FilterLabel htmlFor="racing">Corrida</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="puzzle"
              checked={filters.genres.puzzle}
              onChange={() => handleFilterChange('genres', 'puzzle')}
            />
            <FilterLabel htmlFor="puzzle">Puzzle</FilterLabel>
          </FilterItem>
        </CategoryBlock>

        <CategoryBlock>
          <CategoryTitle>Recursos</CategoryTitle>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="multiplayer"
              checked={filters.features.multiplayer}
              onChange={() => handleFilterChange('features', 'multiplayer')}
            />
            <FilterLabel htmlFor="multiplayer">Multiplayer</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="singleplayer"
              checked={filters.features.singleplayer}
              onChange={() => handleFilterChange('features', 'singleplayer')}
            />
            <FilterLabel htmlFor="singleplayer">Single Player</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="coop"
              checked={filters.features.coop}
              onChange={() => handleFilterChange('features', 'coop')}
            />
            <FilterLabel htmlFor="coop">Cooperativo</FilterLabel>
          </FilterItem>
          <FilterItem>
            <CheckboxInput
              type="checkbox"
              id="vr"
              checked={filters.features.vr}
              onChange={() => handleFilterChange('features', 'vr')}
            />
            <FilterLabel htmlFor="vr">Realidade Virtual</FilterLabel>
          </FilterItem>
        </CategoryBlock>

        <CategoryBlock>
          <CategoryTitle>Preço</CategoryTitle>
          <PriceRangeContainer>
            <RangeSlider
              type="range"
              min={0}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceChange(priceRange[0], parseInt(e.target.value))
              }
            />
            <PriceInputGroup>
              <PriceInput
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  handlePriceChange(
                    Math.min(parseInt(e.target.value), priceRange[1]),
                    priceRange[1]
                  )
                }
                placeholder="Min"
              />
              <PriceInput
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  handlePriceChange(priceRange[0], parseInt(e.target.value))
                }
                placeholder="Max"
              />
            </PriceInputGroup>
          </PriceRangeContainer>
        </CategoryBlock>

        <FilterButton onClick={applyFilters}>Aplicar Filtros</FilterButton>

        {countActiveFilters() > 0 && (
          <ClearButton onClick={clearFilters}>
            Limpar todos os filtros
          </ClearButton>
        )}
      </SidebarContainer>
    </>
  )
}

export default Sidebar
