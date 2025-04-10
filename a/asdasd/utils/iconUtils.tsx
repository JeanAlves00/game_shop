import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaWifi,
  FaHdd,
  FaGamepad,
  FaBluetooth,
  FaBatteryFull,
  FaBolt,
  FaHeadphones,
  FaKeyboard,
  FaMouse
} from 'react-icons/fa'
import { SiNintendoswitch, SiPlaystation, SiNintendo } from 'react-icons/si'

// Funções para renderizar ícones
export const renderPlatformIcon = (platform: string) => {
  switch (platform) {
    case 'PC':
      return <FaWindows />
    case 'PS':
      return <FaPlaystation />
    case 'Xbox':
      return <FaXbox />
    case 'Switch':
      return <SiNintendoswitch />
    default:
      return null
  }
}

export const renderManufacturerIcon = (manufacturer: string) => {
  switch (manufacturer) {
    case 'Sony':
      return <SiPlaystation />
    case 'Microsoft':
      return <FaXbox />
    case 'Nintendo':
      return <SiNintendo />
    default:
      return null
  }
}

export const renderCategoryIcon = (category: string) => {
  switch (category) {
    case 'Headset':
      return <FaHeadphones />
    case 'Controle':
      return <FaGamepad />
    case 'Teclado':
      return <FaKeyboard />
    case 'Mouse':
      return <FaMouse />
    case 'Game':
      return <FaGamepad />
    default:
      return null
  }
}

export const renderFeatureIcon = (feature: string) => {
  if (feature.includes('Wi-Fi')) return <FaWifi />
  if (feature.includes('SSD')) return <FaHdd />
  if (feature.includes('Bluetooth')) return <FaBluetooth />
  if (feature.includes('Joy-Cons') || feature.includes('Controle'))
    return <FaGamepad />
  if (feature.includes('Bateria')) return <FaBatteryFull />
  if (feature.includes('Rápido') || feature.includes('Resposta'))
    return <FaBolt />
  if (feature.includes('Headset') || feature.includes('Som'))
    return <FaHeadphones />
  return null
}

// Função para calcular desconto
export const calculateDiscount = (
  originalPrice: number,
  salePrice: number
): number => {
  const discount = ((originalPrice - salePrice) / originalPrice) * 100
  return Math.round(discount) // Arredonda para o número inteiro mais próximo
}

// Função para formatar preço
export const formatPrice = (price: number): string => {
  return `R$ ${price.toFixed(2)}`
}
