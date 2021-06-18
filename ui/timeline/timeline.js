import styled from 'styled-components'

import { Card } from 'ui'

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
      <Item key={item.id} data-date={item.date}>
        <Card {...item} />
      </Item>
    ))}
  </Wrapper>
)

const Wrapper = styled.div``

const Item = styled.div`
  border-left: 0.4rem solid ${({ theme }) => theme.colors.tertiary};
  padding-left: 6.6rem;
  padding-bottom: 12.4rem;
  position: relative;

  &:last-child {
    border-left-color: transparent;
  }

  &:before {
    content: attr(data-date);
    position: absolute;
    left: -13rem;
    top: 1.5rem;
    font-size: 2.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }

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
    margin-right: 6.6rem;
    position: absolute;
    left: -3.2rem;
    top: 0;
  }
`
