import styles from "./ListHeader.module.css"

interface ListHeaderProps {
  tasksCounter: number
  checkedTasksCounter: number
}

export function ListHeader({
  tasksCounter,
  checkedTasksCounter,
}: ListHeaderProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
