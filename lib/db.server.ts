import { getXataClient, type TodosRecord } from './xata.codegen.server'

const xata = getXataClient()

export type TodoProps = {
  id: string
  message: string
  is_done: boolean
  created_at: string // Date's ISOString
}

export type AddTodoParams = {
  todo: TodoProps
  userEmail: string
}

export type TodoRecords = Awaited<ReturnType<typeof fetchTodos>>

export const addTodo = async () => {}

export const fetchTodos = async (email: string) => {
  const todos = await xata.db.todos
    .filter({
      user: {
        email,
      },
    })
    .sort('created_at', 'desc')
    .getAll()

  return todos.map((item) => ({
    ...item,
    created_at: item.created_at.toISOString(),
  }))
}

export const getTodoByMessage = async () => {}

export const toggleTodo = async () => {}
