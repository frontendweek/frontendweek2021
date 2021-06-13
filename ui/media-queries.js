import { generateMedia } from 'styled-media-query'
import { createMedia } from '@artsy/fresnel'

const SSRMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 900,
    lg: 1100,
    xl: 1300,
  },
})

const ssrMediaStyles = SSRMedia.createMediaStyle()
const { MediaContextProvider, Media } = SSRMedia

const media = generateMedia({
  small: '580px',
  medium: '900px',
  large: '1100px',
  xlarge: '1300px',
})

export { MediaContextProvider, Media, ssrMediaStyles, media }
