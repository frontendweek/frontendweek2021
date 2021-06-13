import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ssrMediaStyles } from 'ui'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            <style
              type='text/css'
              dangerouslySetInnerHTML={{ __html: ssrMediaStyles }}
            />
            {initialProps.styles}
            {sheet.getStyleElement()}
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-46060404-4');`,
            }}
            />
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
