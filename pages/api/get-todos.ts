import type { NextApiHandler } from 'next'
import { fetchTodos } from '~/lib/db.server'

const updateTodo: NextApiHandler = async (req, res) => {
  const userEmail = req.query.userEmail as string
  const todos = await fetchTodos(userEmail)

  res.send(todos)

  return
}

export default updateTodo
