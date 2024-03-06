import { useAppSelector } from '../../store/store'
import { Todo } from '../../types/CommonTypes'
import styles from './Counter.module.scss'

const Counter = (): React.JSX.Element => {
  const todos = useAppSelector<Todo[]>(state => state.todoReducer.todos)
  const finished = todos.filter(todo => todo.isComplete).length
  const started = todos.filter(todo => !todo.isComplete).length

  return (
    <div className={styles.wrapper}>
      <h4>Counters of your todo:</h4>
      <p>
        Complited: <span>{finished}</span>
      </p>
      <p>
        Not complited: <span>{started}</span>
      </p>
    </div>
  )
}

export default Counter
