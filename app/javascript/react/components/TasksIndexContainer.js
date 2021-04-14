import React, { useState, useEffect } from "react"

const TasksIndexContainer = (props) => {
  const [tasks, setTasks] = useState([])

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
