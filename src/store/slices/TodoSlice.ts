import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../types/CommonTypes'

const initialState: State = {
  todos: []
}

export interface State {
  todos: Todo[]
}

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.todos = [...state.todos, payload]
    },
  },
})

export const TodoActions = {
  ...todoSlice.actions,
}

export default todoSlice.reducer