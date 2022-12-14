import { type Session } from 'next-auth'
import { headers } from 'next/headers'
import { fetchTodos } from '~/lib/db.server'
import Todos from './todos'

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  })

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export default async function Dashboard() {
  const cookie = headers().get('cookie') ?? ''
  const session = await getSession(cookie)

  if (!session) {
    return <h1>no user</h1>
  }

  const { user } = session
  const todos = await fetchTodos(user.email)

  return (
    <>
      <header className="flex items-center justify-around w-full py-10 mx-auto max-w-prose">
        <img
          className="rounded-full shadow-md w-44 h-44 shadow-fuchsia-50 border-px border-fuchsia-200"
          src={user.image}
          alt={`${user.name} profile photo`}
        />
        <h1 className="h-full text-6xl">{user.name}</h1>
      </header>
      <Todos userEmail={user.email} todos={todos} />
    </>
  )
}
