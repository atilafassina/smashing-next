import { ReactNode } from 'react'
import { LogoutButton } from '~/components/logout-button'
import AuthProvider from './auth-provider'

export default function InternalLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <LogoutButton />
      {children}
    </AuthProvider>
  )
}
