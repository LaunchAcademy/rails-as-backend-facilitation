import React, { useState, useEffect } from "react"

const TasksIndexContainer = (props) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // debugger
    fetch("/api/v1/tasks.json")
    .then(response => response.json())
    .then(taskBody => {
      // debugger;
      setTasks(taskBody)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
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
