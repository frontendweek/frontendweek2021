import styled from 'styled-components'
import t from 'prop-types'

import { Card, media } from 'ui'

export const Timeline = ({ events }) => (
  <Wrapper>
    {events.map((item, index) => (
      <Item key={index}>
        <EventDate>{item.eventDate}</EventDate>
        <CardWrapper>
          <Card {...item} />
        </CardWrapper>
      </Item>
    ))}
  </Wrapper>
)

export const EventProps = t.shape({
  backgroundId: t.number.isRequired,
  eventName: t.string.isRequired,
  eventDate: t.string.isRequired,
  eventHour: t.string.isRequired,
  eventLinks: t.arrayOf(t.shape({
    name: t.string,
    url: t.string,
  })),
})

Timeline.propTypes = {
  events: t.arrayOf(EventProps),
}

const Wrapper = styled.div``

const EventDate = styled.p`
  display: none;
  padding-right: 5.5rem;
  margin: 1.7rem 0 0;
  font-size: 2.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  ${media.greaterThan('md')`
    display: block;
  `}
`

const Item = styled.div`
  display: flex;

  &:last-child {
    > div {
      border-left-color: transparent;
    }
  }
`

const CardWrapper = styled.div`
  flex: 1;
  padding-bottom: 12.4rem;
  position: relative;

  ${media.greaterThan('md')`
    border-left: 0.4rem solid ${({ theme }) => theme.colors.tertiary};
    padding-left: 6.6rem;

    &:after {
      content: url('./ic-calendar.svg');
      display: flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      background-color: #3A2457;
      border: 0.4rem solid ${({ theme }) => theme.colors.primary};
      position: absolute;
      left: -3.2rem;
      top: 0;
    }
  `}
`
