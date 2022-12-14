import type { NextApiHandler } from 'next'

const updateTodo: NextApiHandler = async (req, res) => {
  res.send({
    message: 'Updated Todo endpoint',
  })

  return
}

export default updateTodo
