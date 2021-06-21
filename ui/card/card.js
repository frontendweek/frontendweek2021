import styled from 'styled-components'
import { rgba } from 'polished'

import { Tag, GradientText, EventProps } from 'ui'

export const Card = ({ eventName, eventDate, eventHour, eventLinks }) => (
  <Wrapper>
    <Title>{eventName}</Title>
    <Description>{eventDate} <GradientText>•</GradientText> {eventHour}</Description>
    <TagContainer>
      {eventLinks.map(({ name, url }, index) => (
        <Tag name={name} url={url} key={`${name}-${index}`} />
      ))}
    </TagContainer>
  </Wrapper>
)

Card.propTypes = EventProps

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
  flex-wrap: wrap;
  gap: 1.6rem;
`
