import React from 'react';
//images
import Image from '../assets/Image.svg';
//icons
import { FaGithub, FaYoutube, FaDribbble, FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variable
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-autp">
        <div className='flex flex-col gap-y-8 lg:flex-row lg;items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial='hidden' whileInView={'show'}
            viewport={{ once: false, amount:0.7 }} className='text-[36px] font-bold leading-[0.8] lg:text-[60px]'>
              Hello <span>Everyone,</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'}
            viewport={{ once: false, amount:0.7 }} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mx-2'>I am a</span>
              <TypeAnimation
                sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Gamer',
                2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />

            </motion.div>
            {/* <motion.p variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'}
            viewport={{ once: false, amount:0.7 }}>
              I am currently studying at Babu Banarasi Das University, pursuing BTech in Computer Science and Engineering. During these studies, I am prepared to become a programmer and developer. The emphasis is on designing and understanding data structures, and throughout the educational process, topics related to GUI development, React, Node.js, Express, MongoDB, HTML, JavaScript, CSS, and Tailwind are discussed. I would like to apply my skills in programming and development to make the most of my acquired knowledge.
            </motion.p> */}
            <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'}
            viewport={{ once: false, amount:0.7 }} className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <a href="#contact">
        <button className='btn btn-lg'>Contact me</button>
      </a>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* socials */}
            <motion.div variants={fadeIn('up', 0.6)} initial='hidden' whileInView={'show'}
            viewport={{ once: false, amount:0.7 }} className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a 
              href="https://www.linkedin.com/in/mohit-kumar-srivastava-4a4391226" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
              href="https://github.com/smohit24" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/mohit24_01" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              {/* <a 
              href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
              >
                <FaTwitter />
              </a> */}
              <a
                href="https://www.facebook.com/srivastava.mohit.94?mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div variants={fadeIn('down', 0.5)} initial='hidden' whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[380px]'>
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner
