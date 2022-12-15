'use client'

import { type TodoProps } from '~/lib/db.server'
import { useUpdateTodo } from '~/lib/hooks/update-todo'
import {
  TODO_LIST_STYLES,
  TODO_CHECKBOX_STYLES,
  TODO_ITEM_STYLES,
  TODO_MESSAGE_STYLES,
} from '~/styles/list-todo-classes'

export function TodoList({ list }: { list: TodoProps[] }) {
  const { mutate: mutateTodo } = useUpdateTodo()

  return (
    <ul className={TODO_LIST_STYLES}>
      {list.map((item) => (
        <li key={item.id} className={TODO_ITEM_STYLES}>
          <label
            htmlFor={item.id}
            className={TODO_MESSAGE_STYLES(item.is_done)}
          >
            {item.message}
          </label>
          <input
            id={item.id}
            type="checkbox"
            className={TODO_CHECKBOX_STYLES}
            value={item.message}
            defaultChecked={item.is_done}
            onChange={(evt) => {
              mutateTodo({
                id: evt.currentTarget.id,
                message: evt.currentTarget.value,
                checked: evt.currentTarget.checked,
              })
            }}
          />
        </li>
      ))}
    </ul>
  )
}
