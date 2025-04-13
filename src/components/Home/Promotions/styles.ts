import styled from 'styled-components'

export const PromotionsSection = styled.section`
  padding: 60px 0;
  background: ${({ theme }) => `linear-gradient(135deg,
    ${theme.colors.background.main} 0%,
    ${theme.colors.background.secondary} 100%)`};
`

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-size: 2.8rem;
  font-weight: 800;
  background: ${({ theme }) => theme.colors.border.highlight};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`

export const SectionDescription = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 40px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.6;
`

export const PromoTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 15px;
`

export const PromoTab = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : 'transparent'};
  color: ${({ $active, theme }) =>
    $active ? 'white' : theme.colors.text.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : 'rgba(247, 37, 133, 0.1)'};
  }

  ${({ $active, theme }) =>
    $active &&
    `
    // Estilos quando ativo
    // Por exemplo:
    // background-color: ${theme.colors.primary};
    // color: ${theme.colors.white};
  `}
`

export const HighlightBanner = styled.div`
  background: ${({ theme }) => theme.colors.background.gradient};
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/pattern.png') repeat;
    opacity: 0.05;
    z-index: 1;
  }
`

export const BannerContent = styled.div`
  flex: 1;
  z-index: 2;
  padding: 20px;

  @media (min-width: 768px) {
    padding-right: 40px;
  }
`

export const BannerTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.text.highlight};
`

export const BannerDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
`

export const BannerPrice = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 25px;
`

export const OldPrice = styled.span`
  text-decoration: line-through;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.2rem;
  margin-right: 15px;
`

export const NewPrice = styled.span`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const BannerButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`

export const BannerImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  img {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain;
    transform: scale(1.1);
    transition: transform 0.5s ease;
    border-radius: 20px;

    &:hover {
      transform: scale(1.15);
    }
  }
`

export const CountdownContainer = styled.div`
  display: inline-flex;
  margin-bottom: 25px;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 50px;
`

export const CountdownLabel = styled.span`
  margin-right: 15px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.text.highlight};
`

export const CountdownTime = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`
