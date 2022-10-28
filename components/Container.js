import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Container = () => {
    return (
        <div className='max-w-[1300px] relative z-10 mx-auto'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Container