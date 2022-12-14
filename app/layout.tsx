import { type ReactNode } from 'react'
import { Inter } from '@next/font/google'
import '~/styles/root.css'
import Providers from './providers'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-black text-white overflow-x-hidden min-h-screen m-0 p-0 grid grid-rows-[auto,1fr,auto]`}
      >
        {children}
      </body>
    </html>
  )
}
