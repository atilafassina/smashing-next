import type { NextApiHandler } from 'next'

const addTodos: NextApiHandler = async (req, res) => {
  res.send({
    message: 'Add Todo endpoint',
  })

  return
}

export default addTodos
