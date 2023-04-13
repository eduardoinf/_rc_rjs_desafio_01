import styles from './Header.module.css'
import logo from '../assets/Logo.svg'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <img
        src={logo} />
    </header>
  )
}