import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {

  const [tasks, setTasks] = useState([])

  const inputTask = useRef()

  async function getTasks() {
    const tasksFromApi = await api.get('/tarefas', { headers: { 'Cache-Control': 'no-cache' } })
    setTasks(tasksFromApi.data)
  }

  async function createTasks() {
    await api.post('/tarefas', {
      title: inputTask.current.value
    })
    inputTask.current.value = ""
    getTasks()
  }

  async function deleteTasks(id) {
    await api.delete(`/tarefas/${id}`)
    getTasks()
  }

  async function toggleTaskStatus(id, currentStatus) {
    await api.patch(`/tarefas/${id}/done`, {
      done: !currentStatus
    })
    getTasks()
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (

    <div className='container'>
      <form>
        <h1>To-do List</h1>
        <input placeholder='Tarefa' type="text" name='task-description' ref={inputTask} />
        <button type='button' onClick={createTasks}>Adicionar tarefa</button>
      </form>

      {tasks.map(task => (
        <div key={task.id} className='card'>
          <div>
            <p>Tarefa: <span>{task.title}</span></p>
            <p>Status: <span className={`status ${task.done ? 'done' : 'pending'}`}
              onClick={() => toggleTaskStatus(task.id, task.done)}>{task.done ? 'Concluída' : 'Pendente'}</span></p>
          </div>
          <button onClick={() => deleteTasks(task.id)}>
            <img src={Trash} alt='Excluir' />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
