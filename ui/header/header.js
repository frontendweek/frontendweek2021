import styled from 'styled-components'
import { motion } from 'framer-motion'

import { media } from 'ui'

export const Header = () => (
  <Wrapper
    initial='hidden'
    animate='visible'
    variants={motionWrapper}
  >
    <Text>8ª Edição</Text>
    <Text
      as='a'
      href='https://twitter.com/frontendweek'
      target='_blank'
    >@frontendweek</Text>
  </Wrapper>
)

const motionWrapper = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.6,
    },
  },
}

const Wrapper = styled(motion.header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12rem;
  padding: 4rem 1.5rem;
  width: 100%;
  max-width: 134.5rem;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};

  ${media.lessThan('md')`
    height: 8rem;
  `}
`

const Text = styled.p`
  text-decoration: none;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 600;
  transition: color .25s ease;
  color: ${({ theme }) => theme.colors.text};

  &[href]:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
