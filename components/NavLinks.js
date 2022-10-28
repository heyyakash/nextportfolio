import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'

const NavLinks = ({heading,text}) => {
    return (
        <div className='navlink'>
            <div className='flex justify-between'>
                <h4 className='text-[.85rem] font-bold'>{heading}</h4>
                <FiArrowUpRight className='mt-[.05rem]' />
            </div>
            <p className=' mt-0.5 text-[.55rem]  '>
                {text}
            </p>
        </div>
    )
}

export default NavLinks