import React from 'react'
import styles from '../../styles/page.module.css'

export const getStaticPaths = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map((dataItem)=>{
    return{
      params:{
        blogNo:dataItem.id.toString()
      }
    }
  })
  return {
      paths,
      fallback:false,
  }
}

export const getStaticProps = async(context) => {
  const id = context.params.blogNo 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data  = await res.json()

  return {
    props:{
      data
    }
  }
}

const Blogs = ({data}) => {
  const {id,title,body} = data
  return (
    <div className={`${styles.userPost} ${styles.postDetail}`} key={id}>
      <span>{id}</span>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Blogs
