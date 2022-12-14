import { type TodoProps } from '~/lib/db.server'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { addTodo } from '~/lib/db.client'

export const useAddTodo = () => {
  const queryClient = useQueryClient()

  return
}
