import type { AppProps } from 'next/app'
import Head from 'next/head'
import '~/styles/root.css'
import { Inter } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactElement, ReactNode, useState } from 'react'
import { NextPage } from 'next'

const inter = Inter({
  variable: '--font-inter',
})

const metas = {
  title: 'Advanced Next.js Masterclass',
  description:
    'Advanced Next.js Masterclass: a workshop by Atila Fassina and Smashing Magazine',
  image:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/og.jpg'
      : 'https://smashing-next.vercel.app/og.jpg',
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())

  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Head>
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
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  )
}
