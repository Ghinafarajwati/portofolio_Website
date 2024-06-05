import React from 'react'
import { motion } from 'framer-motion'
import TechData from '../assets/data/techData.jsx'

const Tech = () => {
  return (
    <section id='TechStack' className='pb-24'>
      <div className='md:flex md:justify-center md:gap-16 rounded-3xl border-b border-white'>
      <motion.div className='relative'
        initial='hidden'
        whileInView= 'visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0},
        }}>
          <h2 className='text-center text-4xl font-bold text-white md:mt-[-3rem] lg:mt-[-15rem]'>Tech Stack</h2>
          <p className='text-center text-mg text-white mt-5'>Here are some skills I have diligently cultivated in the process of acquiring proficiency in programming.</p>
          <div className='flex flex-row md:justify-start'>
          </div>
          <div className='grid xl:grid-cols-9 md:grid-cols-8 xs:grid-cols-7 gap-6 text-center py-8 px-12 xl:mx-[8rem] sm:px-0 md:mx-7 mx-[5rem]'>
            {TechData.slice(0, 12).map(({ id, image, title }) => (
              <div key={id} className='hover:scale-105'>
                <img src={image} alt='tech'></img>
                <p>{title}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-row md:justify-start'>
            <h3 className='text-start text-xl xl:ml-[8rem] xl:mt-[2rem] md:ml-[2rem] md:mt-[2rem] ml-[8rem] md:mb-1 mb-[2rem] mt-2 border-b border-blue'>OTHERS</h3>
          </div>
          <div className='grid xl:grid-cols-9 md:grid-cols-8 xs:grid-cols-7 gap-6 text-center md:py-8 md:px-4 xl:mx-[5rem] md:mx-1 md:mt-1 mx-[8rem]'>
            {TechData.slice(12, 15).map(({ id, image, title }) => (
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
