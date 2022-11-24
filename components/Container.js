import React from 'react'
import BlogSnip from './BlogSnip'
import Hero from './Hero'
import Navbar from './Navbar'
import Skills from './Skills'

const Container = () => {
    return (
       
        <div className='relative z-[100] max-w-[900px] w-[100%] mx-auto'>
            <Navbar />
            <Hero />
            <BlogSnip />
            {/* <Skills /> */}
        </div>
    )
}

export default Container