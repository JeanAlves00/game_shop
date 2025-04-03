import styled from 'styled-components'

export const GamesPageContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px); /* Considerando um header de 80px */
  background-color: #191a2a;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
