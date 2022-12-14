import { getSession } from 'next-auth/react'
import Link from 'next/link'
import { GithubLogin } from '~/components/github-login'
import { ExternalLayout } from '~/layouts/external'

const IndexPage = async ({ params }) => {
  const session = await getSession(params)
  const isAuthenticated = Boolean(session)

  if (!isAuthenticated) {
    return (
      <ExternalLayout>
        <GithubLogin />
      </ExternalLayout>
    )
  }

  return (
    <ExternalLayout>
      <Link
        href="/internal"
        className="px-10 py-5 text-5xl text-black transition-transform border-2 rounded-lg shadow-md border-fuchsia-400 mt-36 bg-gradient-to-tr from-slate-400 to-purple-400 shadow-purple-500 hover:scale-125 focus:scale-125"
      >
        Start doing
      </Link>
    </ExternalLayout>
  )
}

export default IndexPage
