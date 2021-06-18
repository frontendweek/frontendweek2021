import styled from 'styled-components'
import t from 'prop-types'
import { rgba } from 'polished'

import { Tag, GradientText } from 'ui'

export const Card = ({ title, date, time, tags }) => (
  <Wrapper>
    <Title>Meetup Front-end SP</Title>
    <Description>{date} <GradientText>•</GradientText> {time}</Description>
    <TagContainer>
      {tags.map(({ name, url }, index) => (
        <Tag name={name} url={url} key={`${name}-${index}`} />
      ))}
    </TagContainer>
  </Wrapper>
)

Card.propTypes = {
  title: t.string,
  date: t.string,
  time: t.string,
  tags: t.arrayOf(t.shape({
    name: t.string,
    url: t.string,
  })),
}

const Wrapper = styled.article`
  padding: 4rem 4.6rem 5rem;
  border-radius: 0.8rem;
  background-image: url('./card-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-color: ${({ theme }) => rgba(theme.colors.text, 0.05)};
`

const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 1rem;
`

const Description = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.3;
  margin: 0 0 4.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const TagContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`
