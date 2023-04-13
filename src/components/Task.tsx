
import { Check, Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: Task;
  deleteTask: (task: Task) => void;
  toggleTaskStatus: (task: Task) => void;
}

export default function Task({
   task, deleteTask, toggleTaskStatus 
  }: TaskProps) {

  function handleTaskSetStatus(task: Task) {
    toggleTaskStatus(task);
  }

  function handleDeleteTask(task: Task) {
    deleteTask(task);
  }

  return (
    <div className={styles.task}>
      <div className={styles.toggleButton}>
        { task.isComplete ? (
          <a 
            onClick={() => handleTaskSetStatus(task)} 
            className={styles.completeTrue}>
          <Check size={19} color="#fff" />
        </a>
        ) : (
          <a 
            onClick={() => handleTaskSetStatus(task)} 
            className={styles.completeFalse}>
            &nbsp;
          </a>
        ) }
      </div>
      <div className={styles.title}>
        <p className={ task.isComplete ? styles.complete : undefined }>{ task.title }</p>
      </div>
      <a onClick={() => handleDeleteTask(task)} className={styles.deleteButton}>
        <Trash />
      </a>
    </div>
  )
}