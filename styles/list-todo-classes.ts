export const TODO_LIST_STYLES = 'w-full max-w-[60rem] mx-auto pt-28'
export const TODO_CHECKBOX_STYLES =
  'w-12 h-12 rounded-full outline-none text-fuchsia-400'
export const TODO_ITEM_STYLES =
  'flex justify-between w-full py-3 text-left border-b-2 border-dotted border-b-fuchsia-400 border-opacity-40'

export const TODO_MESSAGE_STYLES = (isDone: boolean) =>
  isDone ? 'text-6xl h-16 line-through decoration-fuchsia-400' : 'text-6xl h-16'
