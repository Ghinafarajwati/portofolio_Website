import React, { useTransition, useState } from "react";
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation' 
import TabButton from '../components/tabButton.jsx'
import TabData from "../components/tabData.jsx";

const Educations = () => {
  const [tab, setTab] = useState("educations");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id='Educations' className='pt-24 pb-24'>
      <div className='md:flex md:justify-between md:gap-16'>
          <TypeAnimation
          sequence={[
            'Educations',
            1000, 
            'Certificate',
            1000, 
          ]}
          wrapper="span"
          speed={50}
          className='font-semibold text-5xl mb-5 flex justify-center md:mt-[8rem]'
          repeat={Infinity}
        />

          <motion.div
          className='md:w-2/3'
          initial='hidden'
          whileInView= 'visible'
          viewport={{once: true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible: {opacity: 1, x: 0}
          }}>
            <div className="flex mt-16 md:mt-0 md:ml-[13rem] text-lg">
            <TabButton selectTab={() => handleTabChange("educations")} active={tab === "educations"}>
              {" "} Educations {" "}
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certificate")} active={tab === "certificate"}>
              {" "} Certificate{" "}
            </TabButton>
            </div>

            <div>
            {TabData.find((t) => t.id === tab)?.content || null}
            </div>
          </motion.div>
      </div>
    </section>
  )
}

export default Educations
