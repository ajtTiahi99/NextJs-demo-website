// import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from '../styles/page.module.css'


const error = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }
  useEffect(()=>{
    setTimeout(()=>{
      router.push('/')
    },5000)
  },[])
  return (
    <div className={styles.errorPage}>
     <h1>We are sorry the page you are looking for does not exist</h1> 
      {/* <Link href='/' className={styles.btn}>
        Back to Home
      </Link> */}
      <a className={styles.btn} onClick={handleClick}>Back to Home</a>
    </div>
  )
}

export default error
