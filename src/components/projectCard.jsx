import React from 'react'

const ProjectCard = ({imgUrl, title, description}) => {
  
  return (
    <div>
      <div className='h-52 md:h-72 rounded-xl relative group' style={{background: `url(${imgUrl})`, backgroundSize:'cover'}}></div>

      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h4 className='text-xl font-semibold mb-2'>{title}</h4>
        <p className='text-[#ADB7BE] mb-2'>{description}</p>
        <button className='px-4 py-2 border border-white rounded-full'>Live Site</button>
      </div>
    </div>
  )
}

export default ProjectCard
