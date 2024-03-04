import { TodoActions } from "./store/slices/TodoSlice"
import { useAppDispatch, useAppSelector } from "./store/store"
import { Todo } from "./types/CommonTypes"

const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector<Todo[]>((state) => state.todoReducer.todos)

  const handleAddTodo = (): void => {
    dispatch(
      TodoActions.addTodo({
        id: crypto.randomUUID(),
        title: "awesome title",
        isComplit: false,
      }),
    )
  }

  return (
    <div>
      <button onClick={handleAddTodo}>add todo</button>
      {todos && todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)}
    </div>
  )
}

export default App
