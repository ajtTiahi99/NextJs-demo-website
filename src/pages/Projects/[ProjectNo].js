import { useRouter } from 'next/router'
import React from 'react'

const ProjectNo = () => {
    const router = useRouter()
    const projectNo = router.query.ProjectNo
    return (
      <div>
        <h1>I am {projectNo} content</h1>
      </div>
    )
}

export default ProjectNo
