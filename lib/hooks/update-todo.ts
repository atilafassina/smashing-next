import { type TodoProps } from '~/lib/db.server'
import { updateTodo } from '~/lib/db.client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation(updateTodo, {
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries(['todos', updatedTodo.id])

      const previousTodos = queryClient.getQueryData<TodoProps[]>(['todos'])

      queryClient.setQueryData(['todos'], (list: TodoProps[]) => {
        return list.map((item) =>
          item.id === updatedTodo.id ? updatedTodo : item
        )
      })

      return { previousTodos, updatedTodo }
    },
    onSettled: () => {
      queryClient.invalidateQueries(['todos'])
    },

    onError: (err, _updatedTodo, context) => {
      console.log(err)
      queryClient.setQueryData(['todos'], context.previousTodos)
    },
  })
}
