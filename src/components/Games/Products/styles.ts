import styled from 'styled-components'

export const ProductsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ProductsWrapper = styled.div`
  flex: 1;
  min-height: 100vh;
`

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ResultCount = styled.div`
  font-size: 0.9rem;
  color: #a1a1a1;
`

export const SortSelect = styled.select`
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    border-color: #4cc9f0;
    box-shadow: 0 0 0 2px rgba(76, 201, 240, 0.3);
  }

  option {
    background-color: #1a1a2e;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 1rem;
  }
`

export const NoResults = styled.div`
  text-align: center;
  padding: 3rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: #a1a1a1;
  font-size: 1.1rem;
  margin-top: 2rem;
`
