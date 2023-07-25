import Navbar from '@/components/Navbar'
import React from 'react'
import styles from '../../styles/page.module.css'
import Link from 'next/link'

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')           
  const data = await res.json()

  return {
    props:{
      data,
    },
  }
}

const Blogs = ({data}) => {

  return (
    <>
      <Navbar/>
      {
        data.map((userPost)=>{
          return <div className={styles.userPost} key={userPost.id}>
              <span>{userPost.id}</span>
              <Link className={styles.postLink} href={`/Blogs/${userPost.id}`}>
                <h1>{userPost.title}</h1>
              </Link>
            </div>
        })
      }
    </>
  )
}

export default Blogs
