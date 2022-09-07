export default function InternalLayout({ children }) {
  return (
    <>
      {/* <header className="grid place-items-center">
        <h1>Let's start doing stuff!</h1>
      </header> */}
      <article className="grid py-20 text-center place-items-center">
        {children}
      </article>
    </>
  )
}
