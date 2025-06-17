import { useState } from "react"
import Task from "./components/Task"
import { v4 as uuidv4 } from 'uuid'

function App() {
  const newId = uuidv4()

  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
   const newTask = {
    id: newId,
    name: inputText,
    completed: false
  }
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(newTask)
    setInputText('')
  }

  const handleDeleteTask = (id) => {
    const deleteTask = (tasks.filter((task) => task.id !== id))
    setTasks(deleteTask)
  }

  const handleCompleteTask = () => {

  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <h1 className="text-4xl font-bold">To-do List App</h1>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} className="border border-blue-400 rounded p-2 text-xl"/>

          <button className="bg-slate-300 px-4 py-2 rounded-md" onClick ={handleAddTask}>
            Add Task
          </button>
        <div className="flex flex-col gap-2 pt-4 p-4 border rounded">
          {tasks.map((task) => (
            <Task key={task.id} name={task.name} taskId={task.id} deleteTask={handleDeleteTask}/>

          ))}
        </div>
      </div>

    </>
  )
}

export default App
