import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import { TodoAdd } from '~/components/todo-add'
import { TodoList } from '~/components/todo-list'
import DefaultLayout from '~/layouts/default'
import InternalLayout from '~/layouts/internal'
import { getTodos } from '~/lib/db.client'
import { fetchTodos } from '~/lib/db.server'

type InterPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function InternalPage({ user, todos }: InterPageProps) {
  if (!user) return <h1>💥 WE DON'T HAVE A USER!!!</h1>

  const { data: todoList } = useQuery(
    ['todos'],
    () => {
      return getTodos(user.email)
    },
    {
      initialData: todos,
    }
  )

  return (
    <InternalLayout>
      <header className="flex items-center justify-around w-full py-10 mx-auto max-w-prose">
        <img
          className="rounded-full shadow-md w-44 h-44 shadow-fuchsia-50 border-px border-fuchsia-200"
          src={user.image}
          alt={`${user.name} profile photo`}
        />
        <h1 className="h-full text-6xl">{user.name}</h1>
      </header>
      <div className="w-full">
        <TodoAdd userEmail={user.email} />
        <TodoList list={todoList} />
      </div>
    </InternalLayout>
  )
}

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const session = await getSession({ req })
  const todos = await fetchTodos(session.user.email)

  return {
    props: {
      user: session?.user,
      todos,
    },
  }
}
