import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'Web Design',
    description: 'Web design focuses on the visual and aesthetic aspects of a website, including layout, color schemes, and typography. It aims to create an engaging, user-friendly experience that aligns with the site\'s purpose and enhances user interaction.',
    Link: 'Learn more'
  },
  {
    name: 'Development',
    description: 'Development involves building and maintaining websites and applications. It includes front-end development for user interfaces and back-end development for server-side functionality, responsive, and visually appealing online presence.', 
    Link: 'Learn more'
  },
  {
    name: 'Management',
    description: 'Management involves planning, organizing, and overseeing resources and personnel to achieve organizational goals. It focuses on coordinating efforts, setting objectives, and ensuring efficient operations to drive success and growth.',
    Link: 'Learn more'
  },
  // {
  //   name: 'product branding',
  //   description: 'UI/UX design focuses on creating visually appealing and user-friendly interfaces. UI design enhances the look and interactive elements, while UX design ensures a smooth, intuitive experience, making products easy to use and satisfying for users.',
  //   Link: 'Learn more'
  // },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            <h3 className='h3 max-w-[455px] mb-10'>
              I'm a MernStack Developer
            </h3>
            <button className='btn btn-sm'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const {name, description, Link} = service;
                return (
                  <div
                    className='border-b border-white/20 h-[190px] mb-[36px] flex'
                    key={index}>
                  <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-1'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {Link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services