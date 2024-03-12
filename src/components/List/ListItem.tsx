import { Trash, Check } from "@phosphor-icons/react"
import { Task } from "../../App"
import styles from "./ListItem.module.css"

interface ListItemProps {
  data: Task
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function ListItem({
  data,
  removeTask,
  toggleTaskStatus,
}: ListItemProps) {
  function handleRemove() {
    removeTask(data.id)
  }
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked })
  }

  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"]
  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : ""
  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  )
}
