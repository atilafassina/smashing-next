import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import { SuccessToast } from './success-toast'
import { useAddTodo } from '~/lib/hooks/add-todo'
import {
  ADD_TODO_CONTAINER_STYLES,
  ADD_TODO_WRAPPER_STYLES,
  ADD_TODO_FORM_STYLES,
  ADD_TODO_FIELD_WRAPPER,
  ADD_TODO_FIELD_CONTAINER,
  ADD_TODO_LABEL,
  ADD_TODO_INPUT,
  ADD_TODO_SUBMIT,
} from '~/styles/add-todo-classes'

export function TodoAdd({ userEmail }) {
  const addTodo = useAddTodo(userEmail)
  const [newTodoMessage, setNewTodoMessage] = useState('')

  useEffect(() => {
    let clearMutation = undefined

    if (addTodo.isSuccess) {
      setNewTodoMessage('')

      clearMutation = setTimeout(() => {
        addTodo.reset()
      }, 5000)
    }
  }, [addTodo.isSuccess])

  return (
    <>
      <div className={ADD_TODO_WRAPPER_STYLES}>
        <div className={ADD_TODO_CONTAINER_STYLES}>
          <form
            method="post"
            className={ADD_TODO_FORM_STYLES}
            onSubmit={(evt) => {
              evt.preventDefault()
              addTodo.mutate({
                id: nanoid(),
                message: newTodoMessage,
                is_done: false,
                created_at: new Date().toISOString(),
              })
            }}
          >
            <div className={ADD_TODO_FIELD_WRAPPER}>
              <div className={ADD_TODO_FIELD_CONTAINER}>
                <label htmlFor="add-task" className={ADD_TODO_LABEL}>
                  Add todo:
                </label>
                <input
                  id="add-task"
                  type="text"
                  autoComplete="off"
                  className={ADD_TODO_INPUT}
                  value={newTodoMessage}
                  readOnly={false}
                  onChange={(evt) => {
                    setNewTodoMessage(evt.currentTarget.value)
                  }}
                />
              </div>
              <button
                type="submit"
                className={ADD_TODO_SUBMIT}
                disabled={false}
              >
                {addTodo.isLoading ? 'saving ...' : 'save'}
              </button>
            </div>
            {addTodo.isError && (
              <>
                <small className="text-red-400 ">
                  <span className="font-mono">{addTodo.error.message}</span>
                </small>
                <button
                  type="submit"
                  className="px-2 py-4 text-2xl text-purple-300 border-2 border-purple-300 rounded-2xl hover:bg-purple-300 hover:text-black "
                >
                  Try again?
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      {addTodo.isSuccess && <SuccessToast />}
    </>
  )
}
