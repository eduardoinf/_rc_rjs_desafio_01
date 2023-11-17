import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './AddTaskInput.module.css'

import { PlusCircle } from 'phosphor-react';

import {v4 as uuidv4} from 'uuid'

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface AddTaskInputProps {
  addTask: (task: Task) => void;
}

export default function AddTaskInput({ addTask } : AddTaskInputProps) {
  const [task, setTask] = useState('')

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: task,
      isComplete: false
    }
    
    addTask(newTask);
    setTask("");
  }

  function handleNewTaskChange(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setTask(event.target.value);
    
  }

  function handleNewTodoInvalid(event:ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  const isTaskEmpty = task.length === 0;

  return (
    <form className={styles.formAddTask} onSubmit={handleAddNewTask}>
      <input 
        placeholder="Adicione uma nova tarefa"
        onChange={handleNewTaskChange}
        value={task} 
        onInvalid={handleNewTodoInvalid}
        required
        />
      <button type="submit" disabled={isTaskEmpty}>
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}