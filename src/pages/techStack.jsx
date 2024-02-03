import React from 'react'
import { motion } from 'framer-motion'
import TechData from '../assets/data/techData.jsx'

const Tech = () => {
  return (
    <section id='TechStack' className='pb-24'>
      <div className='md:flex md:justify-center md:gap-16 rounded-3xl border-b border-white'>
        <motion.div
          initial='hidden'
          whileInView= 'visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, y: -50},
            visible: {opacity: 1, y: 0},
          }}>
            <h2 className='text-center text-4xl font-bold text-white mt-14'>Tech Stack</h2>
            <p className='text-center text-mg text-white mt-5'>Here are some skills I have diligently cultivated in the process of acquiring proficiency in programming.</p>
            <div className='flex flex-row md:justify-start'>
              <span className='md:text-start text-center text-xl md:mx-[5rem] ml-[113px] mt-[2rem] border-b border-blue'>TECH SKILLS</span>
            </div>
            <div className='grid xl:grid-cols-10 md:grid-cols-7 xs:grid-cols-7 gap-6 text-center py-8 px-12 sm:px-0 mx-[6rem]'>
            {TechData.slice(1,12).map(({id, image, title}) => (
                <div key={id} className='hover:scale-105'>
                <img src={image} alt='tech'></img>
                <p>{title}</p>
              </div>
            ))}
            </div>
            <div className='flex flex-row md:justify-start'>
              <h3 className='text-start text-xl md:mx-[5rem] mx-[8rem] mt-[2rem] border-b border-blue'>OTHERS</h3>
            </div>
              <div className='grid xl:grid-cols-10 md:grid-cols-7 xs:grid-cols-7 gap-6 text-center py-8 px-12 sm:px-0 mx-[5rem] mt-[-1rem]'>
              {TechData.slice(12,15).map(({id, image, title}) => (
                  <div key={id} className='hover:scale-105'>
                  <img src={image} alt='others'></img>
                  <p>{title}</p>
                </div>
              ))}
              </div>
          </motion.div>
      </div>
    </section>
  )
}

export default Tech
