import { fetchTodos } from '~/lib/db.server'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}
const updateTodo = async (req: NextRequest) => {
  const { searchParams } = new URL(req.nextUrl)
  const userEmail = searchParams.get('userEmail')

  const todos = await fetchTodos(userEmail)

  const res = new Response(JSON.stringify(todos), { status: 200 })

  return res
}

export default updateTodo
