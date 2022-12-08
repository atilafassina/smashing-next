import { SessionProvider, signOut } from 'next-auth/react'
import { LogoutIcon } from '~/components/logout-icon'
export default function DefaultLayout({ children }) {
  return (
    <SessionProvider>
      <button
        type="button"
        className="absolute text-purple-200 top-5 right-5 hover:outline-white focus:outline-white"
        onClick={() => signOut()}
      >
        Logout <LogoutIcon />
      </button>
      <main className="bg-black text-white overflow-x-hidden min-h-screen m-0 p-0 grid grid-rows-[auto,1fr,auto]">
        {children}
      </main>
    </SessionProvider>
  )
}
