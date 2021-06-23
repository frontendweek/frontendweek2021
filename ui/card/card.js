import styled from 'styled-components'
import { rgba } from 'polished'

import { Tag, GradientText, EventProps } from 'ui'

export const Card = ({ backgroundId, eventName, eventDate, eventHour, eventLinks }) => {
  const background = backgrounds[backgroundId]
  return (
    <Wrapper background={background}>
      <Title>{eventName}</Title>
      <Description>
        {eventDate} <GradientText>•</GradientText> {eventHour}
      </Description>
      <TagContainer>
        {eventLinks.map(({ name, url }, index) => (
          <Tag name={name} url={url} key={`${name}-${index}`} />
        ))}
      </TagContainer>
    </Wrapper>
  )
}

Card.propTypes = EventProps

const backgrounds = [
  { url: './card-bg-1.svg', position: 'right 6.4rem bottom 1.2rem' },
  { url: './card-bg-2.svg', position: 'right 1.2rem top 1.2rem' },
  { url: './card-bg-3.svg', position: 'right 1.2rem top 1.2rem' },
  { url: './card-bg-4.svg', position: 'right 2.4rem bottom 1.2rem' },
]

const Wrapper = styled.article`
  padding: 4rem 4.6rem 5rem;
  border-radius: 0.8rem;
  background-image: url(${({ background }) => background.url});
  background-repeat: no-repeat;
  background-position: ${({ background }) => background.position};
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
