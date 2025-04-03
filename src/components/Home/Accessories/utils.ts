// Interface para os dados de acessórios
interface AccessoryItem {
  id: number
  title: string
  category: 'Headset' | 'Controle' | 'Teclado' | 'Mouse' | 'Outro'
  description: string
  price: number
  image: string
  compatibility: string[]
  specs: string[]
}

// Dados mock para os acessórios em destaque
export const accessoryItems: AccessoryItem[] = [
  {
    id: 1,
    title: 'Headset HyperX Cloud Alpha',
    category: 'Headset',
    description:
      'Headset com drivers de dupla câmara, microfone destacável e conforto premium para longas sessões de jogo',
    price: 499.9,
    image:
      'https://th.bing.com/th/id/OIP.PyG4h1zdPdm9CWa1VANLJAHaHa?rs=1&pid=ImgDetMain',
    compatibility: ['PC', 'PS', 'Xbox', 'Switch'],
    specs: [
      'Som Surround 7.1',
      'Microfone removível',
      'Confortável',
      'Cabo removível'
    ]
  },
  {
    id: 2,
    title: 'Controle DualSense',
    category: 'Controle',
    description:
      'Controle sem fio para PlayStation 5 com feedback háptico e gatilhos adaptáveis para maior imersão',
    price: 449.9,
    image: 'https://m.media-amazon.com/images/I/612bjwBuobS._AC_SX425_.jpg',
    compatibility: ['PS'],
    specs: [
      'Feedback Háptico',
      'Gatilhos Adaptáveis',
      'Bluetooth',
      'Bateria recarregável'
    ]
  },
  {
    id: 3,
    title: 'Teclado Razer BlackWidow V3',
    category: 'Teclado',
    description:
      'Teclado mecânico gamer com switches Razer Green, RGB Chroma e construção premium',
    price: 899.9,
    image:
      'https://th.bing.com/th/id/R.e60cc1aed102caa5ca4a264616c5eaec?rik=WP67FiSLrs9Ggg&pid=ImgRaw&r=0',
    compatibility: ['PC'],
    specs: ['Mecânico', 'RGB', 'Apoio de pulso', 'Switches Green']
  },
  {
    id: 4,
    title: 'Mouse Logitech G502 HERO',
    category: 'Mouse',
    description:
      'Mouse gamer de alta performance com sensor HERO 25K, 11 botões programáveis e pesos ajustáveis',
    price: 349.9,
    image: 'https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SX425_.jpg',
    compatibility: ['PC'],
    specs: [
      'Sensor HERO 25K',
      'RGB',
      'Pesos ajustáveis',
      '11 botões programáveis'
    ]
  }
]
