import DefaultLayout from '~/layouts/default'
import Footer from '~/components/footer'

const IndexPage = () => (
  <DefaultLayout>
    <header className="grid place-items-center">
      <object
        className="py-10 max-w-[90%]"
        data="/logo-course.svg"
        aria-label="Advanced Next.js Masterclass"
      />
    </header>
    <article className="grid py-20 text-center place-items-center">
      <p className="text-2xl max-w-screen">
        Let’s dive deep on how to build a fullstack application with:
      </p>
      <ul className="grid grid-cols-1 gap-10 px-4 my-10 max-w-screen md:grid-cols-2">
        <li className="grid px-4 py-12 text-4xl border-2 border-teal-300 shadow-md shadow-teal-400 rounded-3xl place-items-center">
          Data Layer
        </li>
        <li className="grid px-4 py-12 text-4xl border-2 shadow-md border-fuchsia-300 shadow-fuchsia-400 rounded-3xl place-items-center">
          State Management
        </li>
        <li className="grid px-4 py-12 text-4xl border-2 shadow-md border-cyan-300 shadow-cyan-400 rounded-3xl place-items-center">
          Performance Optimizations
        </li>
        <li className="grid px-4 py-12 text-4xl border-2 shadow-md border-rose-300 shadow-rose-400 rounded-3xl place-items-center">
          Security Best-Practices
        </li>
      </ul>
      <p className="max-w-2xl text-2xl">
        ...and review releases from Next.js Conf 2022{' '}
        <span role="img" aria-label="fireball">
          🔥
        </span>
      </p>
      <a
        className="px-10 py-5 text-5xl text-black transition-transform border-2 border-orange-400 rounded-lg shadow-md mt-36 bg-gradient-to-tr from-orange-600 via-amber-400 to-yellow-200 shadow-orange-500 hover:scale-125 focus:scale-125"
        href="https://smashingconf.com/online-workshops/workshops/advanced-nextjs-atila-fassina"
        target="_blank"
        rel="noopener"
      >
        Learn more
      </a>
    </article>
    <Footer />
  </DefaultLayout>
)

export default IndexPage
