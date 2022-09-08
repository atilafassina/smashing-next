import { Footer } from '~/components/footer'

export function ExternalLayout({ children }) {
  return (
    <>
      <header className="grid place-items-center">
        <object
          className="mt-32 max-w-[90%]"
          data="/logo-course.svg"
          aria-label="Advanced Next.js Masterclass"
        />
      </header>
      <article className="grid py-20 text-center place-items-center">
        {children}
      </article>
      <Footer />
    </>
  )
}
