import { type ReactNode } from 'react'
import Providers from '../providers'
import Logout from './logout'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <article className="grid py-20 text-center place-items-center">
        <Logout />
        {children}
      </article>
    </Providers>
  )
}
