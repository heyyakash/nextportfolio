import React from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <nav className=' flex items-start pt-5 justify-between'>
            <div className='text-sm flex leading-[.85rem] flex-col font-[700]'>
                <p>Akash <sup className='text-[.5rem]'>TM</sup></p>
                <p>Sharma.</p>
            </div>
            <div className='flex gap-12'>
              <NavLinks heading = "Home" text = "The most comfortable place in the world" />
              <NavLinks heading = "About Me" text = "Wanna do great stuff and learn everyday" />
              <NavLinks heading = "Projects" text = "Applied my knowledge and made people happy" />
              <NavLinks heading = "Contact Me" text = "Lets meet, chat , have coffee and fun" />
            </div>
        </nav>
    )
}

export default Navbar