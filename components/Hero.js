import React from 'react'
import {IoLogoTwitter} from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Hero = () => {
  return (
    <section id ="home" className='w-full relative z-0 min-h-[400px]'>
      <div className='md:h-[250px] pt-[8rem] md:pt-[10rem] w-full flex items-center flex-col-reverse md:flex-row pl-6 gap-10 md:gap-0 md:p-0 justify-between'>
      <div className='flex flex-col h-full'>
        <h2 className='text-[3.75rem] md:text-[3.75rem] leading-[4rem] md:leading-[3.5rem] bg-gradient-to-l  background-animate from-[#ff1b1b] via-[#c471ed] to-[#45caff] bg-clip-text font-[600] font-montserrat text-transparent'>Akash Sharma.</h2>
        <p className='dark:text-white text-lg font-[500]'>A Web Developer</p>
        <p className='mt-5 text-gray-700 dark:text-gray-300 text-lg'>-Accepts bribes in form of sweets</p>
        <p className='text-gray-700 dark:text-gray-300 text-lg'>-Madridista &#129293;</p>
        <div className='flex mt-2 gap-[.1rem]'>
          <a href="https://www.twitter.com/heyyakash" rel = "noopenner norefferer" target = "_blank" className='text-xl hover:text-white p-1 hover:bg-gray-700 rounded-lg transitionAll '><IoLogoTwitter /></a>
          <a href="https://www.linkedin.com/in/akash-sharma-a3536519a" rel = "noopenner norefferer" target = "_blank" className='text-xl hover:text-white p-1 hover:bg-gray-700 rounded-lg transitionAll'><FaLinkedinIn /></a>
          <a href="https://github.com/heyyakash" rel = "noopenner norefferer" target = "_blank" className='text-xl hover:text-white p-1 hover:bg-gray-700 rounded-lg transitionAll'><AiFillGithub /></a>
        </div>
      </div>
      <div className='h-24 md:h-[180px] w-24 md:w-[180px] self-start overflow-hidden rounded-full bg-white'>
        <img src="/mine4.jpg" className='w-full h-full object-cover' alt="profile" />
      </div>
      </div>

    </section>
  )
}

export default Hero