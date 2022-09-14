import { getXataClient, TodosRecord } from '~/lib/xata.codegen.server'
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

export const addTodo = async ({ todo, userEmail }: AddTodoParams) => {
  const user = await xata.db.users.filter({ email: userEmail }).getFirst()

  return xata.db.todos.create({
    ...todo,
    created_at: new Date(todo.created_at),
    user: user.id,
  })
}

export type TodoRecords = Awaited<ReturnType<typeof fetchTodos>>

export const getTodoByMessage = async (message: string) => {
  const todo = await xata.db.todos.filter({ message }).getFirst()

  return todo
}

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

export const toggleTodo = async (
  id: TodosRecord['id'],
  is_done: TodosRecord['is_done']
) => {
  const newTodo = await xata.db.todos.update({ id, is_done })

  return newTodo
}
