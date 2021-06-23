import styled from 'styled-components'
import { splitEvery, pipe, map, addIndex, assoc, flatten } from 'ramda'
import { Container, Timeline, AddEvent } from 'ui'

import events from '../../events.json'

export const Schedule = () => {
  return (
    <Wrapper>
      <Container id="events">
        <Title>Programação</Title>
        <Timeline events={eventList} />
        <AddEvent />
      </Container>
    </Wrapper>
  )
}

const mapI = addIndex(map)

const addBackgroundId = (events) =>
  pipe(
    splitEvery(4),
    map(mapI((event, id) => assoc('backgroundId', id, event))),
    flatten
  )(events)

const eventList = addBackgroundId(events.events)

const Wrapper = styled.section`
  background-color: #121212;
  padding: 18rem 0;
  clip-path: polygon(0% 5rem, 100% 0%, 100% 97%, 0% 100%);
`

const Title = styled.h2`
  font-size: 4.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 11.5rem;
`
