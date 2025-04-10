// Interface para os dados de jogos
interface GameItem {
  id: number
  title: string
  genre: string
  description: string
  price: number
  image: string
  rating: number
  platforms: string[] // Plataformas disponíveis
}

// Dados mock para os jogos em destaque
export const gameItems: GameItem[] = [
  {
    id: 1,
    title: 'Elden Ring',
    genre: 'RPG',
    description:
      'Um RPG de mundo aberto épico ambientado em um reino criado por Hidetaka Miyazaki e George R. R. Martin',
    price: 299.9,
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/Y5RHNmzAtc6sRYwZlYiKHAxN.png',
    rating: 9.5,
    platforms: ['PC', 'PS', 'Xbox']
  },
  {
    id: 2,
    title: "Baldur's Gate 3",
    genre: 'RPG Tático',
    description:
      'Um RPG de turno aclamado pela crítica baseado no universo de Dungeons & Dragons',
    price: 199.9,
    image:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/extras/Final_Keyart_BG3.gif?t=1740386911',
    rating: 9.8,
    platforms: ['PC', 'PS']
  },
  {
    id: 3,
    title: 'Zelda: Tears of the Kingdom',
    genre: 'Aventura',
    description:
      'A sequência de Breath of the Wild leva Link a uma nova aventura nos céus de Hyrule',
    price: 349.9,
    image:
      'https://static.wixstatic.com/media/15bb51_2990f2a468de4b76ac1a728ea2a89588~mv2.png/v1/fill/w_568,h_320,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/15bb51_2990f2a468de4b76ac1a728ea2a89588~mv2.png',
    rating: 9.6,
    platforms: ['Switch']
  },
  {
    id: 4,
    title: "Marvel's Spider-Man 2",
    genre: 'Ação/Aventura',
    description:
      'Peter Parker e Miles Morales retornam em uma nova aventura para enfrentar um de seus maiores desafios',
    price: 349.9,
    image:
      'https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5',
    rating: 9.2,
    platforms: ['PS', 'PC']
  }
]
