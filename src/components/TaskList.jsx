import React from 'react'
import Task from './Task'

function TaskList({tasks, deleteTask, editTask}) {
  console.log(tasks)
  return (
    <div>
          <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
        ))}
      </ul>
    </div>
  )
}

export default TaskList
