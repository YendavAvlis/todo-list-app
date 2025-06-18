import { useState } from "react"
import Task from "./components/Task"
import { v4 as uuidv4 } from 'uuid'

function App() {
  const newId = uuidv4()

  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);

  const newTask = {
    id: newId,
    name: inputText,
    completed: false
  }

  const handleAddTask = () => {
    if(inputText.length < 3) {
      alert('Task name should be at least 3 characters...')
    } else {

    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log(newTask)
    setInputText('')
    }

  }

  const handleDeleteTask = (id) => {
    const deleteTask = (tasks.filter((task) => task.id !== id))
    setTasks(deleteTask)
  }

  const handleCompleteTask = (id) => {
    let newTask = [...tasks]
    let completeTask = tasks[id]
    console.log(completeTask + 'here')
    completeTask[tasks.filter((task) => task.completed = true)]
    console.log(completeTask + 'here too')
    newTask[id] = completeTask
    console.log(completeTask + 'and here too')

    setTasks(newTask)

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
            <Task className={task.completed ? 'text-2xl text-slate-300 line-through' : ''} key={task.id} name={task.name}  deleteTask={handleDeleteTask} completeTask={handleCompleteTask} taskId={task.id}/>

          ))}
        </div>
      </div>

    </>
  )
}

export default App
