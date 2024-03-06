import { useState } from 'react'
import { useAppDispatch } from '../../store/store'
import { TodoActions } from '../../store/slices/TodoSlice'
import styles from './Form.module.scss'

const TITLE_MAX_LENGTH = 10

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [err, setErr] = useState<string>('')

  const dispatch = useAppDispatch()

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setErr('')
    const input = e.target.value
    if (input.length > TITLE_MAX_LENGTH) {
      setErr(`Todo's title max length is ${TITLE_MAX_LENGTH} symbol`)
    }
    setTitle(e.target.value)
  }

  const handleAddTodo = (): void => {
    dispatch(
      TodoActions.addTodo({
        id: crypto.randomUUID(),
        title: title,
        isComplete: false
      })
    )
    setTitle('')
    setErr('')
  }

  return (
    <div className={styles.form}>
      <div className={styles.form_input}>
        <input
          id="title"
          type="text"
          placeholder="...todo"
          value={title}
          onChange={onChangeTitle}
        />
        <button disabled={!!err || !title} onClick={handleAddTodo}>
          + Add
        </button>
      </div>
      <label htmlFor="title">{err}</label>
    </div>
  )
}

export default Form
