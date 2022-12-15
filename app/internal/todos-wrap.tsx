'use client'
import { useQuery } from '@tanstack/react-query'
import { getTodos } from '~/lib/db.client'
import { type TodoProps } from '~/lib/db.server'
import { TodoAdd } from '~/components/todo-add'
import { TodoList } from '~/components/todo-list'

type TodosProps = {
  userEmail: string
  initialTodos: TodoProps[]
}

export default function Todos({ initialTodos, userEmail }: TodosProps) {
  const { data: todoList } = useQuery(
    ['todos'],
    () => {
      return getTodos(userEmail)
    },
    {
      initialData: initialTodos,
    }
  )
  return (
    <div className="w-full">
      <TodoAdd userEmail={userEmail} />
      <TodoList list={todoList} />
    </div>
  )
}
