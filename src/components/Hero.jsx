import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import Typed from 'typed.js'
const Hero = () => {
  const el = useRef(null);
  const mem = navigator.deviceMemory
 

  useEffect(() => {

    if (mem < 3) {
      alert(`hi there, some future won't available due to low memory.Your memory ${navigator.deviceMemory}gig ram`)
    }
    const typed = new Typed(el.current, {
      strings: ['Welcome to my Portifolio', `I develop user interfaces ${mem >= 3 ?` <br className='sm: block hidden' />`: ''} and web applications. ${mem < 3 ? `I use FireBase to develop my back-ends.  I am currently learning node js and express js.<br className='sm: block hidden' /> Am ready to migrate to any framework for development. Looking some one who can build and provide solution for your client site <br/> <a href="#contact"><small>CLICK HERE</small></a>`: ''}`],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className='relative w-full mx-auto h-screen'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Chibuife</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <div className='md:w-8/12'> <span ref={el} /></div>
          </p>
        </div>
      </div>
      {mem >= 3 ? <ComputersCanvas />:<></> }
      
     
      <div className=' -mt-4 z-10 md:-mt-20 absolute w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px]  rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
            animate={{
              y: [0,24,0]
            }}
            transition={{
              duration: 1.5, 
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero