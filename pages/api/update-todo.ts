import type { NextApiHandler } from 'next'
import { toggleTodo } from '~/lib/db.server'

const updateTodo: NextApiHandler = async (req, res) => {
  const { id, is_done } = JSON.parse(req.body)
  const updatedTodo = await toggleTodo(id, is_done)

  res.send(updatedTodo)
}

export default updateTodo
