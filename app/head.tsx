const metas = {
  title: 'Advanced Next.js Masterclass',
  description:
    'Advanced Next.js Masterclass: a workshop by Atila Fassina and Smashing Magazine',
  image:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/og.jpg'
      : 'https://smashing-next.vercel.app/og.jpg',
}

export default function Head() {
  return (
    <head>
      <title>{metas.title}</title>

      <meta property="og:title" content={metas.title} key="og:title" />
      <meta property="og:image" content={metas.image} key="og:image" />
      <meta
        property="description"
        content={metas.description}
        key="description"
      />
      <meta
        property="og:description"
        content={metas.description}
        key="og:description"
      />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content={metas.title}
        key="twitter:title"
      />
      <meta
        property="twitter:description"
        content={metas.description}
        key="twitter:description"
      />
      <meta
        property="twitter:image"
        content={metas.image}
        key="twitter:image"
      />
      <meta
        name="theme-color"
        content="#000"
        media="(prefers-color-scheme: dark)"
      />
      <meta
        name="theme-color"
        content="#fff"
        media="(prefers-color-scheme: light)"
      />
    </head>
  )
}
