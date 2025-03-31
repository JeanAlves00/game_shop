import React from 'react'
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa'
import * as S from './styles'

// Dados mock para os produtos em promoção
const promotionItems = [
  {
    id: 1,
    category: 'Game',
    title: 'Cyberpunk 2077',
    description:
      'RPG de mundo aberto futurista com história imersiva e gráficos de última geração',
    originalPrice: 299.9,
    salePrice: 149.9,
    image:
      'https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png'
  },
  {
    id: 2,
    category: 'Console',
    title: 'PlayStation 5',
    description:
      'Console de última geração com gráficos em 4K e SSD ultrarrápido',
    originalPrice: 4499.9,
    salePrice: 3999.9,
    image: 'https://via.placeholder.com/300x180?text=PlayStation+5'
  },
  {
    id: 3,
    category: 'Acessório',
    title: 'Headset Gamer RGB',
    description:
      'Áudio estéreo de alta definição com iluminação RGB customizável',
    originalPrice: 199.9,
    salePrice: 129.9,
    image: 'https://via.placeholder.com/300x180?text=Headset+Gamer'
  },
  {
    id: 4,
    category: 'Game',
    title: 'The Last of Us Part II',
    description:
      'Aventura de sobrevivência pós-apocalíptica aclamada pela crítica',
    originalPrice: 249.9,
    salePrice: 99.9,
    image: 'https://via.placeholder.com/300x180?text=Last+of+Us+II'
  },
  {
    id: 5,
    category: 'Acessório',
    title: 'Controle Elite Xbox',
    description: 'Controle profissional personalizável com gatilhos ajustáveis',
    originalPrice: 899.9,
    salePrice: 699.9,
    image: 'https://via.placeholder.com/300x180?text=Xbox+Elite+Controller'
  },
  {
    id: 6,
    category: 'Game',
    title: 'God of War Ragnarök',
    description:
      'Épica sequência que leva Kratos e Atreus pelas mitológicas terras nórdicas',
    originalPrice: 349.9,
    salePrice: 249.9,
    image: 'https://via.placeholder.com/300x180?text=God+of+War+Ragnarok'
  },
  {
    id: 7,
    category: 'Console',
    title: 'Xbox Series X',
    description:
      'Console de alta performance com gráficos 4K, ray tracing e carregamento ultra-rápido',
    originalPrice: 4299.9,
    salePrice: 3799.9,
    image: 'https://via.placeholder.com/300x180?text=Xbox+Series+X'
  },
  {
    id: 8,
    category: 'Acessório',
    title: 'Teclado Mecânico Gamer',
    description:
      'Switches mecânicos premium com retroiluminação RGB personalizável e resposta ultra-rápida',
    originalPrice: 499.9,
    salePrice: 299.9,
    image: 'https://via.placeholder.com/300x180?text=Teclado+Mecanico+Gamer'
  }
]

const Promotions: React.FC = () => {
  // Função para calcular a porcentagem de desconto
  const calculateDiscount = (
    originalPrice: number,
    salePrice: number
  ): number => {
    const discount = ((originalPrice - salePrice) / originalPrice) * 100
    return Math.round(discount) // Arredonda para o número inteiro mais próximo
  }

  return (
    <S.PromotionsSection>
      <S.SectionHeader>
        <h2>Ofertas Imperdíveis</h2>
        <p>Economize em produtos selecionados por tempo limitado</p>
      </S.SectionHeader>

      <S.CardsContainer>
        {promotionItems.map((item) => {
          const discountPercentage = calculateDiscount(
            item.originalPrice,
            item.salePrice
          )

          return (
            <S.PromotionCard key={item.id}>
              <S.DiscountTag>-{discountPercentage}%</S.DiscountTag>
              <S.CategoryTag>{item.category}</S.CategoryTag>
              <S.CardImageWrapper>
                <S.CardImage src={item.image} alt={item.title} loading="lazy" />
              </S.CardImageWrapper>
              <S.CardContent>
                <S.CardTitle>{item.title}</S.CardTitle>
                <S.CardDescription>{item.description}</S.CardDescription>
                <S.PriceContainer>
                  <S.OriginalPrice>
                    R$ {item.originalPrice.toFixed(2)}
                  </S.OriginalPrice>
                  <S.SalePrice>R$ {item.salePrice.toFixed(2)}</S.SalePrice>
                </S.PriceContainer>
                <S.BuyButton>
                  <FaShoppingCart />
                  Comprar
                </S.BuyButton>
              </S.CardContent>
            </S.PromotionCard>
          )
        })}
      </S.CardsContainer>

      <S.ViewMoreContainer>
        <S.ViewMoreButton>
          Ver mais promoções
          <FaArrowRight />
        </S.ViewMoreButton>
      </S.ViewMoreContainer>
    </S.PromotionsSection>
  )
}

export default Promotions
