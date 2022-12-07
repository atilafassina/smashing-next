import 'server-only'
import { getXataClient } from './xata.codegen.server'

const xata = getXataClient()

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
