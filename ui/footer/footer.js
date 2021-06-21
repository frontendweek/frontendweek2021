import styled from 'styled-components'
import { rgba } from 'polished'

import { media } from 'ui'

export const Footer = () => (
  <Wrapper>
    <div>
      <SectionTitle>Apoio</SectionTitle>
      <Supporters>
        <a href='https://github.com/frontendbr'>
          <img src='/frontendbr-logo.svg' width={217} height={99} alt="Front-endBR"/>
        </a>
        <a href='https://portolab.com.br'>
          <img src='/portolab-logo.svg' width={217} height={99} alt="Portolab" />
        </a>
      </Supporters>
    </div>
    <div>
      <SectionTitle>Entre em contato</SectionTitle>
      <LinkList>
        <li><SectionLink href='mailto:frontendweek@gmail.com'>frontendweek@gmail.com</SectionLink></li>
        <li><SectionLink href='https://twitter.com/frontendweek'>@frontendweek</SectionLink></li>
      </LinkList>
    </div>
    <div>
      <SectionTitle>Legal</SectionTitle>
      <LinkList>
        <li><SectionLink href='#'>Código de conduta</SectionLink></li>
      </LinkList>
    </div>
  </Wrapper>
)

const Wrapper = styled.footer`
  display: grid;
  gap: 6rem;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: space-between;
  padding: 10.2rem 1.5rem;
  width: 100%;
  max-width: 134.5rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.greaterThan('md')`
    grid-template-columns: 2fr 1.5fr 1fr;
    grid-template-rows: 1fr;
    gap: 3rem;
  `}
`

const SectionTitle = styled.h4`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 3.2rem;
`

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
`

const SectionLink = styled.a`
  display: inline-block;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding-bottom: 0.8rem;
  border-bottom: 1px dashed ${({ theme }) => rgba(theme.colors.text, 0.3)};
  transition: border-bottom-color .25s ease;

  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.primary};
  }
`

const Supporters = styled.div`
  display: flex;
  gap: 5rem;

  * {
    align-self: self-start;
  }

  img {
    display: block;
    max-width: 100%;
  }
`
