import styles from './StatusFilter.module.scss'

interface Props {
  onFilter: (str: string) => void
}

const StatusFilter = ({ onFilter }: Props): React.JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <select
        onChange={e => onFilter(e.target.value)}
        name="byStatus"
        id="byStatus"
      >
        <option value="all">all</option>
        <option value="complete">complete</option>
        <option value="not complete">not complete</option>
      </select>
      <label htmlFor="byStatus">Filter by status</label>
    </div>
  )
}

export default StatusFilter
