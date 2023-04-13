import { useState } from 'react'

import logo from './assets/Logo.svg'

import styles from './App.module.css'
import './global.css'
import Header from './components/Header'
import AddTaskInput from './components/AddTaskInput'
import Toolbar from './components/Toolbar'

import {v4 as uuidv4} from 'uuid'
import { ClipboardText } from 'phosphor-react'
import Task from './components/Task'

const basetasks = [
  {
    id: uuidv4(),
    title: 'Nova Tarefa',
    isComplete: true
  }, {
    id: uuidv4(),
    title: 'Nova Tarefa 2',
    isComplete: false
  }
];

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>(basetasks)

  function addTask(task: Task): void {
    setTasks([task, ...tasks]);
  }

  function deleteTask(task: Task) {
    const newTasks = tasks.filter(t => (t.id != task.id))
    setTasks(newTasks);
  }

  function toggleTaskStatus(task: Task) {
    const newTasks = tasks.map(
      t => ( t.id == task.id ? {...task, isComplete: !task.isComplete} : t )
    ) 
    setTasks(newTasks);
  }

  const tasksComplete  = tasks.filter(task => ( task.isComplete == true )).length
  const tasksTotal     = tasks.length

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTaskInput addTask={addTask} />
      
        <Toolbar complete={tasksComplete} total={tasksTotal} />

        { tasks.map(task => (
          <div key={task.id}>
            <Task 
              deleteTask={deleteTask}
              toggleTaskStatus={toggleTaskStatus}
              task={task} />
          </div>
        ))}

        { tasks.length <= 0 && (
          <div className={styles.noResult}>
            <ClipboardText size={56} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong><br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
