interface PromotionItem {
  id: number
  category: 'Game' | 'Console' | 'Acessório'
  title: string
  description: string
  originalPrice: number
  salePrice: number
  image: string
  platforms?: string[] // Plataformas disponíveis (apenas para jogos)
}

// Dados mock para os produtos em promoção
export const promotionItems: PromotionItem[] = [
  {
    id: 1,
    category: 'Game',
    title: 'Cyberpunk 2077',
    description:
      'RPG de mundo aberto futurista com história imersiva e gráficos de última geração',
    originalPrice: 299.9,
    salePrice: 149.9,
    platforms: ['PC', 'PS', 'Xbox'],
    image:
      'https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png'
  },
  {
    id: 2,
    category: 'Console',
    title: 'PlayStation 5 Digital Edition',
    description:
      'Console de última geração com gráficos em 4K e SSD ultrarrápido',
    originalPrice: 3750.9,
    salePrice: 3199.9,
    image:
      'https://a-static.mlcdn.com.br/800x600/console-playstation-5-slim-sony-ssd-1tb-edicao-digital-com-controle-sem-fio-dualsense-branco-2-jogos-digitais-1000038914/kabum/542929/6bb92f30e75a96e0c2b1d8576ad56c2e.jpeg'
  },
  {
    id: 3,
    category: 'Acessório',
    title: 'Headset Redragon Zeus',
    description: 'Headset gamer com som surround 7.1 e microfone ajustável',
    originalPrice: 299.9,
    salePrice: 199.9,
    image:
      'https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/240721080/h510-pro-1-9149-a8e038qcn4.jpg'
  },
  {
    id: 4,
    category: 'Game',
    title: 'The Last of Us Part I Remake',
    description:
      'Aventura de sobrevivência pós-apocalíptica aclamada pela crítica',
    originalPrice: 249.9,
    salePrice: 99.9,
    platforms: ['PS', 'PC'],
    image: 'https://tm.ibxk.com.br/2022/06/28/28123928614285.jpg?ims=1200x675'
  },
  {
    id: 5,
    category: 'Acessório',
    title: 'Controle Elite Xbox',
    description: 'Controle profissional personalizável com gatilhos ajustáveis',
    originalPrice: 899.9,
    salePrice: 699.9,
    image:
      'https://cms-assets.xboxservices.com/assets/98/2f/982fc5ba-38ec-4d2f-b437-7545e7d4c3bc.jpg?n=320089_Hero-Image-1084_1920x831.jpg'
  },
  {
    id: 6,
    category: 'Game',
    title: 'God of War Ragnarök',
    description:
      'Épica sequência que leva Kratos e Atreus pelas mitológicas terras nórdicas',
    originalPrice: 349.9,
    salePrice: 249.9,
    platforms: ['PS', 'PC'],
    image:
      'https://cdn1.epicgames.com/spt-assets/edaff839f0734d16bc89d2ddb1dc9339/steel-magnolia-67cyy.jpg'
  },
  {
    id: 7,
    category: 'Console',
    title: 'Xbox Series X',
    description:
      'Console de alta performance com gráficos 4K, ray tracing e carregamento ultra-rápido',
    originalPrice: 4299.9,
    salePrice: 3599.9,
    image:
      'https://sm.ign.com/ign_br/news/x/xbox-serie/xbox-series-x-all-digital-edition-officially-announced-xbox_xbp4.jpg'
  },
  {
    id: 8,
    category: 'Game',
    title: 'Hollow Knight',
    description:
      'Aventura indie com mundo vasto, combate desafiador e trilha sonora memorável',
    originalPrice: 49.9,
    salePrice: 27.9,
    platforms: ['PC', 'PS', 'Xbox', 'Switch'],
    image:
      'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000003208/4643fb058642335c523910f3a7910575f56372f612f7c0c9a497aaae978d3e51'
  }
]
