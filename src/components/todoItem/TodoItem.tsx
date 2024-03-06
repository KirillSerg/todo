import { TodoActions } from '../../store/slices/TodoSlice'
import { useAppDispatch } from '../../store/store'
import { Todo } from '../../types/CommonTypes'
import styles from './TodoItem.module.scss'
import deleteIcon from '../../assets/icons/delete.svg'

const TodoItem: React.FC<Todo> = ({ id, title, isComplete }) => {
  const dispatch = useAppDispatch()

  const onChangeStatus = (): void => {
    dispatch(TodoActions.setStatus(id))
  }

  const deleteTodo = (): void => {
    dispatch(TodoActions.deleteTodo(id))
  }

  return (
    <div className={`${styles.wrapper} ${isComplete && styles.complete}`}>
      <input
        type="checkbox"
        name={`isComplete${id}`}
        id={`isComplete${id}`}
        checked={isComplete}
        onChange={onChangeStatus}
      />
      <label
        className={`${styles.title} ${isComplete && styles.complete}`}
        htmlFor={`isComplete${id}`}
      >
        {title}
      </label>
      <button onClick={deleteTodo}>
        <img src={deleteIcon} alt="" />
      </button>
    </div>
  )
}

export default TodoItem
