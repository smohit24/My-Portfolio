import React from 'react'
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
  const [ ref, inView ] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:item-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[500px] mix-blend-lighten bg-top'></motion.div>
          {/* text */}
          <motion.div
             variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent mb-3'>About me.</h2>
            <h3 className='h3 mb-4'>
              Mern Stack Devloper
            </h3>
            <p className='mb-6'>
              As a dedicated MERN stack developer, I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js. My expertise lies in crafting scalable and efficient solutions, delving into each technology to deliver the ultimate user experience. My projects showcase a blend of front-end and back-end skills, highlighting my ability to create seamless, high-performance applications.
            </p>
            {/* stats */}
            {/* <div>
              <div>
                <div className='font-primary text-sm tracking-[1px]'>
                  Contact <br />
                  Me
                </div>
                
              </div>
            </div> */}
            <div className='flex-1 gap-x-8 items-center'>
              <a href="#contact">
        <button className='btn btn-lg'>Contact me</button>
      </a>
              <div style={{ color: '#ADD8E6' }}>+91
                <CountUp start={0} end={6387818943} duration={2} />
              </div>
              <a href='#' className='text-gradient btn-link'>
                My Portfoilo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
