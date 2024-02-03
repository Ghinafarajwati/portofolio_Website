import React from 'react'
import MediaQuery from '../hooks/mediaQuery'
import WomanImg from '../assets/ghina.jpg'
import { motion } from 'framer-motion'
import SocialMedia from '../components/socialMedia.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const LandingPage = () => {
  const isAboveMediumScreens = MediaQuery("(min-width: 1060px)");
  return (
    <section id='Home' className='md:flex md:justify-between md:items-center gap-16 md:h-full'>
      
      {/* IMAGE SECTION */}
      
      <div className="basis-3/5 z-10 mt-16 md:mt-40 flex justify-center md:order-2 ">
      <motion.div 
        initial='hidden'
        whileInView= 'visible'
        viewport={{once: true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x: 50},
          visible: {opacity: 1, x: 0}
        }}>
          {isAboveMediumScreens ? (
          <div className="relative z-0 md:ml-20 xl:mr-28 xl:mt-20 before:absolute before:-top-20 before:-left-20 z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] before:w-5 before:h-5">
            <img
              alt="profile"
              className="hover:scale-105 transition duration-500 z-10 w-full max-w-[20rem] md:max-w-[23rem] mt-[-4rem] ml-[1rem] shadow-lg border border-white"
              src={WomanImg}
              style={{borderRadius:'100% / 100% 100% 0% 20%'}}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[20rem] md:max-w-[23rem] mt-[2rem] ml-[1rem] shadow-lg"
            src={WomanImg}
            style={{borderRadius:'100% / 100% 100% 0% 20%'}}
          />
        )}
        </motion.div>
      </div>

      {/* content */}
        <div className='z-30 basis-2/5 mt-12 md:mt-20 ml-[2rem]'>
        <motion.div 
        initial='hidden'
        whileInView= 'visible'
        viewport={{once: true}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, y: -50},
          visible: {opacity: 1, y: 0}
        }}>
          <p className='text-center md:text-start text-2xl mb-2 xs:relative xs:text-gray-500 xs:font-semibold hover:text-yellow transition duration-500'>Hi, my name's</p>
          <p className="text-6xl font-semibold z-10 text-center md:text-start">
            Ghina {""} 
            <span className="xs:relative xs:text-gray-500 xs:font-semibold hover:text-yellow transition duration-500">
            Faraj</span>
          </p>

          <p className="mt-10 mb-7 text-lg text-center md:text-start md:mr-[-5rem]">
            <span className='text-3xl'>I’m a Frontend Developer,</span><br/> 
            <span className='mt-2'>I'm also an enthusiastic learner, committed to Enhancing User Interfaces 🚀 and Facilitating Collaborative Development through Robust Coding Practices 🧩.</span>
          </p>

        </motion.div>

        <div>
        <SocialMedia/>
        </div>

        <motion.div 
         className="flex mt-5 justify-center md:justify-start"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: 0.2, duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}>

        <a href="mailto:farajwati.ghina@gmail.com" target='_blank' rel="noreferrer" className="bg-gradient-rainblue rounded-full py-3 px-[30px] border-b border-white font-semibold hover:text-black">
          Hire Me <span className='ml-3'><FontAwesomeIcon icon={faArrowRight}/></span>
        </a>
        </motion.div>

        </div>
    </section>
  )
}

export default LandingPage
