import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { media, Container, Button, GradientText } from 'ui'

const makeAnimation = delay => ({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.6,
      },
    },
  },
})

export const Hero = () => (
  <Container>
    <Wrapper>
      <MotionWrapper {...makeAnimation(0.6)}>
        <Image src='/hero.svg' width={477} height={170} />
      </MotionWrapper>
      <Text {...makeAnimation(0.7)}>Edição Online <GradientText>•</GradientText> de 12 a 16 de Julho de 2021</Text>
      <MotionWrapper {...makeAnimation(0.8)}>
        <Button>Ver programação</Button>
      </MotionWrapper>
    </Wrapper>
  </Container>
)

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12rem 0 9rem;

  ${media.greaterThan('md')`
    height: 100vh;
    padding: 20rem 0 20rem;
  `}
`

const MotionWrapper = styled(motion.div)``

const Text = styled(motion.p)`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 5.6rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 1rem;
`
