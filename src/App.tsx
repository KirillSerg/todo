/* eslint-disable @typescript-eslint/no-extra-parens */
import { useAppSelector } from './store/store'
import Counter from './components/counters/Counter'
import Form from './components/form/Form'
import { Todo } from './types/CommonTypes'
import styles from './App.module.scss'

const App = (): React.JSX.Element => {
  const todos = useAppSelector<Todo[]>(state => state.todoReducer.todos)

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <header>Todo list</header>
        <Counter />
        <Form />
      </section>
      <main>
        {todos.length > 0 ? (
          todos.map(todo => <h1 key={todo.id}>{todo.title}</h1>)
        ) : (
          <p>You don't have any tasks yet</p>
        )}
      </main>
    </div>
  )
}

export default App
