import React from 'react'
import Link from 'next/link'
import styles from '../styles/page.module.css'

const Navbar = () => {
  return (
    <nav>
        <ul className={styles.Navlist}>
          <li>
            <Link href='/' className={styles.link}>
                Home
            </Link>
          </li>
          <li>
            <Link href='/About' className={styles.link}>
                About
            </Link>
          </li>
          <li>
            <Link href='/Blogs' className={styles.link}>
                Blogs
            </Link>
          </li>
          <li>
            <Link href='/Projects' className={styles.link}>
                Projects
            </Link>
          </li>
          <li>
            <Link href='/Features' className={styles.link}>
                Feature
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
