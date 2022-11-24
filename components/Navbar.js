import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { HiMenu } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { MdDarkMode } from 'react-icons/md'
import { HiOutlineSun } from 'react-icons/hi'
import { CiDark } from 'react-icons/ci'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleMode = () => {
        const mode = localStorage.getItem('mode')
        if (!mode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('mode', 'dark')
        }
        else {
            document.documentElement.classList.remove('dark')
            localStorage.removeItem('mode')
        }
    }
    return (
        <nav className={` flex h-[80px]  md:h-[80px] z-[100] items-center ${show ? "bg-white/70 dark:bg-black " : ""} md:bg-transparent md:items-start md:pt-5 justify-between overflow-hidden`}>
            <div className='text-sm ml-3 md:ml-0 flex leading-[.85rem] flex-col font-[700]'>
                <p>Akash <sup className='text-[.5rem] bg-gradient-to-t dark:bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] bg-clip-text text-transparent'>TM</sup></p>
                <p>Sharma.</p>
            </div>
            <div className={`flex  md:ml-auto md:mr-3  gap-6 z-[100] backdrop-blur-2xl md:backdrop-blur-none absolute md:relative flex-col md:flex-row bg-white/70 dark:bg-black/60  dark:md:bg-transparent md:bg-transparent w-full md:w-auto ${show ? 'top-[80px]' : 'top-[-1000%]'} transitionAll duration-500 md:top-0 h-[calc(100vh-80px)] md:h-auto p-3 md:p-0`}>
                <NavLinks heading="Home" text="The most comfortable place in the world" />
                <NavLinks heading="About Me" text="Wanna do great stuff and learn everyday" />
                <NavLinks heading="Projects" text="Applied my knowledge and made people happy" />
                <NavLinks heading="Contact Me" text="Lets meet, chat , have coffee and fun" />
                

            </div>

            <div onClick={() => setShow(!show)} className='block ml-auto md:hidden mr-3'>
                {
                    show ? <IoMdClose /> : <HiMenu />
                }
            </div>
            <div onClick={() => handleMode()} className='w-8 group h-8 grid rounded-full md:mr-0 border-2 cursor-pointer md:self-start mr-4 relative md:-top-2 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transitionAll place-items-center'>
                <MdDarkMode className='self-center hidden text-green-500 dark:block' />
                <HiOutlineSun className='dark:hidden' />
            </div>
            
        </nav>
    )
}

export default Navbar