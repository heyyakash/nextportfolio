import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='md:h-[250px] md:mt-10 mt-5 w-full flex items-center flex-col-reverse md:flex-row pl-6 gap-10 md:gap-0 md:p-0 justify-between'>
      <div className='flex flex-col h-full items-start'>
        <h2 className='text-[3.75rem] md:text-[3.75rem] leading-[4rem] md:leading-[3.5rem] bg-gradient-to-r  background-animate from-[#129ee9] via-[#c471ed] to-orange-500 bg-clip-text font-[650] text-transparent'>Akash Sharma</h2>
        <p className='dark:text-white text-lg font-[500]'>A Web Developer</p>
        <p className='mt-6 text-gray-700 dark:text-gray-300 text-lg'>-Accepts bribes in form of sweets</p>
        <p className='text-gray-700 dark:text-gray-300 text-lg'>-Madridista &#129293;</p>
      </div>
      <div className='h-24 md:h-[180px] w-24 md:w-[180px] self-start overflow-hidden rounded-full bg-white'>
        <img src="/mine4.jpg" className='w-full h-full object-cover' alt="profile" />
      </div>
    </div>
  )
}

export default Hero