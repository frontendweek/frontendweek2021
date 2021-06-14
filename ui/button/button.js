import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: 'center';
  border-radius: 0.4rem;
  padding: 1.6rem 5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`
