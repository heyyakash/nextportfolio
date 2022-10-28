import React from 'react'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full h-[50vh]  relative  mt-[7rem] flex justify-between items-center'>
      <div className=' text-sm  absolute -left-[3rem] -rotate-90   '>
        <p className='inline'>Follow</p>
      <BsTwitter className=' ml-5 inline  rotate-90' />
      <FaLinkedinIn className='ml-3 rotate-90 inline' />
      </div>
      <div className='flex ml-10 gap-[14rem] relative flex-[.7] flex-col'>
        <p className='text-sm'>A Web Developer</p>
        <h1 className='text-[7rem] absolute mt-7 z-[100] leading-[7rem] '>
          Akash<br />Sharma.
        </h1>
        {/* <p className='mt-7 text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusamus? Repudiandae enim blanditiis officiis libero quod. Perferendis provident perspiciatis totam sequi ipsam vel est voluptas velit voluptatem, nesciunt, reprehenderit voluptates?</p> */}
        <div className='mt-8 ml-3 cursor-pointer circleButton flex justify-center items-center w-[160px] h-[160px] rounded-full font-extrabold border-[1px] border-black '>Let's Talk</div>
      </div>
      <div className='flex-1 mt-[5rem] h-[100%] w-[600px] '>
        <img src="/mine.jpg" alt="image" className='object-cover hover:translate-x-2 hover:-translate-y-2 transition-all duration-[400ms.] h-[100%]' />
      </div>
    </div>
  )
}

export default Hero