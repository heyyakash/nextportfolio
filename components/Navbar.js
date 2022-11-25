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
        <nav className={`fixed left-0  bg-white/10  dark:bg-black/30 md:h-[65px]  w-full  z-[100] top-0 `}>
            <div className={`flex mx-auto md:h-[65px] h-[80px] w-full md:w-[900px]   items-center ${show ? "bg-white/70 dark:bg-black/80 " : "backdrop-blur-[2px]"} md:bg-transparent md:items-start md:pt-5 justify-between md:overflow-hidden`}>
                <div className='text-sm ml-3 z-[200] md:ml-0 font-montserrat flex leading-[.85rem] flex-col font-[700]'>
                    <p>Akash <sup className='text-[.5rem] bg-gradient-to-t dark:bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59] bg-clip-text text-transparent'>TM</sup></p>
                    <p>Sharma.</p>
                </div>

                <div className={`flex  md:ml-auto md:mr-3 z-[100]  gap-6 h-[120vh] md:h-auto py-20 md:py-0  backdrop-blur-2xl md:backdrop-blur-none absolute  md:relative flex-col md:flex-row bg-white/70 dark:bg-black/70  dark:md:bg-transparent md:bg-transparent w-full md:w-auto ${show ? 'top-[0]' : 'top-[-2000%]'} transitionAll duration-500 md:top-0 h-[calc(100vh-80px)] md:h-auto p-3 md:p-0`}>
                    <NavLinks setShow={setShow} heading="Home" link={"#home"} text="The most comfortable place in the world" />
                    <NavLinks setShow={setShow} heading="Skills" link={'#skills'} text="See what I can do" />
                    <NavLinks setShow={setShow} heading="Projects" link={'#projects'} text="Applied my knowledge and made people happy" />
                    <NavLinks setShow={setShow} heading="Contact Me" link={"#contact"} text="Lets meet, chat , have coffee and fun" />

                </div>


                <div onClick={() => setShow(!show)} className='block z-[200] ml-auto md:hidden mr-3'>
                    {
                        show ? <IoMdClose /> : <HiMenu />
                    }
                </div>
                <div onClick={() => handleMode()} className='w-8 group z-[200] h-8 grid rounded-full md:mr-0 border-2 cursor-pointer md:self-start mr-4 relative md:-top-2 hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black transitionAll place-items-center'>
                    <MdDarkMode className='self-center hidden text-green-500 dark:block' />
                    <HiOutlineSun className='dark:hidden' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar