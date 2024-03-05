import { useAppSelector } from '../../store/store'
import { Todo } from '../../types/CommonTypes'

const Counter = (): React.JSX.Element => {
  const todos = useAppSelector<Todo[]>(state => state.todoReducer.todos)
  const finished = todos.filter(todo => todo.isComplete).length
  const started = todos.filter(todo => !todo.isComplete).length

  return (
    <div>
      <h4>Counters of your todo:</h4>
      <p>Complited: {finished}</p>
      <p>Not complited: {started}</p>
    </div>
  )
}

export default Counter
