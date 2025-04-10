// Interface para os dados de consoles
interface ConsoleItem {
  id: number
  title: string
  manufacturer: string
  description: string
  price: number
  image: string
  storage: string
  features: string[]
}

// Dados mock para os consoles em destaque
export const consoleItems: ConsoleItem[] = [
  {
    id: 1,
    title: 'PlayStation 5',
    manufacturer: 'Sony',
    description:
      'Console de última geração com SSD ultrarrápido, suporte a 4K e Ray Tracing para uma experiência imersiva',
    price: 3999.9,
    image: 'https://m.media-amazon.com/images/I/51QKZfyi-dL._AC_SX679_.jpg',
    storage: '825GB SSD',
    features: ['4K', 'Ray Tracing', 'SSD', 'Wi-Fi 6']
  },
  {
    id: 2,
    title: 'Xbox Series X',
    manufacturer: 'Microsoft',
    description:
      'O console Xbox mais rápido e poderoso de todos os tempos com gráficos em 4K e carregamento ultrarrápido',
    price: 4199.9,
    image:
      'https://sm.ign.com/ign_br/news/x/xbox-serie/xbox-series-x-all-digital-edition-officially-announced-xbox_xbp4.jpg',
    storage: '1TB SSD',
    features: ['4K', 'Ray Tracing', 'SSD', 'Smart Delivery']
  },
  {
    id: 3,
    title: 'Nintendo Switch OLED',
    manufacturer: 'Nintendo',
    description:
      'Versão premium do Switch com tela OLED vibrante de 7 polegadas e base redesenhada com porta LAN',
    price: 2499.9,
    image: 'https://m.media-amazon.com/images/I/51yJ+OqktYL._AC_SX569_.jpg',
    storage: '64GB',
    features: ['OLED', 'Portátil', 'Dock', 'Joy-Cons']
  },
  {
    id: 4,
    title: 'Xbox Series S',
    manufacturer: 'Microsoft',
    description:
      'Console digital compacto com desempenho de última geração a um preço acessível para os novos jogadores',
    price: 2399.9,
    image: 'https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_SX679_.jpg',
    storage: '512GB SSD',
    features: ['1440p', 'SSD', 'Digital', 'Compacto']
  }
]
