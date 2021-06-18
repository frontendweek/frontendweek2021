import styled from 'styled-components'

export const GradientText = styled.span`
  font-size: 4rem;
  background: ${({ theme }) => `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`
