import type { NextApiHandler } from 'next'
import { addTodo, fetchTodos, getTodoByMessage } from '~/lib/db.server'

const addTodos: NextApiHandler = async (req, res) => {
  const { userEmail, newTodo } = JSON.parse(req.body)
  const todo = await addTodo({ todo: newTodo, userEmail })

  res.send(todo)
}

export default addTodos
