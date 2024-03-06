import { useAppSelector } from '../../store/store'
import { Todo } from '../../types/CommonTypes'
import styles from './Counter.module.scss'

const Counter = (): React.JSX.Element => {
  const todos = useAppSelector<Todo[]>((state) => state.todoReducer.todos)
  const finished = todos.filter((todo) => todo.isComplete).length
  const started = todos.filter((todo) => !todo.isComplete).length

  return (
    <div className={styles.count_wrap}>
      <p>
        Complited: <span className={styles.complited}>{finished}</span>
      </p>
      <p>
        Not complited: <span className={styles.not_complited}>{started}</span>
      </p>
    </div>
  )
}

export default Counter
