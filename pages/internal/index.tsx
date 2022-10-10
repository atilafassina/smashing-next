import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import { useQuery } from '@tanstack/react-query'
import { InternalLayout } from '~/layouts/internal'
import { fetchTodos } from '~/lib/db.server'
import { getTodos } from '~/lib/db.client'
import { TodoAdd } from '~/components/todo-add'
import { TodoList } from '~/components/todo-list'
import { getSession } from 'next-auth/react'

export default function TodosPage({
  todos,
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: todoList } = useQuery(
    ['todos'],
    () => {
      return getTodos(user.email)
    },
    {
      initialData: todos,
      // refetchInterval: 5000,
    }
  )

  if (!user) return null

  return (
    <InternalLayout>
      {user && (
        <header className="flex items-center justify-around w-full py-10 mx-auto max-w-prose">
          <img
            className="rounded-full shadow-md w-44 h-44 shadow-fuchsia-50 border-px border-fuchsia-200"
            src={user.image}
            alt={`${user.name} profile photo`}
          />
          <h1 className="h-full text-6xl">{user.name}</h1>
        </header>
      )}
      <TodoAdd userEmail={user.email} />
      <TodoList list={todoList} />
    </InternalLayout>
  )
}

export const getServerSideProps = async ({
  req,
  res,
}: GetServerSidePropsContext) => {
  /**
   * better but still experimental
   * const session = await unstable_getServerSession(req, res, authOptions)
   */
  const session = await getSession({ req })

  return {
    props: {
      user: session?.user,
      todos: await fetchTodos(session?.user.email),
    },
  }
}
