export interface GameData {
  id: number
  title: string
  imageUrl: string
  price: number
  releaseDate: string
}

export const upcomingGames: GameData[] = [
  {
    id: 1,
    title: 'JUDAS',
    imageUrl:
      'https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/12/QooApp_Judas.jpg',
    price: 299.9,
    releaseDate: '15/12/2025'
  },
  {
    id: 2,
    title: 'Grand Theft Auto VI',
    imageUrl:
      'https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg',
    price: 349.9,
    releaseDate: '10/09/2025'
  },
  {
    id: 3,
    title: 'Borderlands 4',
    imageUrl:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpybMLqWjYG5sehOOzb5-cGMm3tn_285vTeXDIN31efeBWg73pJ2yb5tKWahnQBqtUW8EwnW1Aq-o-7NC5FGFjK9XDDz0Km1WgJXBUsSq_gWr6mDCvyZ5QeW_M38daTZaA_u0OmNvdahCPyIyMe5itTxsQCDLnZ70HMPUppAkfe-sZqWBMgzCh3Bv6bpo/s1920/12230012467357.jpg',
    price: 349.9,
    releaseDate: '22/06/2025'
  }
]
