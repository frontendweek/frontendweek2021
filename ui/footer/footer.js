import styled from 'styled-components'
import { useState } from 'react'
import { rgba } from 'polished'

import { CodeOfConduct, media, Modal } from 'ui'

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Wrapper>
        <div>
          <SectionTitle>Apoio</SectionTitle>
          <Supporters>
            <a href='https://portolab.com.br'>
              <img src='/portolab-logo.svg' width={190} height={99} alt="Portolab" />
            </a>
            <a href='https://github.com/frontendbr'>
              <img src='/frontendbr-logo.svg' width={190} height={99} alt="Front-endBR"/>
            </a>
          </Supporters>
        </div>
        <div>
          <SectionTitle>Entre em contato</SectionTitle>
          <LinkList>
            <li><SectionLink href='mailto:frontendweekbr@gmail.com'>frontendweekbr@gmail.com</SectionLink></li>
            <li><SectionLink href='https://twitter.com/frontendweek'>@frontendweek</SectionLink></li>
          </LinkList>
        </div>
        <div>
          <SectionTitle>Edições anteriores</SectionTitle>
          <LinkList>
            <li><SectionLink href='http://2020.frontendweek.com.br'>2020</SectionLink></li>
            <li><SectionLink href='http://2019.frontendweek.com.br'>2019</SectionLink></li>
            <li><SectionLink href='http://2018.frontendweek.com.br'>2018</SectionLink></li>
            <li><SectionLink href='http://2017.frontendweek.com.br'>2017</SectionLink></li>
          </LinkList>
        </div>
        <div>
          <SectionTitle>Legal</SectionTitle>
          <LinkList>
            <li><SectionLink as='button' onClick={openModal}>Código de conduta</SectionLink></li>
          </LinkList>
        </div>
      </Wrapper>
      <Modal isOpen={isOpen} handleClose={closeModal}>
        <CodeOfConduct />
      </Modal>
    </>
  )
}

const Wrapper = styled.footer`
  display: grid;
  gap: 6rem;
  grid-template-rows: 1fr 1fr 1fr, 1fr;
  justify-content: space-between;
  padding: 10.2rem 1.5rem;
  width: 100%;
  max-width: 134.5rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.greaterThan('md')`
    grid-template-columns: 2fr 1fr 1fr 1fr;
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
  appearance: none;
  background-color: transparent;
  border: none;
  display: inline-block;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0 0 0.8rem;
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
