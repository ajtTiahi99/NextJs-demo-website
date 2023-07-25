import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/page.module.css'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.cards}>
        <Card/>
        
      </div>
    </div>
  )
}

export default Projects
