import { TodoActions } from './store/slices/TodoSlice'
import { useAppDispatch, useAppSelector } from './store/store'
import { Todo } from './types/CommonTypes'
import styles from './App.module.scss'
import Counter from './components/counters/Counter'

const App = (): React.JSX.Element => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector<Todo[]>((state) => state.todoReducer.todos)

  const handleAddTodo = (): void => {
    dispatch(
      TodoActions.addTodo({
        id: crypto.randomUUID(),
        title: 'awesome title',
        isComplit: false,
      }),
    )
  }

  return (
    <section className={styles.container}>
      <header>Todo list</header>
      <Counter />
      <button onClick={handleAddTodo}>add todo</button>
      {todos && todos.map((todo) => <h1 key={todo.id}>{todo.title}</h1>)}
    </section>
  )
}

export default App
