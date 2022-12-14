import { type TodoProps } from '~/lib/db.server'
import { updateTodo } from '~/lib/db.client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(updateTodo, {
    onMutate: async (updatedTodo) => {},
    onSettled: () => {},

    onError: (err, _updatedTodo, context) => {},
  })
}
