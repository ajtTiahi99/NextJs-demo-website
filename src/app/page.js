import Navbar from '@/components/Navbar'
import styles from '../styles/page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar/>
      <h1>Welcome</h1>
    </div>  
  )
}
