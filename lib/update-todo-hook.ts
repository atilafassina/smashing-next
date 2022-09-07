import { type TodoProps } from '~/lib/db.server'
import { updateTodo } from '~/lib/db.client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(updateTodo, {
    onMutate: async (newTodo) => {
      await queryClient.cancelQueries(['todos'])

      const previousTodo: TodoProps = queryClient.getQueryData(['todos'])

      queryClient.setQueryData(['todos'], (list: TodoProps[]) => {
        return list.map((item) => (item.id === newTodo.id ? newTodo : item))
      })

      return { previousTodo, newTodo }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })
}
