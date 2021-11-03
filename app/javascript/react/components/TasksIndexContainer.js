import React, { useState, useEffect } from "react"

const TasksIndexContainer = (props) => {
  const [tasks, setTasks] = useState([])
  const [taskField, setTaskField] = useState("")

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

  const handleInputChange = (event)  => {
    setTaskField(event.currentTarget.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

      const response = await fetch("/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify({ name: taskField}),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })

      const parsedResponseTask = await response.json()
      debugger
      setTasks(tasks.concat(parsedResponseTask))

      // manage the response and put the new task on the page
  }

  return(
    <div>
      <h3> Task Index Container </h3>
      {tasktiles}

      <h3>Add a New Task</h3>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          onChange={handleInputChange}
          value={taskField}
        />

        <input type="submit" />
      </form>
    </div>
  )
}

export default TasksIndexContainer
