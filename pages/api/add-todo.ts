import type { NextApiHandler } from 'next'
import { addTodo, fetchTodos, getTodoByMessage } from '~/lib/db.server'

// let attempt = 0

const addTodos: NextApiHandler = async (req, res) => {
  // attempt++

  // if (attempt % 3 === 0) {
  const { userEmail, newTodo } = JSON.parse(req.body)
  const todo = await addTodo({ todo: newTodo, userEmail })
  res.send(todo)

  return
  // } else {
  //   res.status(400).json({
  //     message: 'D-D-D-DYANAMITE 🧨',
  //   })
  // }
}

export default addTodos
