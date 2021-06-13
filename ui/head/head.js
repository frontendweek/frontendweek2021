import Head from 'next/head'

const HeadComponent = () => {
  return (
    <Head>
      <title>Front-end Week 2021 &bull; 8ª Edição</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta itemProp="name" content="Front-end Week 2021 &bull; 8ª Edição" />
      <meta itemProp="image" content="/placeholder-600x600.jpg" />
      <meta itemProp="url" content="http://frontendweek.com.br/" />
      <meta itemProp="description" content="Confira a programação da 8ª edição da Front-End Week." />

      <meta property="og:title" content="Front-end Week 2021 &bull; 8ª Edição" />
      <meta property="og:image" content="/placeholder-240x240.jpg" />
      <meta property="og:url" content="http://frontendweek.com.br/" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Confira a programação da 8ª edição da Front-End Week." />

      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
      <meta name="theme-color" content="#000000" />

      <link rel='icon' href='/favicon-32x32.png' />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
    </Head>
  )
}

export { HeadComponent }
