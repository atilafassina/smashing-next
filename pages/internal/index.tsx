import { useQuery } from '@tanstack/react-query'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { getSession } from 'next-auth/react'
import { TodoAdd } from '~/components/todo-add'
import { TodoList } from '~/components/todo-list'
import InternalLayout from '~/layouts/internal'
import { fetchTodos } from '~/lib/db.server'

type InterPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

export default function InternalPage({ user }: InterPageProps) {
  if (!user) return <h1>💥 WE DON'T HAVE A USER!!!</h1>

  return (
    <header className="flex items-center justify-around w-full py-10 mx-auto max-w-prose">
      <img
        className="rounded-full shadow-md w-44 h-44 shadow-fuchsia-50 border-px border-fuchsia-200"
        src={user.image}
        alt={`${user.name} profile photo`}
      />
      <h1 className="h-full text-6xl">{user.name}</h1>
    </header>
  )
}

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const session = await getSession({ req })

  return {
    props: {
      user: session?.user || null,
    },
  }
}
