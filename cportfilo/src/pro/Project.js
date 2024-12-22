import React from 'react'
import project from "./image/project.jpg";

function Project() {
  return (
    <>
    <div className='project'>
      <div className='project_info'>
      <div className='project-h1'>
      <p>COMING SOON</p>
      </div>
      <img src={project} className='project_img'></img>
    </div>
    </div>
    </>
  )
}

export default Project
