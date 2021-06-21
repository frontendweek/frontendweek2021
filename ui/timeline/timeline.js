import styled from 'styled-components'

import { Card, media } from 'ui'

const tempData = [
  {
    id: 11,
    title: 'Meetup Front-end SP',
    date: '12/07',
    time: '20h',
    tags: [
      {
        name: 'Twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'Youtube',
        url: 'https://youtube.com',
      },
    ],
  },
  {
    id: 12,
    title: 'Meetup HTML',
    date: '13/07',
    time: '20h',
    tags: [
      {
        name: 'Twitter',
        url: 'https://twitter.com',
      },
    ],
  },
  {
    id: 13,
    title: 'Meetup HTML',
    date: '14/07',
    time: '20h',
    tags: [
      {
        name: 'Twitter',
        url: 'https://twitter.com',
      },
    ],
  },
  {
    id: 14,
    title: 'Meetup HTML',
    date: '15/07',
    time: '20h',
    tags: [
      {
        name: 'Twitter',
        url: 'https://twitter.com',
      },
    ],
  },
]

export const Timeline = () => (
  <Wrapper>
    {tempData.map(item => (
      <Item key={item.id}>
        <EventDate>{item.date}</EventDate>
        <CardWrapper>
          <Card {...item} />
        </CardWrapper>
      </Item>
    ))}
  </Wrapper>
)

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
