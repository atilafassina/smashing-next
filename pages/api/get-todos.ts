import type { NextApiHandler } from 'next'

const updateTodo: NextApiHandler = async (req, res) => {
  res.send({
    message: 'Get Todos',
  })

  return
}

export default updateTodo
