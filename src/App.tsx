/* eslint-disable @typescript-eslint/no-extra-parens */
import { useAppSelector } from './store/store'
import Counter from './components/counters/Counter'
import Form from './components/form/Form'
import TodoItem from './components/todoItem/TodoItem'
import { Todo } from './types/CommonTypes'
import styles from './App.module.scss'
import StatusFilter from './components/filters/StatusFilter'
import { useEffect, useState } from 'react'

const App = (): React.JSX.Element => {
  const [filteredTodo, setFilteredTodo] = useState<Todo[]>([])
  const [filter, setFilter] = useState<string>('all')

  const todos = useAppSelector<Todo[]>(state => state.todoReducer.todos)

  const onFilter = (str: string): void => {
    setFilter(str)
  }

  useEffect(() => {
    if (filter === 'complete') {
      setFilteredTodo(todos.filter(todo => todo.isComplete))
    } else if (filter === 'not complete') {
      setFilteredTodo(todos.filter(todo => !todo.isComplete))
    } else {
      setFilteredTodo(todos)
    }
  }, [todos, filter])

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <header>Todo list</header>
        <Counter />
        <Form />
        <StatusFilter onFilter={onFilter} />
      </section>
      <main>
        {filteredTodo.length > 0 ? (
          filteredTodo.map(todo => <TodoItem key={todo.id} {...todo} />)
        ) : (
          <p>You don't have any tasks yet</p>
        )}
      </main>
    </div>
  )
}

export default App
