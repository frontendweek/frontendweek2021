import styled from 'styled-components'
import t from 'prop-types'
import { lighten } from 'polished'

export const Tag = ({ name, url }) => (
  <Wrapper href={url}>
    <Label>{name}</Label>
  </Wrapper>
)

Tag.propTypes = {
  name: t.string,
  url: t.string,
}

const Wrapper = styled.a`
  text-decoration: none;
  display: inline-block;
  border-radius: 0.4rem;
  padding: 0.4rem 1.6rem;
  transition: background-color .25s ease;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => lighten(0.07, theme.colors.primary)};
  }
`

const Label = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`
