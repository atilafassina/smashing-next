import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}
import { toggleTodo } from '~/lib/db.server'

const updateTodo = async (req: NextRequest) => {
  const { id, is_done } = await req.json()
  const updatedTodo = await toggleTodo(id, is_done)

  const res = new Response(JSON.stringify(updatedTodo), {
    status: 200,
  })
  return res
}

export default updateTodo
