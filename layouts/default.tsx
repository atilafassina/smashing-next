import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function DefaultLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-black text-white overflow-x-hidden min-h-screen m-0 p-0 grid grid-rows-[auto,1fr,auto]">
        {children}
      </main>
    </QueryClientProvider>
  )
}
