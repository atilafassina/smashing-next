import type { NextApiHandler } from 'next'
import { addTodo } from '~/lib/db.server'

const addTodos: NextApiHandler = async (req, res) => {
  const message = JSON.parse(req.body)
  const todo = await addTodo(message)

  res.send(todo)
}

export default addTodos
