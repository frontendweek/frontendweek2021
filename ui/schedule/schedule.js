import styled from 'styled-components'

import { Container, Timeline } from 'ui'

export const Schedule = () => (
  <Wrapper>
    <Container>
      <Title>Programação</Title>
      <Timeline />
    </Container>
  </Wrapper>
)

const Wrapper = styled.section`
  background-color: #121212;
  padding: 18rem 0;
  clip-path: polygon(0% 5rem, 100% 0%, 100% 100%, 0% 100%);
`

const Title = styled.h2`
  font-size: 4.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 11.5rem;
`
