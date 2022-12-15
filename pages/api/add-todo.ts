import type { NextRequest } from 'next/server'
import { addTodo } from '~/lib/db.server'

export const config = {
  runtime: 'experimental-edge',
}

// let attempt = 0

const addTodos = async (req: NextRequest) => {
  // attempt++

  const body = req.body
  // if (attempt % 3 === 0) {
  const { userEmail, newTodo } = await req.json()

  const todo = await addTodo({ todo: newTodo, userEmail })
  const res = new Response(
    JSON.stringify({
      todo,
    }),
    { status: 200 }
  )

  return res
  // } else {
  //   res.status(400).json({
  //     message: 'DYNAMITE 🧨',
  //   })
  // }
}

export default addTodos
