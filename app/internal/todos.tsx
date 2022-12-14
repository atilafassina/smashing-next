'use client'

import { useQuery } from '@tanstack/react-query'
import { getTodos } from '~/lib/db.client'
import { type TodoProps } from '~/lib/db.server'
import { TodoAdd } from '~/components/todo-add'
import { TodoList } from '~/components/todo-list'

export default function Todos({
  todos,
  userEmail,
}: {
  todos: TodoProps[]
  userEmail: string
}) {
  const { data: todoList } = useQuery(
    ['todos'],
    () => {
      return getTodos(userEmail)
    },
    {
      initialData: todos,
      // refetchInterval: 5000,
    }
  )

  return (
    <>
      <TodoAdd userEmail={userEmail} />
      <TodoList list={todoList} />
    </>
  )
}
