import React from 'react'

const Task = ({name, taskId, completeTask, deleteTask, className}) => {


  return (
    <>
        <h3 className={className}>{name}</h3>
        <button onClick={() => completeTask(taskId)} className="bg-slate-300 px-4 py-2 rounded-md">
        Complete
        </button>
        <button onClick={() => deleteTask(taskId)} className="bg-slate-300 px-4 py-2 rounded-md">
        Remove
        </button>
    </>
  )
}

export default Task