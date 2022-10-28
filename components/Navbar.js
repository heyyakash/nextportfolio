import React, { useState } from 'react'
import NavLinks from './NavLinks'
import {HiMenu} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'

const Navbar = () => {
    const [show,setShow] = useState(false)
    return (
        <nav className=' flex h-[80px] md:h-[100px] items-center bg-white/70 md:bg-transparent md:items-start md:pt-5 justify-between overflow-hidden'>
            <div className='text-sm ml-3 md:ml-0 flex leading-[.85rem] flex-col font-[700]'>
                <p>Akash <sup className='text-[.5rem]'>TM</sup></p>
                <p>Sharma.</p>
            </div>
            <div className={`flex gap-12 absolute md:relative flex-col md:flex-row bg-white/70 md:bg-transparent w-full md:w-auto ${show?'top-[80px]':'top-[-1000%]'} transitionAll md:top-0 h-[calc(100vh-80px)] md:h-auto p-3 md:p-0`}>
              <NavLinks heading = "Home" text = "The most comfortable place in the world" />
              <NavLinks heading = "About Me" text = "Wanna do great stuff and learn everyday" />
              <NavLinks heading = "Projects" text = "Applied my knowledge and made people happy" />
              <NavLinks heading = "Contact Me" text = "Lets meet, chat , have coffee and fun" />
            </div>

            <div onClick={()=>setShow(!show)} className='block md:hidden mr-3'>
                {
                    show?<IoMdClose />:<HiMenu />
                }
            </div>
        </nav>
    )
}

export default Navbar