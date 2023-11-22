import React from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';
import { Button } from 'react-scroll';



const Header = () => {
  return(
<header className='py-8'>
<div className='container mx-auto'>

<div className='flex justify-end items-center'>

<motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <Button to='contact' smooth={true} className='btn btn-lg' >Contact me</Button>
              <a href="https://shubhangimishra25.github.io/assets/ghcresume.pdf"  className='text-gradient btn-link'>
                My Portfolio
              </a>
            </motion.div>
     
    </div>
{/* <button className='btn btn-sm'>Work with me</button> */}

</div>


</header>);
};

export default Header;
