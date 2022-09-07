import type { TodoRecords, TodoProps } from './db.server'

export const getTodos = async () => {
  const res = await fetch('/api/get-todos')
  const todos: TodoRecords = await res.json()

  return todos
}

export const updateTodo = async (checkbox: {
  id: string
  checked: boolean
  message: string
}) => {
  const res = await fetch('/api/update-todo', {
    method: 'post',
    body: JSON.stringify({
      id: checkbox.id,
      is_done: checkbox?.checked,
    }),
  })
  const newTodo = await res.json()
  return newTodo
}

export const addTodo = async (newTodo: TodoProps) => {
  const response = await fetch('/api/add-todo', {
    method: 'post',
    body: JSON.stringify(newTodo),
  })

  return response
}
