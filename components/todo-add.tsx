import { useState } from 'react'
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

export function TodoAdd() {
  const addTodo = useAddTodo()
  const [newTodoMessage, setNewTodoMessage] = useState('')

  return (
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
                readOnly={addTodo.isLoading}
                onChange={(evt) => {
                  setNewTodoMessage(evt.currentTarget.value)
                }}
              />
            </div>
            <button
              type="submit"
              className={ADD_TODO_SUBMIT}
              disabled={addTodo.isLoading || newTodoMessage.length < 1}
            >
              {addTodo.isLoading ? 'one sec...' : 'save'}
            </button>
          </div>
        </form>
        {addTodo.isSuccess && <SuccessToast />}
      </div>
    </div>
  )
}
