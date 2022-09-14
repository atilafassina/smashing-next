export function DefaultLayout({ children }) {
  return (
    <main className="bg-black text-white overflow-x-hidden min-h-screen m-0 p-0 grid grid-rows-[auto,1fr,auto]">
      {children}
    </main>
  )
}
