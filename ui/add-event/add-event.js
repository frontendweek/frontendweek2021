import styled from 'styled-components'

import { Button } from 'ui'

export const AddEvent = () => (
  <Wrapper>
    <Text>Você organiza algum <b>evento</b> de front-end e deseja adicionar nesta lista?</Text>
    <Button as='a' href='https://github.com/frontendweek/frontendweek2021'>Adicionar evento</Button>
  </Wrapper>
)

const Wrapper = styled.section`
  text-align: center;
`

const Text = styled.p`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-style: normal;
  font-weight: bold;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text};
  /* text-align: center; */
  margin-bottom: 5.6rem;

  > b {
    color: ${({ theme }) => theme.colors.primary};
  }
`
