import React from 'react'
import BlogSnip from './BlogSnip'
import Contact from './Contact'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

const Container = () => {
    return (
       
        <div className='relative z-[100] max-w-[900px] w-[100%] mx-auto'>
            <Navbar />
            <Hero />
            <BlogSnip />
            <Skills />  
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Container