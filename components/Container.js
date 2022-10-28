import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Container = () => {
    return (
       
        <div className='relative z-[100] max-w-[1300px] w-[100%] mx-auto'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Container