import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../types/CommonTypes'

const initialState: State = {
  todos: [
    {
      id: crypto.randomUUID(),
      title: "create todo app",
      isComplete: true,
    },
    {
      id: crypto.randomUUID(),
      title: "got jobe offer",
      isComplete: false,
    }
  ]
}

export interface State {
  todos: Todo[]
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos = [payload, ...state.todos]
    },
    deleteTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    setStatus: (state, { payload }: PayloadAction<string>) => {
      const todos = state.todos.map(todo => todo.id === payload ? { ...todo, isComplete: !todo.isComplete } : todo)
      state.todos = todos.sort((a, b) => +a.isComplete - +b.isComplete)
    },
  },
})

export const TodoActions = {
  ...todoSlice.actions,
}

export default todoSlice.reducer