import styled from 'styled-components'
import { lighten } from 'polished'

export const Button = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  text-align: 'center';
  border-radius: 0.4rem;
  padding: 1.6rem 5rem;
  transition: background-color .25s ease;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;

  &:focus,
  &:hover {
    background-color: ${({ theme }) => lighten(0.07, theme.colors.primary)};
  }
`
