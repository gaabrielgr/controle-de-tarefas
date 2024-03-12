import { PlusCircle } from "@phosphor-icons/react"
import styles from "./App.module.css"
import { Button } from "./components/Button"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Empty } from "./components/List/Empty"
import { ListHeader } from "./components/List/ListHeader"
import React from "react"
import { ListItem } from "./components/List/ListItem"

export interface Task {
  text: string
  id: number
  isChecked: boolean
}
function App() {
  const [tasks, setTasks] = React.useState<Task[]>([])
  const [inputValue, setInputValue] = React.useState("")
  const checkedTasksCounter = tasks.reduce((acc, task) => {
    if (task.isChecked) {
      return acc + 1
    }
    return acc
  }, 0)

  const handleAddTaskList = () => {
    if (!inputValue) {
      return
    }
    const newTask = {
      text: inputValue,
      id: new Date().getTime(),
      isChecked: false,
    }
    setTasks((oldTasks) => [...oldTasks, newTask])
    setInputValue("")
  }

  const handleRemoveTask = (id: number) => {
    setTasks((oldTasks) => oldTasks.filter((task) => task.id !== id))
  }

  const handleToggleTask = ({ id, value }: { id: number; value: boolean }) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={({ target }) => setInputValue(target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTaskList}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <ListItem
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
