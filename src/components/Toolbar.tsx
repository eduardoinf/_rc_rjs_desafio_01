import styles from './Toolbar.module.css'

interface ToolbarProps {
  complete: number;
  total: number;
}

export default function Toolbar({ complete, total }: ToolbarProps) {
  return (
    <section className={styles.toolbar}>
      <div className={styles.infos}>
        Tarefas criadas 
        <span className={styles.counter}> { total } </span>
      </div>

      <div className={`${styles.infos} ${styles.done}`}>
        Concluídas 
        <span className={styles.counter}>
          { total > 0 ? (
            <>
              {complete} de { total }
            </>
          ) : (
            0
          )}

        </span>
      </div>
    </section>
  )
}