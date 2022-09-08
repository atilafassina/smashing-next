import type { InferGetStaticPropsType } from 'next'
import { useQuery } from '@tanstack/react-query'
import { InternalLayout } from '~/layouts/internal'
import { fetchTodos } from '~/lib/db.server'
import { getTodos } from '~/lib/db.client'
import { TodoAdd } from '~/components/todo-add'
import { TodoList } from '~/components/todo-list'

export default function TodosPage({
  todos,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { data: todoList } = useQuery(['todos'], getTodos, {
    initialData: todos,
    // refetchInterval: 5000,
  })

  return (
    <InternalLayout>
      <TodoAdd />
      <TodoList list={todoList} />
    </InternalLayout>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      todos: await fetchTodos(),
    },
  }
}
