import React, {useState} from 'react'
import ProjectCard from '../components/projectCard.jsx'
import projectData from '../assets/data/projectData.jsx'
import ProjectTag from '../components/projectTag.jsx'
import { motion } from 'framer-motion'

const Project = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
  project.tag.includes(tag)
  );

  return (
    <>
    <div id='Projects'>
    <motion.div className='relative'
        initial='hidden'
        whileInView= 'visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0},
        }}>
        <h2 className='text-center text-4xl font-bold text-white mt-20'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
        onClick={handleTagChange}
        name="All"
        isSelected={tag === "All"}
        />
        <ProjectTag
        onClick={handleTagChange}
        name="Web"
        isSelected={tag === "Web"}
        />
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-5 md:mb-[1rem] mb-[3rem]'>
          {filteredProjects.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}></ProjectCard>
        ))}
        </div>
        </motion.div>
    </div>
    </>
  )
}

export default Project
