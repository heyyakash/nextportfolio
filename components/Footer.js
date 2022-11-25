import React from 'react'
import {AiFillHeart} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full p-4 flex flex-col items-center text-[.7rem] mt-10 justify-center'>
        <p className='flex items-center gap-1'>Made with <AiFillHeart className='text-pink-500' /> by Akash Sharma</p>
        <p>Copyright © 2022 Akash Sharma</p>
    </footer>
  )
}

export default Footer