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
  const [newTodoMessage, setNewTodoMessage] = useState('')

  return (
    <>
      <div className={ADD_TODO_WRAPPER_STYLES}>
        <div className={ADD_TODO_CONTAINER_STYLES}>
          <form
            method="post"
            className={ADD_TODO_FORM_STYLES}
            onSubmit={(evt) => {
              evt.preventDefault()
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
                  readOnly={}
                  onChange={(evt) => {
                    setNewTodoMessage(evt.currentTarget.value)
                  }}
                />
              </div>
              <button type="submit" className={ADD_TODO_SUBMIT} disabled={}>
                save
              </button>
            </div>
            {false && (
              <>
                <small className="text-red-400 ">
                  Server returned:{' '}
                  <span className="font-mono">message error</span>
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
      {false && <SuccessToast />}
    </>
  )
}
