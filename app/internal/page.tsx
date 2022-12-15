import { unstable_getServerSession } from 'next-auth'
import { fetchTodos } from '~/lib/db.server'
import { authOption } from '~/pages/api/auth/[...nextauth]'
import Todos from './todos-wrap'

export default async function InternalPage() {
  const { user } = await unstable_getServerSession(authOption)
  const todos = await fetchTodos(user.email)

  if (!user) return <h1>💥 WE DON'T HAVE A USER!!!</h1>

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
      <Todos userEmail={user.email} initialTodos={todos} />
    </>
  )
}
