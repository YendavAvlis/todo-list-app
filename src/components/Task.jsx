import React from 'react'

const Task = ({name, taskId, isComplete, deleteTask}) => {


  return (
    <>
        <h3 className="text-xl font-semibold">{name}</h3>
        <button onClick={isComplete} className="bg-slate-300 px-4 py-2 rounded-md">
        Complete
        </button>
        <button onClick={() => deleteTask(taskId)} className="bg-slate-300 px-4 py-2 rounded-md">
        Remove
        </button>
    </>
  )
}

export default Task