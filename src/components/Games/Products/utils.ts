// Interface para os dados dos jogos
export interface Game {
  id: number
  title: string
  description: string
  price: number | { original: number; sale: number }
  image: string
  category: number
  rating: number
  release: string
  platforms: string[]
  features: string[]
  onSale?: boolean
}

// Propriedades do componente Products
export interface ProductsProps {
  categoryFilter: number | null
}

export const mockGames: Game[] = [
  {
    id: 1,
    title: 'Cyberpunk 2077',
    description:
      'RPG de mundo aberto situado em Night City, uma megalópole obcecada por poder, glamour e modificações corporais.',
    price: { original: 299.9, sale: 149.9 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    category: 3, // RPG
    rating: 4.7,
    release: '2020',
    platforms: ['playstation', 'xbox', 'pc'],
    features: ['Mundo Aberto', 'RPG', 'Futurista'],
    onSale: true
  },
  {
    id: 2,
    title: 'FIFA 23',
    description:
      'O jogo de futebol mais realista com tecnologia HyperMotion2 e Copas do Mundo FIFA masculina e feminina.',
    price: 299.9,
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/4MwYJ3LE9ct7ZDD7V4WpbhZL.png',
    category: 5, // Esportes
    rating: 4.2,
    release: '2022',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Multijogador', 'Esportes', 'Simulação']
  },
  {
    id: 3,
    title: 'Elden Ring',
    description:
      'Um RPG de ação imersivo criado por Hidetaka Miyazaki e George R. R. Martin.',
    price: { original: 329.9, sale: 229.9 },
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkR9dIGx0hapGGVKgb87J.png',
    category: 3, // RPG
    rating: 4.9,
    release: '2022',
    platforms: ['playstation', 'xbox', 'pc'],
    features: ['Mundo Aberto', 'Difícil', 'Fantasia'],
    onSale: true
  },
  {
    id: 4,
    title: 'Forza Horizon 5',
    description:
      'Explore um mundo aberto vibrante no México com corridas sem limites na aclamada série Forza Horizon.',
    price: 249.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/header.jpg',
    category: 6, // Corrida
    rating: 4.8,
    release: '2021',
    platforms: ['xbox', 'pc'],
    features: ['Mundo Aberto', 'Multijogador', 'Corrida']
  },
  {
    id: 5,
    title: 'Stardew Valley',
    description:
      'Herde a antiga fazenda do seu avô e aprenda a viver da terra, crie animais, gerencie seu tempo e socialize em uma encantadora comunidade.',
    price: 24.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg',
    category: 8, // Indie
    rating: 4.9,
    release: '2016',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Simulação', 'Agricultura', 'Pixel Art']
  },
  {
    id: 6,
    title: 'God of War Ragnarök',
    description:
      'Kratos e Atreus se aventuram pelos Nove Reinos em busca de respostas enquanto as forças asgardianas se preparam para a guerra.',
    price: { original: 349.9, sale: 269.9 },
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
    category: 2, // Aventura
    rating: 4.9,
    release: '2022',
    platforms: ['playstation'],
    features: ['Narrativa', 'Ação', 'Mitologia'],
    onSale: true
  },
  {
    id: 7,
    title: 'The Witcher 3: Wild Hunt',
    description:
      'Torne-se Geralt de Rívia e aventure-se por um mundo aberto repleto de cidades mercantis, ilhas piratas e cavernas perigosas.',
    price: { original: 129.9, sale: 39.9 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
    category: 3, // RPG
    rating: 4.9,
    release: '2015',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Mundo Aberto', 'RPG', 'Fantasia Medieval'],
    onSale: true
  },
  {
    id: 8,
    title: 'Minecraft',
    description:
      'Explore mundos infinitos e construa desde casas simples a castelos grandiosos neste jogo de construção e sobrevivência.',
    price: 99.9,
    image:
      'https://www.minecraft.net/content/dam/games/minecraft/key-art/CC-Update-Part-II_600x360.jpg',
    category: 7, // Puzzle
    rating: 4.8,
    release: '2011',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Criatividade', 'Sobrevivência', 'Multijogador']
  },
  {
    id: 9,
    title: 'Call of Duty: Modern Warfare 3',
    description:
      'Um intenso FPS com campanha cinematográfica e modo multiplayer competitivo.',
    price: 299.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
    category: 1, // Ação
    rating: 4.5,
    release: '2023',
    platforms: ['playstation', 'xbox', 'pc'],
    features: ['FPS', 'Multiplayer', 'Campanha']
  },
  {
    id: 10,
    title: 'Hollow Knight',
    description:
      'Explore um vasto reino subterrâneo de insetos e heróis em um jogo de aventura e ação desafiador.',
    price: { original: 54.9, sale: 27.45 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg',
    category: 8, // Indie
    rating: 4.9,
    release: '2017',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Metroidvania', 'Difícil', 'Atmosférico'],
    onSale: true
  },
  {
    id: 11,
    title: 'Age of Empires IV',
    description:
      'Retorne à Idade Média com jogabilidade de estratégia em tempo real intensificada e evoluída.',
    price: 199.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1466860/header.jpg',
    category: 4, // Estratégia
    rating: 4.7,
    release: '2021',
    platforms: ['pc'],
    features: ['RTS', 'Histórico', 'Multiplayer']
  },
  {
    id: 12,
    title: 'Hades',
    description:
      'Desafie o deus dos mortos enquanto você batalha para sair do Submundo neste roguelike da premiada Supergiant Games.',
    price: { original: 47.49, sale: 23.75 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg',
    category: 1, // Ação
    rating: 4.8,
    release: '2020',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Roguelike', 'Hack and Slash', 'Mitologia'],
    onSale: true
  },
  {
    id: 13,
    title: 'The Legend of Zelda: Breath of the Wild',
    description:
      'Explore um mundo vasto e descobra seu próprio caminho nesta aventura épica. Desperte e enfrente Ganon para salvar o reino de Hyrule.',
    price: 299.9,
    image:
      'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
    category: 2, // Aventura
    rating: 4.9,
    release: '2017',
    platforms: ['switch'],
    features: ['Mundo Aberto', 'Aventura', 'Puzzle']
  },
  {
    id: 14,
    title: 'Red Dead Redemption 2',
    description:
      'Uma épica história de fora da lei no coração da América em 1899. Após um assalto que deu errado, Arthur Morgan e a gangue Van der Linde são forçados a fugir.',
    price: { original: 239.9, sale: 119.9 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    category: 2, // Aventura
    rating: 4.9,
    release: '2019',
    platforms: ['playstation', 'xbox', 'pc'],
    features: ['Mundo Aberto', 'Faroeste', 'História Rica'],
    onSale: true
  },
  {
    id: 15,
    title: 'Among Us',
    description:
      'Jogue com 4-15 jogadores online ou via rede local e prepare sua nave para decolagem. Mas cuidado, um impostor está entre vocês!',
    price: 10.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/945360/header.jpg',
    category: 4, // Estratégia
    rating: 4.5,
    release: '2018',
    platforms: ['pc', 'switch', 'mobile'],
    features: ['Multijogador', 'Social', 'Dedução']
  },
  {
    id: 16,
    title: "Assassin's Creed Valhalla",
    description:
      'Torne-se Eivor, um guerreiro viking lendário em busca de glória. Explore a Inglaterra da Era dos Vikings enquanto lidera incursões contra fortificações saxônicas.',
    price: { original: 199.9, sale: 99.9 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg',
    category: 3, // RPG
    rating: 4.6,
    release: '2020',
    platforms: ['playstation', 'xbox', 'pc'],
    features: ['Mundo Aberto', 'Vikings', 'Histórico'],
    onSale: true
  },
  {
    id: 17,
    title: "Baldur's Gate 3",
    description:
      'Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de amizade, traição, sacrifício e sobrevivência.',
    price: 199.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
    category: 3, // RPG
    rating: 5.0,
    release: '2023',
    platforms: ['pc', 'playstation'],
    features: ['RPG por Turnos', 'Fantasia', 'D&D']
  },
  {
    id: 18,
    title: 'Resident Evil 4 Remake',
    description:
      'Survival horror reimaginado para uma experiência moderna. Seis anos após o desastre de Raccoon City, Leon Kennedy enfrenta uma nova ameaça.',
    price: 249.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg',
    category: 1, // Ação
    rating: 4.8,
    release: '2023',
    platforms: ['playstation', 'xbox', 'pc'],
    features: ['Horror', 'Sobrevivência', 'Terceira Pessoa']
  },
  {
    id: 19,
    title: 'Mario Kart 8 Deluxe',
    description:
      'Corra com seus personagens favoritos do universo Mario em pistas icônicas. Inclui todos os circuitos do jogo original mais conteúdo adicional.',
    price: 299.9,
    image:
      'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000153/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f',
    category: 6, // Corrida
    rating: 4.9,
    release: '2017',
    platforms: ['switch'],
    features: ['Multijogador', 'Família', 'Corrida']
  },
  {
    id: 20,
    title: 'The Last of Us Part II',
    description:
      'Cinco anos depois, Ellie embarca em uma jornada implacável para encontrar justiça após um evento trágico interromper sua tranquilidade.',
    price: { original: 249.9, sale: 149.9 },
    image:
      'https://image.api.playstation.com/vulcan/img/rnd/202010/2618/Y02l5DLRZGKfOhquria9mFHF.png',
    category: 2, // Aventura
    rating: 4.8,
    release: '2020',
    platforms: ['playstation'],
    features: ['Narrativa', 'Pós-apocalíptico', 'Ação'],
    onSale: true
  },
  {
    id: 21,
    title: 'Hogwarts Legacy',
    description:
      'Viva a vida de um estudante em Hogwarts no século 19. Explore locais familiares, descubra criaturas mágicas e personalize seu personagem.',
    price: 299.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg',
    category: 3, // RPG
    rating: 4.7,
    release: '2023',
    platforms: ['playstation', 'xbox', 'pc', 'switch'],
    features: ['Mundo Aberto', 'Magia', 'Harry Potter']
  },
  {
    id: 22,
    title: 'Palworld',
    description:
      'Um jogo de sobrevivência e criação de criaturas em um mundo aberto onde você pode capturar, treinar e lutar com criaturas chamadas "Pals".',
    price: { original: 99.9, sale: 79.9 },
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg',
    category: 3, // RPG
    rating: 4.6,
    release: '2024',
    platforms: ['pc', 'xbox'],
    features: ['Sobrevivência', 'Criação', 'Mundo Aberto'],
    onSale: true
  },
  {
    id: 23,
    title: 'Starfield',
    description:
      'O primeiro novo universo em 25 anos da Bethesda Game Studios. Crie qualquer personagem e explore com liberdade enquanto embarca na maior aventura espacial já feita.',
    price: 299.9,
    image:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1716740/header.jpg',
    category: 3, // RPG
    rating: 4.5,
    release: '2023',
    platforms: ['pc', 'xbox'],
    features: ['Espacial', 'Exploração', 'Mundo Aberto']
  },
  {
    id: 24,
    title: 'Final Fantasy VII Remake',
    description:
      'Uma reimaginação do clássico JRPG que redefiniu o gênero, com um sistema de combate híbrido e uma expansão da história original.',
    price: { original: 249.9, sale: 149.9 },
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/d0e455b4005415c59ba20ee5046541738ce9910c19c68735.png',
    category: 3, // RPG
    rating: 4.8,
    release: '2020',
    platforms: ['playstation', 'pc'],
    features: ['JRPG', 'Combate Híbrido', 'História Épica'],
    onSale: true
  }
]
