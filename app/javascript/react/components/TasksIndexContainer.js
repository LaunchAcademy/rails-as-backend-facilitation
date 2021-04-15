import React, { useState, useEffect } from "react"

const TasksIndexContainer = (props) => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const response = await fetch("/api/v1/tasks")
    const parsedTasks = await response.json()
    setTasks(parsedTasks)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  let tasktiles = tasks.map((task) => {
    return(
      <li key={task.id}>
        {task.name}
      </li>
    )
  })

  return(
    <div>
      <h3> Task Index Container </h3>
      {tasktiles}
    </div>
  )
}

export default TasksIndexContainer
