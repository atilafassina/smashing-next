export default function Footer() {
  return (
    <footer className="w-full font-mono bg-zinc-800">
      <div className="grid max-w-6xl grid-cols-1 gap-5 px-5 py-10 m-auto sm:px-0 sm:gap-0 sm:grid-cols-3 sm:place-items-center">
        <section className="self-start">
          <b className="block pb-2">Smashing</b>
          <ul className="grid grid-flow-row gap-y-2">
            <li>
              <a href="https://github.com/atilafassina/smashing-next">
                Github: src
              </a>
            </li>
            <li>
              <a href="https://smashingconf.com/online-workshops/workshops/advanced-nextjs-atila-fassina/">
                info: workshop
              </a>
            </li>
            <li>
              <a href="mailto: smashing@fassina.eu">email: feedback</a>
            </li>
          </ul>
        </section>
        <section className="self-start">
          <b className="block pb-2">Study more</b>
          <ul className="grid grid-flow-row gap-y-2">
            <li>
              <a href="https://www.smashingmagazine.com/2022/08/databases-frontend-developers-rise-serverless-databases/">
                The Rise of Serverless Databases
              </a>
            </li>
            <li>
              <a href="https://www.smashingmagazine.com/2021/06/breaking-down-bulky-builds-netlify-nextjs/">
                Next.js + Netlify On-Demand Builders
              </a>
            </li>
            <li>
              <a href="https://www.smashingmagazine.com/2021/08/state-management-nextjs/">
                Next.js State Management
              </a>
            </li>
          </ul>
        </section>
        <section className="self-start">
          <b className="block pb-2">Evergreen Links</b>
          <ul className="grid grid-flow-row gap-y-2">
            <li>
              <a href="https://atila.io/twitter">atila/twitter</a>
            </li>
            <li>
              <a href="https://atila.io/smashingmag">atila/smashing mag</a>
            </li>
            <li>
              <a href="https://smashingmagazine.com">smashing magazine</a>
            </li>
          </ul>
        </section>
        <a href="https://atila.io" className="block w-12 mt-10 sm:col-span-3">
          <object data="/atila-logo.svg" />
        </a>
      </div>
    </footer>
  )
}
