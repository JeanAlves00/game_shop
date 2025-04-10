import { PriceInfo } from '../../Card'

export interface Console {
  id: number
  title: string
  manufacturer: string
  description: string
  image: string
  price: number | PriceInfo
  storage: string
  category: number
  features: string[]
  isNew?: boolean
}

export interface ProductsProps {
  categoryFilter: number | null
}

export const mockConsoles: Console[] = [
  {
    id: 1,
    title: 'PlayStation 5 Digital Edition',
    manufacturer: 'Sony',
    description:
      'Console Sony PS5 Digital Edition sem leitor de discos, com SSD ultra-rápido e controle DualSense',
    image: '/images/consoles/ps5-digital.jpg',
    price: 3799.99,
    storage: '825GB SSD',
    category: 1, // PlayStation
    features: [
      'SSD Ultra-rápido',
      'Ray Tracing',
      'Controle DualSense',
      'Áudio 3D'
    ]
  },
  {
    id: 2,
    title: 'PlayStation 5 Standard',
    manufacturer: 'Sony',
    description:
      'Console Sony PS5 com leitor de Blu-ray, SSD ultra-rápido e controle DualSense inovador',
    image: '/images/consoles/ps5-standard.jpg',
    price: 4499.99,
    storage: '825GB SSD',
    category: 1, // PlayStation
    features: [
      'Leitor de Blu-ray',
      'SSD Ultra-rápido',
      'Ray Tracing',
      'Controle DualSense'
    ]
  },
  {
    id: 3,
    title: 'Xbox Series X',
    manufacturer: 'Microsoft',
    description:
      'Console de última geração da Microsoft com suporte a 4K e raytracing, SSD ultra-rápido',
    image: '/images/consoles/xbox-series-x.jpg',
    price: 4349.99,
    storage: '1TB SSD',
    category: 2, // Xbox
    features: ['4K gaming', 'Ray Tracing', 'Quick Resume', '120 FPS']
  },
  {
    id: 4,
    title: 'Xbox Series S',
    manufacturer: 'Microsoft',
    description:
      'Console digital compacto da Microsoft com alto desempenho para jogos em 1440p',
    image: '/images/consoles/xbox-series-s.jpg',
    price: {
      original: 2799.99,
      sale: 2399.99
    },
    storage: '512GB SSD',
    category: 2, // Xbox
    features: ['Digital', 'Compacto', 'Quick Resume', '120 FPS'],
    isNew: true
  },
  {
    id: 5,
    title: 'Nintendo Switch OLED',
    manufacturer: 'Nintendo',
    description:
      'Console híbrido com tela OLED de 7 polegadas, dock com porta Ethernet e suporte ajustável',
    image: '/images/consoles/switch-oled.jpg',
    price: 2699.99,
    storage: '64GB',
    category: 3, // Nintendo
    features: ['Tela OLED', 'Híbrido', 'Joy-Cons', 'Dock com Ethernet']
  },
  {
    id: 6,
    title: 'Nintendo Switch Lite',
    manufacturer: 'Nintendo',
    description:
      'Versão compacta e portátil do Nintendo Switch, perfeita para jogar em qualquer lugar',
    image: '/images/consoles/switch-lite.jpg',
    price: {
      original: 1899.99,
      sale: 1699.99
    },
    storage: '32GB',
    category: 3, // Nintendo
    features: ['Portátil', 'Leve', 'Bateria Longa', 'Compacto']
  },
  {
    id: 7,
    title: 'PlayStation 4 Pro',
    manufacturer: 'Sony',
    description:
      'Console com suporte a 4K, HDR e experiências de jogo mais imersivas',
    image: '/images/consoles/ps4-pro.jpg',
    price: {
      original: 2999.99,
      sale: 2499.99
    },
    storage: '1TB HDD',
    category: 1, // PlayStation
    features: ['4K gaming', 'HDR', 'Biblioteca Vasta', 'Controle DualShock 4']
  },
  {
    id: 8,
    title: 'Xbox One X',
    manufacturer: 'Microsoft',
    description:
      'Console com hardware potente para jogos em 4K e HDR, biblioteca ampla de títulos',
    image: '/images/consoles/xbox-one-x.jpg',
    price: {
      original: 3299.99,
      sale: 2599.99
    },
    storage: '1TB HDD',
    category: 2, // Xbox
    features: ['4K gaming', 'HDR', 'Game Pass', 'Compatibilidade Retroativa']
  },
  {
    id: 9,
    title: 'Steam Deck',
    manufacturer: 'Valve',
    description:
      'Console portátil para jogos de PC com controles integrados e sistema operacional baseado em Linux',
    image: '/images/consoles/steam-deck.jpg',
    price: 3499.99,
    storage: '512GB SSD',
    category: 4, // Handheld
    features: ['Portátil', 'Jogos de PC', 'SSD NVMe', 'Tela Touchscreen']
  },
  {
    id: 10,
    title: 'Nintendo Switch Standard',
    manufacturer: 'Nintendo',
    description:
      'Console híbrido que pode ser usado como console de mesa ou como portátil',
    image: '/images/consoles/switch.jpg',
    price: {
      original: 2299.99,
      sale: 1999.99
    },
    storage: '32GB',
    category: 3, // Nintendo
    features: ['Híbrido', 'Joy-Cons', 'Dock HDMI', 'Multiplayer']
  }
]

// Função auxiliar para mapear categorias para nomes
export const getCategoryName = (categoryId: number): string => {
  const categories: Record<number, string> = {
    1: 'PlayStation',
    2: 'Xbox',
    3: 'Nintendo',
    4: 'Handheld',
    5: 'Promoções'
  }

  return categories[categoryId] || 'Todos os Consoles'
}
