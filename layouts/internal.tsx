import { type ReactNode } from 'react'
import DefaultLayout from '~/layouts/default'
import { SessionProvider } from 'next-auth/react'
import { LogoutButton } from '~/components/logout-button'

export default function InternalLayout({ children }: { children: ReactNode }) {
  return (
    <DefaultLayout>
      <SessionProvider>
        <LogoutButton />
        {children}
      </SessionProvider>
    </DefaultLayout>
  )
}
