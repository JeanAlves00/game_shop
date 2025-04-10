import styled from 'styled-components'

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 20px;
  padding: 0.3rem 0.8rem;

  input {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.input.text};
    outline: none;
    padding: 0.3rem;
    width: 90%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.input.placeholder};
    }
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
    padding: 0.3rem;

    .mobile-menu & {
      display: flex;
      width: 100%;
      margin: 0.5rem 0 1rem;

      input {
        padding: 0.5rem;
      }
    }
  }
`
