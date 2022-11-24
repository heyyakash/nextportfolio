import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import Skills from './Skills'

const Container = () => {
    return (
       
        <div className='relative z-[100] max-w-[950px] w-[100%] mx-auto'>
            <Navbar />
            <Hero />
            {/* <Skills /> */}
        </div>
    )
}

export default Container