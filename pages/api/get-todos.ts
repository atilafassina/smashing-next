import type { NextApiHandler } from 'next'
import { fetchTodos } from '~/lib/db.server'

const getTodos: NextApiHandler = async (_req, res) => {
  const todos = await fetchTodos()
  res.send(todos)
}

export default getTodos
